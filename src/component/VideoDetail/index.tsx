import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import VideoDetailWrapper from "./styled";
import VideoItem from "../../view/VideoItem";

interface IProps {
  children?: ReactNode;
}

const VideoDetail: FC<IProps> = () => {
  return (
    <VideoDetailWrapper>
      <div className="videoItem">
        <div className="videoContent">
          <div className="content">
            <video className="video"></video>

            <div className="open"></div>
          </div>

          <div className="detail">
            <div className="top">
              <div className="imageTop"></div>
              <div className="detailTop">
                <div className="likes">
                  <span className="like-count"></span>
                  <span className="comment-count"></span>
                  <span className="heart-count"></span>
                </div>
                <div className="info">
                  <div className="username">作者</div>
                </div>
                <div className="info">
                  <div>喜欢</div>
                </div>
              </div>
            </div>
            <div className="middle">
              <div className="Title">
                <span className="titleSpan"></span>
              </div>
              <div className="detailTitle">
                <div className="hah">
                  <span> 上线时间:</span>
                  <span> </span>
                </div>
                <div className="haha">
                  <span> 相关标签:</span>
                </div>
              </div>
            </div>
          </div>
          <div className="other" v-if="Detail?.resource_type == 4">
            <div className="videoList">
              <VideoItem />
            </div>
          </div>
        </div>

        <div className="other">
          <div className="videoList">
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
          </div>
        </div>
      </div>
    </VideoDetailWrapper>
  );
};

export default memo(VideoDetail);
