/* eslint-disable jsx-a11y/alt-text */
import React, { useMemo } from 'react';
import './style.scss'


function ListNew(props) {
    const newList = useMemo(() => [
        {
            'images' : 'https://react-plus.com/images/pages/HomePage/1.jpg',
            'title' : 'ReactとReact Nativeの テクノロジー企業',
            'text' : '当社はReactとReact Nativeのスペシャリストです。',
        },
        {
            'images' : 'https://react-plus.com/images/pages/HomePage/2.jpg',
            'title' : '24時間365日対応の迅速なレスポンス',
            'text' : 'Slackにご投稿いただければ、時間を問わず迅速にサポートいたします。',
        },
        {
            'images' : 'https://react-plus.com/images/pages/HomePage/3.jpeg',
            'title' : '真のエキスパート',
            'text' : '当社の開発者は、人生の大半をReactとReact Nativeに情熱を注いでいると言っても過言ではありません。',
        },
    ],[])
    
    return (
        <div className='list-new'>
            <div className='list-title'>
                <h1 className='title-1'>当社はReactとReact Nativeのスペシャリストです。</h1>
                <div className='under-line'></div>
                <h3 className='title-2'>ReactとReact Nativeを利用したプロジェクト開発サービスを提供しています。</h3>
                <h3 className='title-2'>Reactエキスパート人材が豊富な当社が、お客様のご要望に的確にお応えいたします。</h3>
            </div>
            <div className="list-item">
                {
                    newList.map((data, i) => {
                        return(
                            <div key={i} className="item">
                                <img className='new-img' src={data.images}/>
                                <h4 className='title-news'>{data.title}</h4>
                                <h4 className="text-news">{data.text}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ListNew;