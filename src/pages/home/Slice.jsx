import { useState } from 'react';
import { sliderInformation } from './data';
import { Link, Navigate } from 'react-router-dom';

var sliderSize = sliderInformation.length;
var indexSlider = 0;

export const Slice = () => {
    // console.log(indexSlider)
    const [index, setIndex] = useState(0);
    
    const onNextSlider = () => {
        var indexSlider = index + 1;
        if(indexSlider >= sliderSize){
            setIndex(0);
        }else{
            setIndex(indexSlider)
        }
    }

    const onPrevSlider = () => {
        var indexSlider = index - 1;
        if(indexSlider < 0){
            setIndex(sliderSize - 1);
        }else{
            setIndex(indexSlider);
        }
    }

    return (
        <div id='home' className="slice">
            <button onClick={ onNextSlider } className="btn-arrow btn-left"><i className="fa-solid fa-arrow-left"></i></button>
            <div className="content">
                <div className="description">
                    <h1>{ sliderInformation[index].title }</h1>
                    <p>{ sliderInformation[index].description }</p>
                    <Link className='link' to='/shop' ><button className="btn-more">VER CATÁLOGO <i className="fa-solid fa-arrow-right"></i></button></Link>
                </div>
                <div className='img-container'>
                    <img src={ sliderInformation[index].img } />
                </div>
            </div>
            <button onClick={ onPrevSlider } className="btn-arrow btn-right"><i className="fa-solid fa-arrow-right"></i></button>
        </div>
    )
}
