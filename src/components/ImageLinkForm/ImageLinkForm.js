import REACT from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return(
        <div className='ma4 mt0'>
             <p className='f3 cent'>
                {'This Magic Brain will detect faces in you pictures'}
             </p>
             <div className='cent'>
                <div className='form pa4 br3 cent shadow-5'>
                  <input className='f4 pa2 w-70 cent' type='text' />
                  <button className='  w-30 grow  f4 link ph3 pv3 dib white bg-light-purple '>Detect</button>
                </div> 
             </div>

        </div>
    );

}

export  default ImageLinkForm;