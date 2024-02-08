import styled from "styled-components";

const BottomNavigationWrapper = styled.div`
 width: 100%;
box-sizing: border-box;
.bottom{
  position: fixed; /* 使用固定定位，相对于视窗 */
  bottom: 0;       /* 把元素放置在视窗的底部 */
  left: 0;         /* 把元素放置在视窗的左侧 */
  width: 100%;     /* 元素宽度为100%，以填充屏幕宽度 */
  height: 100px;    /* 元素高度为60像素 */
  display: flex;
  align-items: center;
  justify-content: center;

  
  .selectIcon {
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  font-size: 16px;
  font-weight: 300;
  position: relative;
 
}
.selectIcon:nth-child(3){
    position: relative;
    top: -14px;
  }
}
`
export default BottomNavigationWrapper