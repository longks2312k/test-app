import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import './style.scss'

const navList = [
    {
        'title':'ホーム',
        'link':'/'
    },
    {
        'title':'会社情報',
        'link':'/about'
    },
    {
        'title':'サービス',
        'link':'/cultural'
    },
    {
        'title':'テクニカルスタック',
        'link':'/recruiment',
        'dropList':[
            {
                'title':'Reactのテクニカルスタック',
                'link':''
            },
            {
                'title':'React Nativeのテクニカルスタック',
                'link':''
            },
            {
                'title':'コーディングサンプル(WEB)',
                'link':''
            },
            {
                'title':'コーディングサンプル(RN)',
                'link':''
            },
        ]
    },
    {
        'title':'当社のチーム',
        'link':'/events'
    },
    {
        'title':'プロジェクト',
        'link':'/forcommuty'
    },
    {
        'title':'お問い合わせ',
        'link':'/blog'
    },
]

function Navigation(props) {
    return (
        <nav className='navigation'>
            <ul>
                {
                    navList.map((data, i) => {
                        return(
                            <li key={i} className='navItem'>
                                <Link to={data.link} className=''>{data.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}

export default Navigation;