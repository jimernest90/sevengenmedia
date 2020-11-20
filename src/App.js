import './App.css';
import Header from './components/Header';
// import Home from './screens/Home';
// import About from './screens/About';
// import Work from './screens/Work';
// import AboutHisani from './screens/AboutHisani';
// import Contact from './screens/Contact';
import Routes from '../src/Routes/index'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Work/> */}
      {/* <AboutHisani/> */}
      {/* <Contact/> */}
      <Routes/>
    </div>
  );
}

export default App;
