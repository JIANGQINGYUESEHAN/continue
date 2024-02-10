import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import FloorComponentsWrapper from "./styled";
import NavBar from "../NavBar";
import NovelsAndComics from "../NovelsAndComics";

interface IProps {
  children?: ReactNode;
}

const FloorComponents: FC<IProps> = () => {
  return (
    <FloorComponentsWrapper>
      <NavBar left="效果" />
      <div className="Content">
        <NovelsAndComics />
        <NovelsAndComics />
        <NovelsAndComics />
      </div>
    </FloorComponentsWrapper>
  );
};

export default memo(FloorComponents);
