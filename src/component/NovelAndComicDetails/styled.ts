import styled from "styled-components";

const NovelAndComicDetailsWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  .card-container {
    width: 100%;
    height: 300px;
    display: flex;
    background: #f0f4f8;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    .card-image {
      flex: 1;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;

      .image {
        width: 80%;
        height: 200px;
        border-radius: 8px;
        background-color: #ff4081;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .card-content {
      flex: 3;
      padding: 10px;
      flex-grow: 1;

      .card-title {
        font-size: 1.5rem;
        color: #333;
      }

      .card-author,
      .card-date {
        font-size: 0.9rem;
        color: #666;
      }

      .card-tags {
        span {
          background: #e0e4e8;
          padding: 5px 10px;
          border-radius: 5px;
          margin-right: 5px;
          font-size: 0.8rem;
        }
      }

      .card-statistics {
        margin: 10px 0;
        span {
          margin-right: 10px;
          font-size: 0.9rem;
        }
      }

      .card-like-button {
        padding: 10px 20px;
        background: #ff4081;
        color: white;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 0.9rem;
        display: inline-block;
        margin-top: 10px;
      }
    }
  }
`;
export default NovelAndComicDetailsWrapper;
