/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
// import { Form, Input } from "antd";
import NavBar from "../../view/NavBar";
import FixPersonWrapper from "./styled";
import action from "../../store/action";
import { connect, useDispatch } from "react-redux";
import { Skeleton, Toast } from "antd-mobile";
import { AvatarList, ModifyUerInformation } from "../../service/static/common";
import BaseAction from "../../store/action/BaseAction";
import { useNavigate } from "react-router-dom";

interface IProps {
  children?: ReactNode;
  info?: any;
}

const FixPerson: FC<IProps> = (props) => {
  const { info } = props;
  const [nickname, setNickname] = useState(info.nickname);
  const [gender, setGender] = useState("0");
  const [List, setList] = useState<any>([]);
  const [Index, setIndex] = useState(0);
  let Dispatch = useDispatch();
  const Navigate = useNavigate();
  useEffect(() => {
    (async () => {
      let res = await AvatarList();
      console.log(res.data);
      let indx = res.data.findIndex((item: any) => {
        return item.url == info.head_portrait;
      });

      setIndex(indx);
      setList(res.data);
      // flushSync(() => {});
      // console.log(List);
    })();
  }, []);
  const validateForm = () => {
    // let tempErrors = {};
    let formIsValid = true;

    // 昵称验证：不能为空，也可以添加其他规则，比如长度限制等
    if (!nickname) {
      formIsValid = false;
      Toast.show({
        icon: "fail",
        content: "会员昵称不能为空",
      });
    }

    // 性别验证：必须选择
    if (!gender) {
      formIsValid = false;
      Toast.show({
        icon: "fail",
        content: "请选择性别",
      });
    }

    return formIsValid;
  };

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      //获取当前头像的index

      let uid = List[Index].id;
      console.log(uid);

      if (validateForm()) {
        // console.log("表单验证成功");
        // 进行表单提交操作
        // console.log(uid);
        //发送请求
        await ModifyUerInformation(nickname, gender, uid);
        Toast.show({
          icon: "success",
          content: "修改成功",
        });
      }
      let rea = await BaseAction.queryUserInfoAsyncAction();
      Dispatch(rea);
      Navigate("/user");
    } catch (error) {
      Toast.show({
        icon: "fail",
        content: "请检查网络",
      });
    }
  };
  //点击头像
  const Clickhead = (index: number) => {
    setIndex(index);
  };

  return (
    <FixPersonWrapper>
      <NavBar IsShowChildren={false} middle="修改信息" />
      <div className="userInfo">
        <div className="avater">
          <div className="image">
            <div className="img">
              <img src={info?.head_portrait} alt="" className="img" />
            </div>
          </div>
        </div>
        <div className="title">
          <div className="info">
            <span className="user">账号:</span>&nbsp;
            <span className="password">{info.uid}</span>
          </div>
          {info.user_status == 1 && (
            <div className="infoA">
              <span className="userA">密码:</span>&nbsp;
              <span className="passwordA">{info.password}</span>
            </div>
          )}
        </div>
      </div>
      <div className="Content">
        <div className="nikename">
          <div className="left">
            <span>会员昵称</span>
          </div>
          <div className="right">
            <input
              type="text"
              className="Input"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="请输入会员昵称"
            />
          </div>
        </div>
        <div className="nikenameA">
          <div className="left">
            <span>性别</span>
          </div>
          <div className="right">
            <label className="man people">
              <input
                type="radio"
                name="gender"
                value="0"
                checked={gender === "0"}
                onChange={(e) => setGender(e.target.value)}
              />
              <span>男</span>
            </label>
            <label className="woman people">
              <input
                type="radio"
                name="gender"
                value="1"
                checked={gender === "1"}
                onChange={(e) => setGender(e.target.value)}
              />
              <span>女</span>
            </label>
          </div>
        </div>
        <div className="nikename">
          <div className="left">
            <span>会员头像</span>
          </div>
          <div className="right">
            <div className="image">
              <img src={info?.head_portrait} alt="" className="img" />
            </div>
          </div>
        </div>
        <div className="headContent">
          {List.length == 0 ? (
            <Skeleton.Paragraph lineCount={5} animated />
          ) : (
            <>
              {List.map((item: any, index: number) => {
                return (
                  <div
                    className="item"
                    key={index}
                    onClick={() => Clickhead(index)}
                  >
                    {index == Index && <div className="dot"></div>}
                    <div className="image">
                      <img src={item.url} alt="" className="img" />
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <div className="Submit" onClick={handleSubmit}>
        <span>修改用户基本信息</span>
      </div>
    </FixPersonWrapper>
  );
};
const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;
export default connect(mapStateToProps, mapDispatchToProps)(memo(FixPerson));
