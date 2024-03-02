import styled from "styled-components";

const FireCardWrapper = styled.div`
  position: relative;
  .coupon {
    margin: 10px;
    border: 1px solid #f90;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 150px; // 根据实际宽度调整
    background-color: rgb(242, 244, 245);

    .couponHeader {
      color: black;
      padding: 10px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px 8px 0 0;

      &::after {
        // 创建波浪形状
        content: "";
        position: absolute;
        bottom: -10px; // 调整以匹配波浪的位置
        left: 0;
        right: 0;
        height: 20px; // 波浪的高度
        // 使用波浪图案
      }

      .couponValue {
        font-size: 24px; // 根据实际大小调整
        font-weight: bold;
        .discount {
          color: black;
          font-size: 12px;
        }
      }

      .couponDiscount {
        font-size: 16px; // 根据实际大小调整

        padding: 2px 6px;
        border-radius: 12px;
        color: black;
        text-decoration: line-through;
      }
    }

    .couponBody {
      padding: 10px;
      text-align: center;

      border-radius: 0 0 8px 8px;

      .couponDescription {
        font-size: 14px; // 根据实际大小调整
        color: black;
      }
    }
    .couponBodya {
      padding: 10px;
      text-align: center;

      border-radius: 0 0 8px 8px;

      .couponDescriptiona {
        font-size: 14px; // 根据实际大小调整
        color: black;
      }
    }
  }
  .active {
    background-color: rgb(255, 248, 237);
  }
  .imag {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 0px;
    top: -10px;
    .img {
      width: 100%;
      height: 100%;
    }
  }
`;
export default FireCardWrapper;
