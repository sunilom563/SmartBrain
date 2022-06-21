import REACT from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({imageUrl}) => {
    return(
        <div className='cent ma'>
            <div  className='absolute mt2' >
                <img alt='' src={imageUrl}  width='500px' height='auto'/>
            </div>
            

        </div>
    );

}

export  default FaceRecognition;