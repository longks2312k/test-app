import React from 'react';
import './style.scss'

function Title(props) {
    return (
        <div className='banner-title'>
            <img src={ require('../../../../assets/images/slide-title-border.png') } alt='vn' />
            <img src={ require('../../../../assets/images/slide-title-border.png') } alt='vn' />
        </div>
    );
}

export default Title;