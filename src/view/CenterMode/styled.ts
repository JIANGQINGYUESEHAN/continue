import styled from "styled-components";

const CenterModeWrapper = styled.div`
  .scaleContent {
    height: 240px;
    width: 100px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    user-select: none;
  }

  .root {
    :global {
      .adm-swiper-slide {
        transform: scale(0.6);
        transition: all 0.3s;
      }

      .adm-swiper-slide-active {
        transform: scale(1);
      }
    }
  }
`;
export default CenterModeWrapper;
