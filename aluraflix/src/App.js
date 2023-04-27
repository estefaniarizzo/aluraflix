import './styles/reset.css'
import Header from './componentes/Header'
import theme  from './styles/theme'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div >
      <Header/>

    
    </div>
    </ThemeProvider>
  );
}

export default App;
