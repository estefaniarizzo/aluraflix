import './styles/reset.css'
import Header from './componentes/Header'
import theme  from './styles/theme'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Banner from '../src/componentes/Banner';
import Slider from './componentes/Carousel/Slider/Slider';
import MainSection from './componentes/MainSection';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div >
      <Header/>
      <Banner/>
      <MainSection/>
    

    
    </div>
    </ThemeProvider>
  );
}

export default App;
