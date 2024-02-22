/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import RankWrapper from "./styled";
import { NavBar, SideBar, Tabs, Toast } from "antd-mobile";

interface IProps {
  children?: ReactNode;
}

const Rank: FC<IProps> = () => {
  const back = () =>
    Toast.show({
      content: "点击了返回区域",
      duration: 1000,
    });
  const tabs = [
    {
      key: "1",
      title: "全部",
    },
    {
      key: "2",
      title: "热血",
    },
    {
      key: "3",
      title: "青春",
    },
    {
      key: "4",
      title: "机甲",
    },
    {
      key: "5",
      title: "魔法",
    },
    {
      key: "6",
      title: "异界",
    },
  ];
  const Tabsa = [
    {
      id: 1,
      key: "人气榜",
    },
    {
      id: 2,
      key: "推荐榜",
    },
    {
      id: 3,
      key: "收藏榜",
    },
    {
      id: 4,
      key: "今日榜",
    },
  ];
  return (
    <RankWrapper>
      <NavBar onBack={back}>
        <span className="title"> 排行版</span>
      </NavBar>

      <div className="adjust">
        <div className="adjustTabs">
          <Tabs>
            {Tabsa.map((item) => {
              return (
                <Tabs.Tab title={item.key} key={item.id}>
                  <div
                    className="SideBarItem"
                    style={{
                      display: "flex",
                    }}
                  >
                    <div
                      className="Item"
                      id="Item"
                      style={{
                        width: "64px",
                        background: "red",
                        flex: 1,
                      }}
                    >
                      <SideBar>
                        {tabs.map((item) => (
                          <SideBar.Item key={item.key} title={item.title} />
                        ))}
                      </SideBar>
                    </div>

                    {/* 这里可以添加要显示的内容 */}
                    <div
                      className="tab-content"
                      style={{
                        flex: 3,
                        backgroundColor: "red",
                        marginTop: "0px",
                        height: "100%",
                      }}
                    >
                      <div
                        className="ItemContent"
                        style={{ height: "1000px" }}
                      ></div>
                    </div>
                  </div>
                </Tabs.Tab>
              );
            })}
          </Tabs>
        </div>
      </div>
    </RankWrapper>
  );
};

export default memo(Rank);
