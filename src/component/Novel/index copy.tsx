/* eslint-disable react-refresh/only-export-components */
import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import NovelWrapper from "./styled";
import SvgIcon from "../SvgIcon";
import { ProjectList } from "../../service/static/common";

interface IProps {
  children?: ReactNode;
}

const Novel: FC<IProps> = () => {
  const [isNovelCategory, SetisNovelCategory] = useState<number>(1);
  const [CategoryListAllNovel, setCategoryListAllNovel] = useState([]);
  useEffect(() => {
    (async () => {
      let rea = await ProjectList(5);
      console.log(rea);
      //title
      setCategoryListAllNovel(rea.list);
    })();
  }, []);
  return (
    <NovelWrapper>
      <div className="Select">
        {isNovelCategory == 1 ? (
          <div className="common">
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={25} />
            </div>
            <div className="ContentTitle">
              <span className="Comics">漫画</span>
            </div>
          </div>
        ) : (
          <div className="common">
            <span className="Comics">漫画</span>
          </div>
        )}

        {isNovelCategory == 2 ? (
          <div className="common">
            <div className="ContentIcon">
              <SvgIcon name="CheckCircle" size={25} />
            </div>
            <div className="ContentTitle">
              <span className="Comics">动漫</span>
            </div>
          </div>
        ) : (
          <div className="common">
            <span className="Comics">动漫</span>
          </div>
        )}
      </div>
    </NovelWrapper>
  );
};

export default memo(Novel);
