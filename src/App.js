import { TextField } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      
      <TextField id="outlined-basic" label="Team 1 Name" variant="outlined" />
      <TextField id="outlined-basic" label="Team 2 Name" variant="outlined" />
    </div>
  );
}

export default App;
