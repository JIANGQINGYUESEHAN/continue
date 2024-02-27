import styled from "styled-components";

const NavbarWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 40px;

  margin: 8px 0px;
  padding: 0px 10px;

  .Common {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;

    position: relative;
    .leftIcon {
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      color: RGBA(110, 110, 110, 1);
    }
    .icon {
      height: 40px;
      display: flex;
      align-items: center;
      width: 20px;
    }
    .left {
      line-height: 40px;
      color: black;
      font-size: 20px;
      font-weight: bold;
    }
    .middle {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      height: 40px;
      min-width: 80px;

      line-height: 40px;
      font-size: 16px;
      font-weight: bolder;
      text-align: center;
    }
    .right {
      position: absolute;
      right: 0px;
      height: 40px;
      min-width: 100px;

      line-height: 40px;
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      display: flex;
      .iconCircle {
        flex: 1;
        height: 40px;

        font-size: 12px;
        color: RGBA(110, 110, 110, 1);
        display: flex;
        align-items: center;
        .imag {
          width: 12px;
          height: 12px;
        }
      }
      .iconRight {
        flex: 1;
        height: 40px;
        display: flex;
        align-items: center;
        font-size: 12px;
        color: RGBA(110, 110, 110, 1);
        .imag {
          width: 12px;
          height: 12px;
        }
      }
    }
  }
`;
export default NavbarWrapper;
