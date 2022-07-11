import logo from './logo.svg';
import './App.css';
import googleLogo from '/workspace/helloWorldPractice/my-app/src/Google__G__Logo.svg'
import youtubeLogo from '/workspace/helloWorldPractice/my-app/src/YouTube-Icon-Full-Color-Logo.wine.svg'
import googleDriveLogo from '/workspace/helloWorldPractice/my-app/src/Google_Drive-Logo.wine.svg'
import gmailLogo from '/workspace/helloWorldPractice/my-app/src/Gmail-Logo.wine.svg'
import * as React from 'react';
import Button from '@mui/material/Button';
import { ButtonGroup, Fab,  } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: 'aqua' }}>
          Tunmise Kehinde
        </p>
        <div className='Google'>
          <a href="https://google.com" target="_blank" rel="noreferrer">
          <img src={googleLogo} className="App-logo" alt="logo" width = "300" height = "300" />
          </a>

          <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <img src={youtubeLogo} className="App-logo" alt="logo" width = "300" height = "300"/>
          </a>

          <a href="https://drive.google.com" target="_blank" rel="noreferrer">
          <img src={googleDriveLogo} className="App-logo" alt="logo" width = "300" height = "300"/>
          </a>

          <a href="https://gmail.google.com" target="_blank" rel="noreferrer">
          <img src={gmailLogo} className="App-logo" alt="logo" width = "300" height = "300"/>
          </a>
        </div>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a> */}
        <br>
        </br>
        <ButtonGroup color="primary" variant="outlined">
          <Button variant="contained"
            className="App-link"
            href="https://google.com"
            target="_blank">
            Google
          </Button>
          <Button variant="contained"
            className="App-link"
            href="https://youtube.com"
            target="_blank">
            Youtube
          </Button>
          <Button variant="contained"
            className="App-link"
            href="https://gmail.com"
            target="_blank"
            src={googleLogo}>
            Gmail
          </Button>
        </ButtonGroup>
          
      </header>
    </div>
  );
}

export default App;
