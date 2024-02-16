/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import InfoWrapper from "./styled";
import SvgIcon from "../SvgIcon";
import NavBar from "../../view/NavBar";
import { GetUserNews } from "../../service/static/common";

interface IProps {
  children?: ReactNode;
}

const Info: FC<IProps> = () => {
  const [List, setList] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await GetUserNews();
      console.log(res);
      setList(res.list);
    })();
  });
  return (
    <InfoWrapper>
      <NavBar IsShowChildren={false} middle="消息" />
      {List.map((item: any, index: number) => {
        return (
          <div className="feature-list" key={index}>
            <div className="feature-item">
              <div className="icon">
                <SvgIcon name="infocopy" size={25} />
              </div>
              <span className="text">{item.title}</span>
            </div>
          </div>
        );
      })}
    </InfoWrapper>
  );
};

export default memo(Info);
