import styled from "styled-components";

const NovelsAndComicsItemWrapper = styled.div`
  .product-item {
    position: relative;
    width: 120px;
    margin: 4px;
    height: 180px;
    border-radius: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #ffd77e;
    overflow: hidden;
    .product-image {
      position: relative;
      width: 100%;
      height: 150px;
      border-radius: 8px;
      position: relative;
      overflow: hidden;
      .image {
        width: 120px;
        height: 100%;
      }
    }
  }
`;
export default NovelsAndComicsItemWrapper;
