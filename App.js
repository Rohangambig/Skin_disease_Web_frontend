import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './scene/Users/Form';
import Home from './scene/Home/Index';
import FirstPage from '../src/scene/First_Page/Index';
import ChatPage from '../src/scene/Chats/Index'

function App() {
  return (
      <Router>
        <Routes>
          <Route  path='/login' element={<Login></Login>}></Route>
          <Route  path='/' element={<Home></Home>}></Route>
          <Route  path='/home' element={<FirstPage></FirstPage>}></Route>
          <Route path='/chat' element = {<ChatPage></ChatPage>}></Route>
        </Routes>
      </Router>

  );
}

export default App;
