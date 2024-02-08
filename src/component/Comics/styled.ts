import styled from "styled-components";

const ComicsWrapper = styled.div`
position: relative;
height: 1000px;
background-color: #F8F8F8;

.optiy{
    position:absolute;
    width: 100%;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 999;
    left: 0;
    top:0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .border{
        width: 80px;
        height: 40px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .title{
        color: black;
        opacity: 1;
        font-weight: 1000;
    }
    .title:hover{
      color: #FD364E;
    }

}

`;
export default ComicsWrapper