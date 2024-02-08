/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import BottomNavigationWrapper from './styled'
import { AppOutline, ContentOutline, MovieOutline, PlayOutline, UserSetOutline } from 'antd-mobile-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { WithRouter } from '../../router'

// import ComicsSvg from '@/assets/svg/Comics.svg'
// import ComicsSvgBlank from '@/assets/svg/动漫2.svg'

// import Novel from '../../assets/svg/编组 82.svg'
// import NovelBlank from '../../assets/svg/8.svg'


// import MovieBlank from '../../assets/svg/编组 57.svg'
// import Movie from '../../assets/svg/film.svg'

// import ShortVideo from '../../assets/svg/短视频.svg'

// import MyBlank from '../../assets/svg/9.svg'
// import My from '../../assets/svg/my.svg'

interface IProps {
    children?: ReactNode
}

const BottomNavigation: FC<IProps> = (props: any) => {
    const navigate = useNavigate();
    // 需要显示底部导航的路径数组
    const BottomNavPaths = ['/home', '/video', '/novel', '/ShortVideo', '/user', '/more'];
    //获取当前所在的路由
    const location = useLocation();
    // 检查当前路径是否需要隐藏底部导航
    const showBottomNav = BottomNavPaths.includes(location.pathname);



    const [IsShow, SetIsShow] = useState(showBottomNav)

    useEffect(() => {
        const showBottomNav = BottomNavPaths.includes(location.pathname);
        SetIsShow(showBottomNav)
    })





    const BorderBottomArray: any = [
        {
            id: 1,
            // SelectIcon: <img src={ComicsSvgBlank} className='img' alt="My icon" />,

            path: '/home',
            name: '动漫'
        }, {
            id: 2,
            // SelectIcon: <img src={MovieBlank} alt="My icon" />,
            path: '/video',
            name: '影片'
        }, {
            id: 3,
            //SelectIcon: <img src={ShortVideo} alt="My icon" />,
            path: '/ShortVideo',
            name: '短视频'
        }, {
            id: 4,
            //SelectIcon: <img src={NovelBlank} alt="My icon" />,
            path: '/novel',
            name: '小说'
        }, {
            id: 5,
            //SelectIcon: <img src={MyBlank} alt="My icon" />,
            path: '/user',
            name: '用户'
        }



    ]

    return <BottomNavigationWrapper>

        {
            IsShow && <div className='bottom'>

                {
                    BorderBottomArray.map((item: any) => {
                        return (<div className='selectIcon' key={item.id} onClick={() => {

                            navigate(`${item.path}`)
                        }}>
                            <div className='Icon'>{item.SelectIcon}</div>


                        </div>)
                    })
                }
            </div>
        }

    </BottomNavigationWrapper>
}

export default WithRouter(BottomNavigation)
