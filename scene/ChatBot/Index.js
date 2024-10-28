import React, { useState, useRef, useEffect } from 'react';
import './Index.css';

export default function Index() {
    const [userMessage, setUserMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isThinking, setIsThinking] = useState(false);
    
    // Use ref to track if welcome message is already displayed
    const welcomeMessageShown = useRef(false);
    
    const chatboxRef = useRef(null);

    const API_KEY = '';
    const API_URL = '';

    // Scroll chatbox to bottom after each message
    const scrollToBottom = () => {
        setTimeout(() => {
            if (chatboxRef.current) {
                chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
            }
        }, 100);
    };

    // Function to create and add a message to chat history
    const createChatLi = (message, className) => {
        const newMessage = { message, className };
        setChatHistory((prevHistory) => [...prevHistory, newMessage]);
        scrollToBottom();
    };

    // Function to generate AI response
    // Function to generate AI response
const generateResponse = () => {
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: userMessage,
                },
            ],
        }),
    };

    fetch(API_URL, request)
        .then((res) => res.json())
        .then((data) => {
            // Ensure the response structure is as expected
            if (data && data.choices && data.choices[0] && data.choices[0].message) {
                setChatHistory((prevHistory) =>
                    prevHistory.map((message, index) =>
                        index === prevHistory.length - 1
                            ? { ...message, message: data.choices[0].message.content }
                            : message
                    )
                );
            } else {
                // Handle the case where the response doesn't contain the expected data
                setChatHistory((prevHistory) =>
                    prevHistory.map((message, index) =>
                        index === prevHistory.length - 1
                            ? { ...message, message: 'Oops! Something went wrong, please try again.' }
                            : message
                    )
                );
            }
            setIsThinking(false);
        })
        .catch(() => {
            setChatHistory((prevHistory) =>
                prevHistory.map((message, index) =>
                    index === prevHistory.length - 1
                        ? { ...message, message: 'Oops! Something went wrong, please try again.' }
                        : message
                )
            );
            setIsThinking(false);
        });
};


    // Handler for when the send button is clicked
    const handleSendMessage = () => {
        if (!userMessage.trim()) return;

        // Add user's message to the chat
        createChatLi(userMessage, 'ChatOutgoing');

        // Clear the input box
        setUserMessage('');

        // Add "Thinking..." message and fetch the response
        setIsThinking(true);
        createChatLi('Thinking...', 'ChatIncoming');
        setTimeout(()=>{
            generateResponse();
        },3000);
    };

    // Show a welcome message when the chatbot opens only once
    useEffect(() => {
        if (!welcomeMessageShown.current) {
            createChatLi('Welcome to the chatbot! How can I assist you today?', 'ChatIncoming');
            welcomeMessageShown.current = true; // Mark that the welcome message has been shown
        }
    }, []);

    return (
        <div className="show-chatbot">
            <div className="chatbot">
                <header>
                    <h2>Personal Health Care bot</h2>
                </header>
                <ul className="chatbox" ref={chatboxRef}>
                    {chatHistory.map((chat, index) => (
                        <li key={index} className={chat.className}>
                            <p>{chat.message}</p>
                        </li>
                    ))}
                </ul>
                <div className="chat_input">
                    <textarea
                        placeholder="Enter your message..."
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        required
                    />
                    <span id="send_btn" onClick={handleSendMessage}>
                        <i className="bx bx-send"></i>
                    </span>
                </div>
            </div>
        </div>
    );
}
