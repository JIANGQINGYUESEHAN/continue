/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import DetailWrapper from "./styled";
import { Popup, Slider, Toast } from "antd-mobile";
import {
  FileTwoTone,
  HomeTwoTone,
  BulbTwoTone,
  EyeInvisibleTwoTone,
  SettingTwoTone,
} from "@ant-design/icons";
import { WithRouter } from "../../router";
import {
  BuyWithSpark,
  GetComicChapterDetails,
  GetDetailsAboutNovelsAndComics,
} from "../../service/static/common";
import { useNavigate } from "react-router-dom";
import action from "../../store/action";
import { connect } from "react-redux";

interface IProps {
  children?: ReactNode;
  query?: any;
  info?: any;
}

const Detail: FC<IProps> = ({ query, info }) => {
  const { Resource_id, Section_id, Index } = query;
  const [Detail, setDetial] = useState([]);
  const [fontSize, setFontSize] = useState<any>(16);
  const [DetailInfo, setDetailInfo] = useState<any>([]);
  const Navigate = useNavigate();

  //弹出层
  const [visible3, setVisible3] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [Night, setNight] = useState(false);
  const [NovelContent, setNovelContent] = useState("");
  //返回上一页
  function ReBack() {
    Navigate(-1);
  }
  //阅读章节
  async function readChapter(Item: any) {
    console.log(Item);

    //资源的所有详情
    let accessType = Item.access_type;
    let sparkCount = Item.spark_count;
    let resourceId = Item.resource_id;
    let sectionId = Item.section_id;
    console.log(accessType);
    console.log(resourceId);
    console.log(sparkCount);
    console.log(sectionId);
    //获取用户的详情
    const Isvip = info.is_vip;

    const sparkCountAll = info.spark_balance;
    //不要会员就可以
    if (accessType == 1) {
      PlayDirectly(resourceId, sectionId);
    }
    //会员
    if (accessType == 2) {
      if (Isvip == 2) {
        //跳转到充值界面
        Navigate("/specialOffer");
      }
      if (Isvip == 1) {
        PlayDirectly(resourceId, sectionId);
      }
    }
    // //火花
    if (accessType == 3) {
      //不是会员火花不够
      if (Isvip == 2 && sparkCountAll < sparkCount) {
        //跳转到充值界面
        Navigate("/specialOffer");
      }
      //不是会员火花够了
      if (Isvip == 2 && sparkCountAll > sparkCount) {
        //用火花进行购买
        const rea = await BuyWithSpark(resourceId, sectionId);
        console.log(rea);

        if (rea.msg == "请求成功") {
          PlayDirectly(resourceId, sectionId);
        } else {
          Toast.show({
            icon: "fail",
            content: "请重试",
          });
        }
      }

      //是会员
      if (Isvip == 1) {
        PlayDirectly(resourceId, sectionId);
      }
    }
  }
  //播放
  async function PlayDirectly(resourceId: any, sectionId: any) {
    const res = await GetComicChapterDetails(resourceId, sectionId);

    setDetial(res.book_section_detail);
    const rea = await GetDetailsAboutNovelsAndComics(resourceId);
    console.log(rea);
    setDetailInfo(rea);
    setVisible3(false);
  }

  const toastValue = (value: number | number[]) => {
    let text = "";
    if (typeof value === "number") {
      text = `${value}`;
    } else {
      text = `[${value.join(",")}]`;
    }
    Toast.show(`当前字号为：${text}`);
    // console.log(value);
    setFontSize(value);
    setVisible1(false);
  };
  //获取详情
  useEffect(() => {
    (async () => {
      const res = await GetComicChapterDetails(Resource_id, Section_id);
      console.log(res);
      const rea = await GetDetailsAboutNovelsAndComics(Resource_id);
      // console.log(rea);
      setDetailInfo(rea);
      setDetial(res.book_section_detail);
      if (Index == 5) {
        let url = res.book_section_detail[0].resource_url;
        let reb = await fetch(url);
        let red = await reb.text();
        setNovelContent(red);
        const rea = await GetDetailsAboutNovelsAndComics(Resource_id);
        console.log(rea);
        setDetial(rea.book_section_detail);
        return;
      }
    })();
  }, []);
  return (
    <DetailWrapper>
      {Index == 5 && (
        <div className="contentA" style={{ background: Night ? "black" : "" }}>
          <p
            style={{
              color: Night ? "white" : "black",
              fontSize: `${fontSize}px`,
            }}
          >
            {NovelContent}
          </p>
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
              {DetailInfo.title}
            </span>
          </div>
          {DetailInfo.book_section_list?.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="Middle"
                style={{
                  width: "100%",
                  height: "30px",
                  backgroundColor: " #f8f8f8",
                  padding: "0px 20px",
                  margin: "10px 0px",
                }}
                onClick={() => readChapter(item)}
              >
                <span
                  className="MiddleSpan"
                  style={{
                    fontSize: "12px",
                    lineHeight: "30px",
                  }}
                >
                  第 {index + 1} 章
                </span>
              </div>
            );
          })}
        </div>
      </Popup>
      <Popup
        visible={visible1}
        onMaskClick={() => {
          setVisible1(false);
        }}
        onClose={() => {
          setVisible1(false);
        }}
        bodyStyle={{
          height: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="left"
          style={{
            flex: 1,
            height: "30px",
            lineHeight: "30px",
            textAlign: "center",
          }}
        >
          <span> 字号 -</span>
        </div>
        <div
          className="middle"
          style={{
            flex: 4,
            height: "30px",
          }}
        >
          <Slider onAfterChange={toastValue} defaultValue={fontSize} />
        </div>
        <div
          className="right"
          style={{
            flex: 1,
            height: "30px",
            lineHeight: "30px",
            textAlign: "center",
          }}
        >
          <span> 字号 +</span>
        </div>
      </Popup>
      <div
        className="footer-navigation"
        style={{ background: Night ? "black" : "#ccc" }}
      >
        <div className="icon-section">
          <div
            className="icon menu"
            onClick={() => {
              setVisible3(true);
            }}
          >
            {Night && <FileTwoTone twoToneColor="#cccc" />}
            {!Night && <FileTwoTone twoToneColor="white" />}
          </div>

          <div className="icon home" onClick={ReBack}>
            {Night && <HomeTwoTone twoToneColor="#cccc" />}
            {!Night && <HomeTwoTone twoToneColor="white" />}
          </div>
          <div
            className="icon bell"
            onClick={() => {
              setNight(!Night);
            }}
          >
            {Night && <BulbTwoTone twoToneColor="#cccc" />}
            {!Night && <EyeInvisibleTwoTone twoToneColor="white" />}
          </div>
          {Index == 5 && (
            <div
              className="icon bell"
              onClick={() => {
                setVisible1(true);
              }}
            >
              {Night && <SettingTwoTone twoToneColor="#cccc" />}
              {!Night && <SettingTwoTone twoToneColor="white" />}
            </div>
          )}
        </div>
      </div>
    </DetailWrapper>
  );
};
const mapStateToProps = (state: any) => state.base;
const mapDispatchToProps = action.Base;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithRouter(memo(Detail)));
