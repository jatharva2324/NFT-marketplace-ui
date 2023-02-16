import './App.css';
import Navbar from "./components/Navbar";
import Row from './components/ProductRow';
import Footer from "./components/Footer"
import CategoriesRow from './components/CategoriesRow';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>Hellow</p>
    //   </header>
    // </div>
    <div>
      {/* <p>Hellow</p> */}
      <Navbar/>
      <div className='m-4'>
        <div className='ms-2 my-3'>
          <h2>Trending</h2>
        </div>
        <Row/>
      </div>
      <div className='m-4'>
        <div className='ms-2 my-3'>
          <h2>Category</h2>
        </div>
        <CategoriesRow/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
