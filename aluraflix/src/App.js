import './styles/reset.css'
import Header from './componentes/Header'
import theme  from './styles/theme'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Banner from '../src/componentes/Banner';
import Slider from './componentes/Carousel/Slider/Slider';
import Footer from './componentes/Footer'
import MainSection from './componentes/MainSection';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyContext from '../src/Context'
import VideoPlayer from './componentes/Carousel/Slider/VideoPlayer';
import FormularioVideos from './componentes/FormularioVideos';



function App() {
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);
  const [showFullPage, setShowFullPage] = useState(false);
  const [videoToPlay,setVideoToPlay] = useState();
  useEffect(() => {
    axios.get('http://localhost:3001/categorias')
      .then(response => setCategorias(response.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/videos')
      .then(response => setVideos(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleVideoLoading = (videoUrl) => {
    console.log("hola")
    console.log(videoUrl)
    setVideoToPlay(videoUrl);
    setShowFullPage(true);
    

  };

  const handleFullPageClose = () => {
    setShowFullPage(false);
  };

 console.log(showFullPage)
  return (
    <Router>
    <ThemeProvider theme={theme}>
    <div >
      <MyContext.Provider  value={{handleVideoLoading,handleFullPageClose ,setVideoToPlay , videoToPlay }}>
      <Header/>
      {!showFullPage&&<Banner/>}
      {showFullPage ? (<VideoPlayer/>) : (
        
        
        
        // <MainSection categorias = {categorias}  videos = {videos}/>)}

        <Routes>
        

        {/* <Route path="/formulariovideos" component={FormularioVideos}/> */}
        <Route exact path="/" element={<MainSection categorias={categorias} videos={videos} />} />
        {/* <Route exact path="/" element={() => <MainSection categorias={categorias} videos={videos} />} /> */}
        <Route path="/formulariovideos" element={<FormularioVideos/>} />
         
         
        </Routes>
        
      )}
      
      <Footer/>
      </MyContext.Provider>
    
    </div>
    </ThemeProvider>
    </Router>
  );
















}

export default App;
