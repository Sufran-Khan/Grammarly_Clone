import logo from './logo.svg';
import './App.css';
import Grammar from './components/Grammar.js';
import Upload from './components/Upload.js';
function App() {
  return (
    <div className="App">
      <div className='header'>
      <h1>Grammarly Clone</h1>
      <p>Grammarly Clone helps you write mistake-free in Gmail, 
        Facebook, Twitter, LinkedIn, and any other app you use. 
        Even in text messages! Write Better in Seconds.</p>
      </div>

        <Grammar/>


        <Upload/>

        <div id="disclaimer">Copyright © 2022 Developed by SufranKhan for Daten and Wissen Pvt. Ltd.
    </div>
    </div>
  );
}

export default App;
