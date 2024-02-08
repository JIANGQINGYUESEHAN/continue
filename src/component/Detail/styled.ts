import styled from "styled-components";

const DetailWrapper = styled.div`
.content{
    width: 100%;
    .header{
        width: 100%;
        height: 40px;
       line-height: 40px;
       padding: 0px 20px;
       font-size: 14px;
       background-color: rgba(128, 128, 128, 0.5); /* 灰色，50%的透明度 */
   } 
   .main{
   width: 100%;
   height: 520px;
   background-color: antiquewhite;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
  align-items: center;
   
   .mainImag{
    margin-top: 24px;
    width: 150px;
    height: 240px;
    border-radius: 10px;
    background-color: black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 
              0 6px 20px 0 rgba(0, 0, 0, 0.19); /* 双层阴影 */
     }
     .author{
        margin-top: 10px;
        width: 150px;
        height: 40px;
        border-radius: 10px;
        background-color: aliceblue;
       line-height: 40px;
       padding: 0px 20px;
       box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 
              0 6px 20px 0 rgba(0, 0, 0, 0.19); /* 双层阴影 */
     }
     .detail{
        margin-top: 20px;
        width: 320px;
        height: 60px;
        background-color: white;
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        justify-content: space-around;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 
              0 6px 20px 0 rgba(0, 0, 0, 0.19); /* 双层阴影 */
        .num{
            width: 100px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .hot{
                display: inline-block;
               
            }
            .hotNum{
                display: inline-block;
                font-weight: 1000;
                font-size: 14px;
            }
           

        }
     }
     .describe{
        width: 320px;
        height: 90px;
      
        margin-top: 20px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 
              0 6px 20px 0 rgba(0, 0, 0, 0.19); /* 双层阴影 */
        .title{
            width: 100%;
            height: 30px;
            background-color: aquamarine;
            line-height: 30px;
            padding: 0px 20px;
        }

     }
   }

        

 

}
`;
export default DetailWrapper