import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './Pages/Authentication/Authentication';
import HomePage from './Pages/HomePage/HomePage';
import Message from './Components/Message';

function App() {
  return (
    <div className="">
      <Router>
      <Routes>
        <Route path='/*' element={<HomePage/>}></Route>
        <Route path='/message' element={<Message/>}></Route>
        <Route path='/*' element={<Authentication/>}></Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
