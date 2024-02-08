/* eslint-disable react-refresh/only-export-components */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const Novel: FC<IProps> = () => {
    return <div> Novel</div>
}

export default memo(Novel)
