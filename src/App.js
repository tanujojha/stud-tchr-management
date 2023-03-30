import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LtFltPane from './components/ltFltPane/ltFltPane';
import Navbar from './components/navbar/navbar';
import RtFltPane from './components/rtFltPane/rtFltPane';
import CreatePage from './pages/createPage/createPage';
import EditPage from './pages/editPage/editPage';
import MainPage from './pages/mainPage/mainPage';
import ListPage from './pages/listPage/listPage';
import ProfilePage from './pages/profilePage/profilePage';



function App() {

  const [type, setType] = useState("")

  return (
    <div className="App">
      <Navbar/>
      <LtFltPane />
      <RtFltPane />
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path="/studs" element={<ListPage />}/>
        <Route path="/tchrs" element={<ListPage />}/>
        <Route path='/profile/stud/:id' element={<ProfilePage />}/>
        <Route path='/profile/tchr/:id' element={<ProfilePage />}/>
        <Route path='/edit/stud/:id' element={<EditPage />}/>
        <Route path='/edit/tchr/:id' element={<EditPage />}/>
        <Route path='/create/stud' element={<CreatePage/>}/>
        <Route path='/create/tchr' element={<CreatePage/>}/>
      </Routes>
    </div>
  );
}

export default App;

  

