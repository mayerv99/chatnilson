import { createGlobalStyle } from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Header from './components/Header'
import FormsContainer from './Forms/FormsContainer'


function App() {

  return (
    <div>
      <GlobalStyle/>
      <Header title = "Chatnilson">
        <AccountCircleIcon className = "icon" fontSize = "large"/>
      </Header>
      <FormsContainer/>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  :root{
    --color-primary: #24b3a8;
    --color-secondary:#27282c;
    --color-alert: #ff2768;
  }

  body {
    width: 100vw;
    height: 100vh;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  input{
    border: none;
    border: 1px solid var(--color-primary);
    width: 99%;
    padding: 3px 5px;
    line-height: 33px;

    :focus{
      outline: none;
    }
  }
`

export default App;