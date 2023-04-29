import './styles/reset.css'
import Header from './componentes/Header'
import theme  from './styles/theme'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Banner from '../src/componentes/Banner';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div >
      <Header/>
      <Banner/>
  

    
    </div>
    </ThemeProvider>
  );
}

export default App;
