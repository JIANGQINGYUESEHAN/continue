/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'

import { AppOutline, ContentOutline, HeartOutline, MovieOutline, PlayOutline, UnorderedListOutline, UserSetOutline } from 'antd-mobile-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { WithRouter } from '../../router'
import DetailBottomWrapper from './styled'

interface IProps {
    children?: ReactNode
}

const DetailBottom: FC<IProps> = (props: any) => {
    const navigate = useNavigate();
    // 需要显示底部导航的路径数组
    const BottomNavPaths = ['/detail'];
    //获取当前所在的路由
    const location = useLocation();
    // 检查当前路径是否需要隐藏底部导航
    const showBottomNav = BottomNavPaths.includes(location.pathname);



    const [IsShow, SetIsShow] = useState(showBottomNav)

    useEffect(() => {
        const showBottomNav = BottomNavPaths.includes(location.pathname);
        SetIsShow(showBottomNav)
    })






    return <DetailBottomWrapper>

        {
            IsShow && <div className='bottom'>

                {
                    <>
                        <div className='icon-wrapper' onClick={() => { }}>
                            <UnorderedListOutline className='icon' />
                            <div className='text'>目录</div>
                        </div>
                        <div className='icon-wrapper' onClick={() => { }}>
                            <PlayOutline className='icon' />
                            <div className='text'>开始暂停</div>
                        </div>
                        <div className='icon-wrapper' onClick={() => { }}>
                            <HeartOutline className='icon' />
                            <div className='text'>收藏</div>
                        </div>

                    </>
                }
            </div>
        }

    </DetailBottomWrapper>
}

export default WithRouter(DetailBottom)
