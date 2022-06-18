import REACT from 'react'

import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';


const Logo = () => {
    return(
        <div className='ma4 mt0'>
               <Tilt  tiltMaxAngleX = '5' tiltMaxAngleY= '3'  >
                 <div className="Tilt br2 shadow-2" style={{ height: '100px', width:'100px' }}>
                     <div className='Tilt-inner pa3'><img  className='w-100' style={{paddingTop: '5px' }} alt='logo' src={brain}/></div>
                  </div>
               </Tilt>

        </div>
    );

}

export  default Logo;