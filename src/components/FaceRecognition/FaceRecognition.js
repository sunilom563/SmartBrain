import REACT from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({imageUrl}) => {
    return(
        <div className='cent'>
            <img alt='' src={imageUrl} />
            

        </div>
    );

}

export  default FaceRecognition;