import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import FloorComponentsWrapper from "./styled";
import NavBar from "../NavBar";
import NovelsAndComics from "../NovelsAndComics";
import VideoItem from "../VideoItem";

interface IProps {
  children?: ReactNode;
  isCartoon: number;
}

const FloorComponents: FC<IProps> = ({ isCartoon }) => {
  return (
    <FloorComponentsWrapper>
      <NavBar left="效果" />
      {isCartoon == 1 ? (
        <>
          <div className="Content">
            <NovelsAndComics />
            <NovelsAndComics />
            <NovelsAndComics />
            <NovelsAndComics />
          </div>
        </>
      ) : (
        <>
          <div className="ContentA">
            <VideoItem />
            <VideoItem />
          </div>
        </>
      )}
    </FloorComponentsWrapper>
  );
};

export default memo(FloorComponents);
