import REACT from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({imageUrl, box}) => {
    return(
        <div className='cent ma'>
            <div  className='absolute mt2' >
                <img   id='inputimage' alt='' src={imageUrl}  width='500px' height='auto'/>
            </div>
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCOl, bottom: box. bottomRow, lef: box.leftCol }}>

            </div>
            

        </div>
    );

}

export  default FaceRecognition;