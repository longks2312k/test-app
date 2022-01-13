import React, { useCallback, useEffect, useState } from 'react';
import Item from './Item';
import './style.scss'

const slides = [
    {
        'title':'REACTPLUS.COM',
        'big-title':'当社はReactとReact Nativeのスペシャリストです。',
        'text': '何百もの日本企業のお客様に信頼されているReactエキスパートを提供します。',
        'image':'https://react-plus.com/images/slideShow/slide2.jpg'
    },
    {
        'title':'ラボ開発 - 請負開発',
        'text': 'ReactとReact Nativeを利用したプロジェクト開発サービスを提供しています。',
        'text-2': 'Reactエキスパート人材が豊富な当社が、お客様のご要望に的確にお応えいたします。',
        'image':'https://react-plus.com/images/slideShow/slide3.jpg'
    },
    {
        'title':'ラボ開発 - 請負開発',
        'text': 'ReactとReact Native',
        'text-2': 'Reactエキスパート人材が豊富な当社が、お客様のご要望に的確にお応えいたします。',
        'image':'https://react-plus.com/images/slideShow/slide1.jpg'
    }
]

function Banner() {
    const [dataBanner, setDataBanner] = useState(slides[0])
    const [index, setIndex] = useState(0)

    const autoBanner = () => {
        setTimeout(()=>{
            handleNext()
        }, 3500)
    }

    useEffect(() => {
        autoBanner()
        setDataBanner(slides[index])
    },[index]);

    const handleNext = useCallback(() => {
        index === slides.length - 1 ? setIndex(0) : setIndex(index + 1)
    },[index])

    const handlePrev = useCallback(() => {
        index === 0 ? setIndex( slides.length - 1 ): setIndex( index - 1 )
    },[index])

    return (
        <div className='banner'>
            <Item data={dataBanner} next={handleNext} prev={handlePrev} />
        </div>
    );
}

export default Banner;