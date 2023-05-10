import './Gallery.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Gallery = (props) => {
    function importAll(r) {
        return r.keys().map(r);
      }
      const images = importAll(require.context('../../../public/images/cups/gallery', false, /\.(png|jpe?g|svg)$/));
    return ( <div className='Gallery-container'>
        {images.map((item, index) => {
            return(
                <LazyLoadImage className='gallery-image' src={item}/>
            )
        })}
    </div> );
}
 


export default Gallery;