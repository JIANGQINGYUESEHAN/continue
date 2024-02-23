import styled from "styled-components";

const SkeletonWrapper = styled.div`
  .skeleton-wrapper {
    max-width: 600px;
    margin: 20px auto;
  }

  .skeleton-header {
    height: 20vh;
    background-color: #e0e0e0;
    margin-bottom: 10px;
  }

  .skeleton-content-box {
    background-color: #e0e0e0;
    height: 10vh;
    margin-bottom: 10px;
  }

  .skeleton-content-line {
    background-color: #e0e0e0;
    height: 8px;
    margin-bottom: 10px;
    width: 80%;
  }

  .skeleton-footer {
    background-color: #e0e0e0;
    height: 20vh;
  }

  @keyframes loading {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }

  .skeleton-header,
  .skeleton-content-box,
  .skeleton-content-line,
  .skeleton-footer {
    animation: loading 1.5s infinite ease-in-out;
  }
`;
export default SkeletonWrapper;
