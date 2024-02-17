import styled from "styled-components";
import img from "../../assets/img/hint.png";
import img1 from "../../assets/img/ardownload.png";
import img2 from "../../assets/img/appledownload.png";
const AppDownloadWrapper = styled.div`
  overflow: hidden;
  min-height: 100vh;
  background: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/2ec00cf1db6f4ed397b3167d105929b4_mergeImage.png)
    100% no-repeat;
  background-size: 100% 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  position: relative;
  .hint {
    margin-top: 30px;
    width: 100%;
    height: 10rem;
    background-color: rebeccapurple;
    background: url(${img}) no-repeat center center / cover;
  }
  .action {
    width: 100%;
    height: 1.5rem;
    /* background-color: rebeccapurple; */
    margin-top: 0.5rem;
    /* border-radius: 1rem; */
    position: relative;
    .item {
      width: 70%;
      height: 100%;
      border-radius: 1rem;
      /* background-color: red; */
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      background: url(${img1}) no-repeat center center / cover;
    }
  }
  .actionQ {
    width: 100%;
    height: 1.5rem;
    /* background-color: rebeccapurple; */
    margin-top: 0.5rem;
    /* border-radius: 1rem; */
    position: relative;
    .itemQ {
      width: 70%;
      height: 100%;
      border-radius: 1rem;
      /* background-color: red; */
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      background: url(${img2}) no-repeat center center / cover;
    }
  }
`;
export default AppDownloadWrapper;
