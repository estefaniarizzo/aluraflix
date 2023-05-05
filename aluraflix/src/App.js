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



function App() {
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);
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

 
  return (
    <ThemeProvider theme={theme}>
    <div >
      <Header/>
      <Banner/>
      <MainSection categorias = {categorias}  videos = {videos}/>
      <Footer/>

    
    </div>
    </ThemeProvider>
  );
}

export default App;
