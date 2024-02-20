import styled from "styled-components";

const DetailWrapper = styled.div`
  .content {
    padding: 5px; /* Space from the top, left, and right edges */
    padding-bottom: 100px; /* Bottom padding should be equal to or larger than the height of the navigation bar */
    box-sizing: border-box; /* Includes padding in the element's total width and height */
    height: calc(
      100vh - 50px
    ); /* Viewport height minus the navigation bar's height */
    overflow-y: auto; /* Allows scrolling within the content area if the content overflows */
    -webkit-overflow-scrolling: touch;
    text-align: justify; /* This will justify the text, which is not exactly right-aligned but will create a clean edge on both sides */
    background-color: #f8f8f8;
    text-justify: inter-word;
    .imagContent {
      width: 100%;
      height: calc(100vh - 50px);
      .image {
        width: 100%;
        height: 100%;
      }
    }
  }
  .contentA {
    padding: 20px 10px; /* Space from the top, left, and right edges */
    padding-bottom: 100px; /* Bottom padding should be equal to or larger than the height of the navigation bar */
    box-sizing: border-box; /* Includes padding in the element's total width and height */
    height: calc(
      100vh - 50px
    ); /* Viewport height minus the navigation bar's height */
    overflow-y: auto; /* Allows scrolling within the content area if the content overflows */
    -webkit-overflow-scrolling: touch;
    text-align: justify; /* This will justify the text, which is not exactly right-aligned but will create a clean edge on both sides */
    background-color: #f8f8f8;
    text-justify: inter-word;
  }
  .footer-navigation {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    // box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
    padding: 1em;
  }

  .nav-button {
    background: none;
    border: none;
    font-size: 1.5em; /* 根据您的图片，按钮较大 */
    cursor: pointer;
  }
  .active {
    color: red;
  }
  .slider {
    flex-grow: 1;
    margin: 0 1em;
  }

  .page-indicator {
    min-width: 3em; /* 保持文本宽度足够 */
    text-align: center;
  }

  .icon-section {
    display: flex;
    justify-content: space-around;
  }
  .Popup {
    .adm-popup-body {
      .PopupA {
        height: 100px;
        background-color: rebeccapurple !important;

        /* .Top {
      width: 100%;
      height: 60px;

      text-align: center;
      .TopSpan {
        font-size: 20px;

        line-height: 60px;
      }
    }
    .Middle {
      width: 100%;
      height: 30px;
      background-color: #f8f8f8;
      padding: 0px 20px;
      margin: 10px 0px;
      .MiddleSpan {
        font-size: 12px;

        line-height: 30px;
      }
    } */
      }
    }
  }

  .icon {
    font-size: 1.5em; /* 根据您的图片，图标较大 */
    text-align: center;
  }

  /* 根据需要添加媒体查询或其他样式 */
`;
export default DetailWrapper;
