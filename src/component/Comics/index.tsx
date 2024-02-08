/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import ComicsWrapper from './styled'

interface IProps {
    children?: ReactNode
}

const Comics: FC<IProps> = () => {
    const [isCartoon, SetIsCarToon] = useState(true)

    return <ComicsWrapper>



    </ComicsWrapper>


}

export default memo(Comics)
