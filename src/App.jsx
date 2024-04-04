
import './App.css';
import Login from './Pages/Login/Login'

import styled from 'styled-components';
import { AccountBox } from './Pages/Start/accountbox/account';
import Apps from "./Pages/Home/Apps"

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;



const backgrounds = styled.div`
background-image: url('../../Assets/Images/background.jpeg');
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
`;

/* 
   
   <AppContainer>
    <AccountBox/>
   </AppContainer>


    <Apps></Apps>

*/

function App() {
  return (
  
   
<Apps></Apps>

  );
}

export default App;
