/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import InfoWrapper from "./styled";
import SvgIcon from "../SvgIcon";

import { GetUserNews } from "../../service/static/common";
import { NavBar } from "antd-mobile";
import { useNavigate } from "react-router-dom";

interface IProps {
  children?: ReactNode;
}

const Info: FC<IProps> = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const right = (
    <div className="icon">
      <SvgIcon name="clear" size={20} />
    </div>
  );

  const [List, setList] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await GetUserNews();
      // console.log(res);
      setList(res.list);
    })();
  }, []);
  return (
    <InfoWrapper>
      <NavBar right={right} onBack={back}>
        消息
      </NavBar>
      {List.map((item: any, index: number) => {
        return (
          <div className="feature-list" key={index}>
            <div className="feature-item">
              <div className="icon">
                <SvgIcon name="infocopy" size={30} />
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
