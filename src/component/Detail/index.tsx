/* eslint-disable react-refresh/only-export-components */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import DetailWrapper from './styled'
import { LeftOutline } from 'antd-mobile-icons'
import Chapter from '../../view/Chapter'
import { useNavigate } from 'react-router-dom'
import Banner from '../../view/Banner'
import More from '../../view/More'
import DetailBottom from '../DetailBottom'
import EndComponent from '../../view/EndComponent'

interface IProps {
    children?: ReactNode
}

const Detail: FC<IProps> = () => {
    const navigate = useNavigate();


    return <DetailWrapper>
        <div className='content'>
            <div className='header'>
                <span onClick={() => {
                    navigate(-1)
                }} > <LeftOutline /></span>&nbsp;&nbsp;
                <span>漫画详情</span>
            </div>
            <div className='main'>
                <div className='mainImag'>

                </div>
                <div className='author'>
                    <span>作者:</span> &nbsp;&nbsp;
                    <span>ahaha</span>
                </div>
                <div className='detail'>
                    <div className='num'>
                        <span className='hot'>热度</span>
                        <span className='hotNum'>8888</span>
                    </div>
                    <div className='num'>
                        <span className='hot'>热度</span>
                        <span className='hotNum'>8888</span>
                    </div>
                    <div className='num'>
                        <span className='hot'>热度</span>
                        <span className='hotNum'>8888</span>
                    </div>
                </div>
                <div className='describe'>
                    <div className='title'>
                        <span>故事概要:</span> &nbsp; &nbsp;
                        <span>-</span>
                    </div>
                    <div className='title'>
                        <span>上线时间:</span> &nbsp; &nbsp;
                        <span>-</span>
                    </div> <div className='title'>
                        <span>相关标签:</span> &nbsp; &nbsp;
                        <span>-</span>
                    </div>
                </div>
            </div>
            <Chapter />
            <Banner detailTitle='更多' />
            <More />
            <EndComponent />
            <DetailBottom />


        </div>

    </DetailWrapper>
}

export default memo(Detail)
