import './App.css'
import { BrowserRouter as Router , Switch , Route, Link  } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';
import Products from './products/products';


function App() {
  

  return (
  <>
  <Header />

    <Router>
      <Route path="/" component={<Home />} />
      <Route path="/about" component={<About />} />
      <Route path="/contact" component={<Contact />} /> 
      <Route path="/products" component={<Products />} /> 
    </Router>
      <Footer />
  </>
  )
}

export default App
