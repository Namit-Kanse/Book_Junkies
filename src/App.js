
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes  ,Route } from 'react-router-dom';
import Home from './components/Pages/Home'
import Services from './components/Pages/services';
import Products from './components/Pages/products';
import SignUp from './components/Pages/sign-up';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/' exact Component={Home} />
    <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' element={<SignUp/>} />
    </Routes>
    </Router>
    </>
      
   
  );
}

export default App;
