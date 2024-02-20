/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import DetailWrapper from "./styled";
import { Popup } from "antd-mobile";
import { HomeOutlined, SunOutlined, ProfileOutlined } from "@ant-design/icons";
import { WithRouter } from "../../router";
import {
  GetComicChapterDetails,
  GetDetailsAboutNovelsAndComics,
} from "../../service/static/common";

interface IProps {
  children?: ReactNode;
  query?: any;
}

const Detail: FC<IProps> = ({ query }) => {
  const { Resource_id, Section_id, Index } = query;
  const [Detail, setDetial] = useState([]);
  const [DetailInfo, setDetailInfo] = useState();
  //弹出层
  const [visible3, setVisible3] = useState(false);
  //获取详情
  useEffect(() => {
    (async () => {
      const res = await GetComicChapterDetails(Resource_id, Section_id);
      // console.log(res);
      setDetial(res.book_section_detail);
      const rea = await GetDetailsAboutNovelsAndComics(Resource_id);
      console.log(rea);
      setDetailInfo(rea);
    })();
  }, []);
  return (
    <DetailWrapper>
      {Index == 5 && (
        <div className="contentA">
          <p></p>
        </div>
      )}
      {Index == 1 && (
        <div className="content">
          <div className="imagContent">
            {Detail.map((item: any, index: any) => {
              return (
                <img
                  src={item.resource_url}
                  className="image"
                  alt=""
                  key={index}
                />
              );
            })}
          </div>
        </div>
      )}

      <Popup
        visible={visible3}
        onMaskClick={() => {
          setVisible3(false);
        }}
        position="left"
        bodyStyle={{ width: "60vw", height: "100%" }}
        className="Popup"
      >
        <div className="PopupA" style={{ width: "100%", height: "100%" }}>
          <div
            className="Top"
            style={{
              width: "100%",
              height: "60px",
              textAlign: "center",
            }}
          >
            <span
              className="TopSpan"
              style={{
                fontSize: "20px",
                lineHeight: "60px",
              }}
            >
              hahahah
            </span>
          </div>
          <div
            className="Middle"
            style={{
              width: "100%",
              height: "30px",
              backgroundColor: " #f8f8f8",
              padding: "0px 20px",
              margin: "10px 0px",
            }}
          >
            <span
              className="MiddleSpan"
              style={{
                fontSize: "12px",
                lineHeight: "30px",
              }}
            >
              {" "}
              第 1 章
            </span>
          </div>
        </div>
      </Popup>

      <div className="footer-navigation">
        <div className="icon-section">
          <div
            className="icon menu"
            onClick={() => {
              setVisible3(true);
            }}
          >
            <ProfileOutlined />
          </div>

          <div className="icon home">
            <HomeOutlined />
          </div>
          <div className="icon bell">
            <SunOutlined />
          </div>
        </div>
      </div>
    </DetailWrapper>
  );
};

export default WithRouter(memo(Detail));
