import './App.css';
// import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React,{useState} from 'react'
import About from './components/About';
import Abc from './components/Abc';
import MyComponent from './components/MyComponent';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.title = 'Text Utils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'Text Utils - Light Mode';
    }
  }

  return (
    <Router>
    <Navbar title="TextUtils" mode={mode} aboutText="About TextUtils" toggleMode={toggleMode}/>
    <MyComponent/>
    {/* <Alert alert="This is a dismissible alert"/> */}
    <div className="container my-3">
      <Switch>
        <Route exact path="/about">
          <About/>
          <Abc/>
        </Route>
        <Route exact path="/">
          <TextForm mode={mode} aboutText="About TextUtils" toggleMode={toggleMode} head="Enter the text to analyze below"/>
          <About/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
