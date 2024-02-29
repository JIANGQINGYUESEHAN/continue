/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import UserWrapper from "./styled";
import SvgIcon from "../SvgIcon";
import { useNavigate } from "react-router-dom";
import { Modal, Toast } from "antd-mobile";
import qiandaoImage from "../../assets/img/qiandao.png";
import saveImag from "../../assets/img/save.png";
import action from "../../store/action";
import { connect, useDispatch } from "react-redux";
import BaseAction from "../../store/action/BaseAction";
import { SignInAll, getSignInRecord } from "../../service/static/common";
interface IProps {
  children?: ReactNode;
  info?: any;
}

const User: FC<IProps> = (props) => {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const [SignIn, setSignIn] = useState<any>([]);
  const [visible, setVisible] = useState(false);
  const [visibleA, setVisibleA] = useState(false);
  const { info } = props;

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
  //签到
  async function SignInAction() {
    //SignInAll
    //遍历不为
    let res = await getSignInRecord();
    // console.log(res.data.punch_id);
    await SignInAll(res.data.punch_id);
    //签到成功
    Toast.show({
      icon: "success",
      content: "签到成功",
    });
    res = await getSignInRecord();
    setSignIn(res.data.punch_records);
    //重新初始化用户数据
    const rea = await BaseAction.queryUserInfoAsyncAction();
    Dispatch(rea);
    setVisible(false);
  }
  //初始化用户信息
  useEffect(() => {
    (async () => {
      const rea = await BaseAction.queryUserInfoAsyncAction();
      Dispatch(rea);
      //获取签到数据
      const res = await getSignInRecord();
      // console.log(res);
      setSignIn(res.data.punch_records);
    })();
  }, []);

  return (
    <UserWrapper>
      <div className="content">
        <div className="vipInfo">
          <div className="top">
            <div
              className="imag"
              onClick={() => {
                navigate("/loginPassword");
              }}
            >
              <img src={info?.head_portrait} alt="头像" className="img" />
            </div>
            <div className="Info">
              <div className="left">
                <div className="userName">
                  <span> {info?.nickname}</span>
                </div>
                <div className="userNikename">
                  <span>账号:</span>
                  <span>{info?.uid}</span>
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
          <div
            className="vipIcon"
            onClick={() => {
              navigate("/specialOffer");
            }}
          >
            <div className="fire">
              <div className="FireIcon">
                <span className="firenum"> {info.spark_balance}</span>
                <h4>火花</h4>
              </div>
            </div>
            <div className="vipRight">
              <div className="vipIcon">
                {info.is_vip == 2 ? (
                  <SvgIcon width={250} height={60} name="startVip" />
                ) : (
                  <SvgIcon width={250} height={60} name="already" />
                )}
              </div>
            </div>
          </div>
          <div className="bottom">
            {IconArray.map((item: any) => {
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
                    if (index < 3) {
                      navigate(`${item.path}`);
                    } else {
                      setVisibleA(true);
                    }
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
                backgroundSize: "cover",
              }}
              className="bigger"
            >
              <div className="content">
                {SignIn.map((item: any, index: any) => {
                  return (
                    <div className="big" key={index}>
                      <div className="item">
                        <div className="day">
                          <span className="title">第{index + 1} 天</span>
                        </div>

                        <div className="bottoma">
                          {item.is_punch !== 2 ? (
                            <span className="bottomTitle">已签到</span>
                          ) : (
                            <span className="bottomTitleA">签到</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="Sign" onClick={SignInAction}>
                <span> 立即签到</span>
              </div>
            </div>
          </>
        }
      ></Modal>

      <Modal
        visible={visibleA}
        closeOnAction
        onClose={() => {
          setVisibleA(false);
        }}
        closeOnMaskClick={true}
        content={
          <>
            <div
              style={{
                height: "10rem",
                width: "6.8rem",
                backgroundImage: `url(${saveImag})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="biggerA"
            >
              <div className="tn-p-lg">
                <div className="container">
                  <h2 className="title">您的账号ID:</h2>
                  <div className="input-field">
                    <span>{info.uid}</span>
                  </div>
                  <h2 className="title">您的账号密码:</h2>
                  <div className="input-field">
                    <span>{info.password || null}</span>
                  </div>
                  <div className="buttons">
                    <div
                      className="button button1"
                      onClick={() => {
                        Navigate("/bindPhone");
                      }}
                    >
                      绑定手机号
                    </div>
                    <div
                      className="button button2"
                      onClick={() => {
                        Navigate("fixpassword");
                      }}
                    >
                      修改密码
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      ></Modal>
    </UserWrapper>
  );
};
const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;
export default connect(mapStateToProps, mapDispatchToProps)(memo(User));
