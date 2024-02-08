import styled from "styled-components";

const ChapterWrapper = styled.div`
  .content {
    width: 100%;
    height: 60px; // 设定高度
    padding: 0 10px; // 增加两边的间隔
    overflow: hidden;

    .type {
      width: 100%;
      height: 60px; // 设定高度
      overflow: hidden; // 隐藏溢出的内容
      display: flex;
      justify-content: flex-start; // 开始位置对齐
      align-items: center;

      .ul {
        width: 100%;
        .list {
          min-width: 60px; // 最小宽度，根据内容调整
          height: 30px; // 高度
          background-color: #f2f2f2; // 设置为灰色背景
          margin-right: 10px; // 项目间距
          border-radius: 15px; // 圆角
          text-align: center;
          line-height: 30px; // 行高与高度相同，使文字垂直居中
          color: #333; // 文字颜色
          flex-shrink: 0; // 防止压缩
          &.active {
            background-color: #ff3a4d; // 激活状态的背景色
            color: white; // 激活状态的文字颜色
          }
        }
      }
    }
  }
`;

export default ChapterWrapper;
