/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import UserWrapper from "./styled";
import SvgIcon from "../SvgIcon";
import { useNavigate } from "react-router-dom";
import { Divider, Modal } from "antd-mobile";
import qiandaoImage from "../../assets/img/qiandao.png";
interface IProps {
  children?: ReactNode;
}

const User: FC<IProps> = () => {
  const navigate = useNavigate();
  const IconArray: any = [
    {
      id: 1,

      SelectIcon: <SvgIcon name="history" size={35} />,
      path: "/history",
      name: "历史",
    },
    {
      id: 2,

      SelectIcon: <SvgIcon name="collect" size={35} />,
      path: "/collect",
      name: "我的收藏",
    },
    {
      id: 3,
      SelectIcon: <SvgIcon name="info" size={35} />,
      path: "/info",
      name: "消息",
    },
    {
      id: 4,
      SelectIcon: <SvgIcon name="appDown" size={35} />,
      path: "/apppdownload",
      name: "下载",
    },
  ];
  const LineArray: any = [
    {
      id: 1,

      SelectIcon: <SvgIcon name="set" size={28} />,
      path: "/set",
      name: "设置",
    },
    {
      id: 2,

      SelectIcon: <SvgIcon name="coin" size={28} />,
      path: "/friend",
      name: "邀请朋友",
    },
    {
      id: 3,
      SelectIcon: <SvgIcon name="bindphone" size={28} />,
      path: "/bindPhone",
      name: "绑定手机号",
    },
    {
      id: 4,
      SelectIcon: <SvgIcon name="save" size={28} color="rgb(99, 99, 99)" />,
      path: "/save",
      name: "保存账号密码",
    },
  ];
  const [visible, setVisible] = useState(false);
  return (
    <UserWrapper>
      <div className="content">
        <div className="vipInfo">
          <div className="top">
            <div className="imag">
              <img
                src="https://www.cooer.cc/uploads/arctimg/20230418/1681794793790..jpg"
                alt="头像"
                className="img"
              />
            </div>
            <div className="Info">
              <div className="left">
                <div className="userName">
                  <span> 啊哈哈哈啊哈哈哈</span>
                </div>
                <div className="userNikename">
                  <span>账号:</span>
                  <span>222222222222222</span>
                </div>
              </div>
              <div
                className="right"
                onClick={() => {
                  setVisible(true);
                }}
              >
                <SvgIcon name="Signin" size={40} />
                <h3>签到</h3>
              </div>
            </div>
          </div>
          <div className="vipIcon">
            <div className="fire">
              <div className="FireIcon">
                <span className="firenum"> 24</span>
                <h4>火花</h4>
              </div>
            </div>
            <div className="vipRight">
              <div className="vipIcon">
                <SvgIcon width={250} height={60} name="startVip" />
              </div>
            </div>
          </div>
          <div className="bottom">
            {IconArray.map((item: any, index: any) => {
              return (
                <div
                  className="selectIcon"
                  key={item.id}
                  onClick={() => {
                    navigate(`${item.path}`);
                  }}
                >
                  <div className="icon">{item.SelectIcon}</div>

                  <div className="Name">{item.name}</div>
                </div>
              );
            })}
          </div>
          <div className="category">
            {LineArray.map((item: any, index: number) => {
              return (
                <div
                  className="category-item"
                  key={index}
                  onClick={() => {
                    navigate(`${item.path}`);
                  }}
                >
                  <div className="icon">{item.SelectIcon}</div>
                  <div className="title">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="end">
        <div className="endItem">
          <SvgIcon width={110} height={150} name="work" />
        </div>
        <div className="endItem">
          <SvgIcon width={110} height={150} name="time" />
        </div>
        <div className="endItem">
          <SvgIcon width={110} height={150} name="waitress" />
        </div>
        <div className="endItem">
          <SvgIcon width={110} height={150} name="adress" />
        </div>
        <div className="endItem">
          <SvgIcon width={110} height={150} name="phone" />
        </div>
        <div className="endItem">
          <SvgIcon width={110} height={150} name="friend" />
        </div>
      </div>
      {/* 弹出框 */}
      <Modal
        visible={visible}
        closeOnAction
        onClose={() => {
          setVisible(false);
        }}
        closeOnMaskClick={true}
        content={
          <>
            <div
              style={{
                height: "12rem",
                width: "6.8rem",
                backgroundImage: `url(${qiandaoImage})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
              className="bigger"
            >
              <div className="content">
                <div className="big">
                  <div className="item">
                    <div className="day">
                      <span className="title">第1 天</span>
                    </div>

                    <div className="bottoma">
                      <span className="bottomTitle">已签到</span>
                    </div>
                  </div>
                </div>
                <div className="big">
                  <div className="item">
                    <div className="day">
                      <span className="title">第1 天</span>
                    </div>

                    <div className="bottoma">
                      <span className="bottomTitle">已签到</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="big">
                  <div className="item">
                    <div className="day">
                      <span className="title">第1 天</span>
                    </div>

                    <div className="bottoma">
                      <span className="bottomTitle">已签到</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="big">
                  <div className="item">
                    <div className="day">
                      <span className="title">第1 天</span>
                    </div>

                    <div className="bottoma">
                      <span className="bottomTitle">已签到</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="big">
                  <div className="item">
                    <div className="day">
                      <span className="title">第1 天</span>
                    </div>

                    <div className="bottoma">
                      <span className="bottomTitle">已签到</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="big">
                  <div className="item">
                    <div className="day">
                      <span className="title">第1 天</span>
                    </div>

                    <div className="bottoma">
                      <span className="bottomTitle">已签到</span>
                    </div>
                  </div>
                </div>
                <div className="big"></div>
              </div>
            </div>
          </>
        }
      ></Modal>
    </UserWrapper>
  );
};

export default memo(User);
