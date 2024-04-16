import './App.css';
import styled, { createGlobalStyle } from "styled-components"
import { Router } from './routes/router';


const GlobalStyle = createGlobalStyle`
    html{
        font-family: 'IBM Plex Sans', sans-serif;
    }
    button ,input {
        font-family: 'Noto Sans', sans-serif;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        text-decoration:none;
    }

    #root{ 
        width:100vw;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:#e5e5e5;
    }
`
const AppContainer = styled.div`
  background-color:#fafafa;
  width: 428px;
  max-width: 100vw;
  height: 926px;
  max-height: 100vh;
`

function App() {
  return (
    <div className="App">
      <AppContainer>
        <GlobalStyle />
        <Router />
      </AppContainer>
    </div>
  );
}

export default App;
