
import './App.css';

import Footer from './components/Footer';
import Navi from './components/Navi';
import Nav2 from './components/Nav2';
import Content from './components/Content';
import Productcat from './components/Productcat';
import Latest from './components/Latest';
import Hr from './components/Hr';
import Grid from './components/Grid clothes';
import Category from './components/Category';
import Footer2 from './components/Footer2';






function App() {
  return (
   <header className="  bg-white " >
  <div className="    " > 
  
 
  
  <Navi/>
  <Nav2/>
   <Content/>
  <Productcat/>
  <Category/>
   
  <Latest/>
  <Hr/>
  <Grid/>
  
   
  
  <Footer2/>
  <Footer/>
 
 
  
  </div> 

  
 
  
 
    
   </header>

 
 
 
 
 );

}

export default App;
