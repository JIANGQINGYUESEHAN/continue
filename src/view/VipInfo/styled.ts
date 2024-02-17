import styled from "styled-components";

const VipInfoWrapper = styled.div`
  .vip-card {
    background-color: rgb(242, 244, 245);
    border-radius: 20px;
    padding: 15px;
    margin-bottom: 10px; /* 根据需要调整间距 */
    position: relative; /* 为了定位价格标签 */
    width: 320px;
    height: 80px;
  }

  .vip-title {
    color: #a52a2a; /* 根据图片调整文字颜色 */
    font-size: 1.2em;
    margin-bottom: 5px;
  }

  .vip-price {
    position: absolute;
    top: 15px;
    right: 15px;
    text-align: right;
  }
  .current-price {
    color: #ff4500; /* 根据图片调整文字颜色 */
    font-weight: bold;
  }
  .first {
    color: #ff4500; /* 根据图片调整文字颜色 */
    font-weight: bold;
  }
  .original-price {
    text-decoration: line-through;
    color: #a9a9a9; /* 根据图片调整文字颜色 */
    display: block; /* 使原价换行显示 */
  }

  .vip-benefits {
    color: #a52a2a; /* 根据图片调整文字颜色 */
    font-size: 0.9em;
    margin-top: 20px;
  }
  .active {
    background-color: rgb(255, 248, 237);
  }
`;
export default VipInfoWrapper;
