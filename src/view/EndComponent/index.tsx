/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import EndComponentWrapper from './styled'
import { Divider } from 'antd-mobile'

interface IProps {
    children?: ReactNode
    EndComponent?: string
}

const EndComponent: FC<IProps> = ({ EndComponent = '没有更多了' }) => {
    return <EndComponentWrapper>

        <div className='hint'>
            <Divider>
                {EndComponent}
            </Divider>
        </div>



    </EndComponentWrapper>
}

export default memo(EndComponent)
