/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RouterContent } from './router'
import { HashRouter } from "react-router-dom";
import AppWrapper from './styled';
import BottomNavigation from './component/BottomNavigation';

interface IProps {
  children?: ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
const App: FC<IProps> = () => {


  return <AppWrapper>
    <HashRouter>

      <RouterContent />
      <BottomNavigation />
    </HashRouter>

  </AppWrapper>
}

export default memo(App)
