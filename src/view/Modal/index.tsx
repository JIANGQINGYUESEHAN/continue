import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import ModalWrapper from "./styled";

interface IProps {
  children?: ReactNode;
}

const Modal: FC<IProps> = () => {
  return <ModalWrapper> Modal</ModalWrapper>;
};

export default memo(Modal);
