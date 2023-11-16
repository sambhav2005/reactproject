import React, { useState } from 'react';
import instituteImage from './eastwest.jpeg';
import cs from './cse.jpg';
import ece from './ece.jpg';
import ee from './ee.jpeg';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './components/Navbar/NavbarElements';
import About from './components/about/about';
import ReactDom from 'react-dom';
import {BrowserRouter , Routes , Route, Router, Switch, Link} from 'react-router-dom';
import Header from './components/common/heading/Header';
import organization from './components/chart';
import Dropdown from 'react-dropdown';

const App = () => {
  const [isOpen , setIsOpen ] = useState('false');
  const [isOpen1, setIsOpen1] = useState('false');
  const [isOpen2, setIsOpen2] = useState('false');
  return (
    <>
    <Nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'hotpink'}}>
      <NavMenu>
        
      <li>Institute</li>
      <li style= {{cursor: 'pointer'}} onClick = { () => setIsOpen1 (!isOpen1) }>Administration</li>
      {
        !isOpen1 && (
          
            <a>Structure</a>
         
        )
      }
      <li onClick={() => setIsOpen (!isOpen)} style={{cursor: 'pointer'}}>Academics</li>
      {
        !isOpen && (
          <div>
            <p>Faculty</p>
            <p>Academic Result</p>
            <p>Academic Calender</p>
          </div>
        )
      }
      <li style={{cursor: 'pointer'}} onClick={() => setIsOpen2 (!isOpen2)}>Placement</li>
      {
      !isOpen2 && (
        <div>
        <p>Placement Department</p>
        <p>TPO's Message</p>
        <p>Training Activity</p>
        </div>
      )
      }
      <li>Notice</li>
      <li>Gallery</li>
      </NavMenu>
    </Nav>
    <div className = "container" style= {{textAlign: 'center'}}>
    <img src={instituteImage} alt="img" />
    </div>
  <div className="about" align="center" style={ {margin: 50 + 'px',
  border: 2 + 'px'} }>
    Welcome to Eastwest Institute an institue of National importance under MHRD funded by Government of India ,
    Coalfield India Limited and TCS(Tata Consultancy Services).
  </div>
  
  <h3 style={{color: 'darkorange', textAlign: 'center'}}>
<b><strong>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida lorem sit amet erat egestas finibus. Duis sed tortor quis elit 
sollicitudin accumsan ut ac mi. Vestibulum non mauris vel felis interdum mattis. Pellentesque habitant morbi tristique senectus et netus et 
malesuada fames ac turpis egestas. Mauris in magna id risus blandit ultricies sed eget augue. Nunc a lorem convallis, egestas enim eu, molestie
magna. Mauris a enim convallis, aliquet elit in, aliquet libero. Nullam dui turpis, fringilla sed vestibulum ac, laoreet porttitor sem. 
Nullam lacinia augue quis imperdiet pretium. Maecenas sit amet ante in orci vehicula commodo. Sed ac bibendum felis. Quisque fermentum mi 
eget felis efficitur imperdiet.
</strong></b>      
  </h3>
  <div >
    <h1>Courses Offered:</h1>
  </div>
  <div className='card' style={{color: 'cadetblue', backgroundColor: 'aquamarine'}} align='center'>
    <div className='card-body'>
    <img src={cs} style= {{ width: 300 +'px', margin: 20+'px' }} />
    <div className='card-text'>
      <h3>Computer Science and Engineering</h3>
    </div>
    </div>
  </div>

  <div className='card' style={{color: 'cadetblue', backgroundColor: 'aquamarine'}} align='center'>
    <div className='card-body'>
    <img src={ece} style= {{  width: 300 +'px', margin: 20+'px'}}/>
    <div className='card-text'>
      <h3>Electronics and communication engineering</h3>
    </div>
    </div>
  </div>

  <div className='card' style={{color: 'cadetblue', backgroundColor: 'aquamarine'}} align='center'>
    <div className='card-body'>
    <img src={ee} style= {{ width: 300 +'px', margin: 20+'px'}}/>
    <div className='card-text'>
      <h3>Electrical Engineering</h3>
    </div>
    </div>
  </div>
  <footer style= {{backgroundColor: 'darkblue', textAlign: 'center'}}>
    <span style={{color:'gold'}}>Contact Details: </span>
    <h6 style={{color:'gold'}}>Haus Khas, Delhi</h6>
  </footer>
  </>
  );
}
export default App;