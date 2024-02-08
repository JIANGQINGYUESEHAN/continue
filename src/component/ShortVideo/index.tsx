import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const ShortVideo: FC<IProps> = () => {
    return <div> ShortVideo</div>
}

export default memo(ShortVideo)
