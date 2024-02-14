import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "lib-flexible";
import "./assets/icomoon/style.css";

import "virtual:svg-icons-register";
import store from "./store/index.ts";
import { Provider } from "react-redux";

//自动调节
(function () {
  function SetWidth() {
    // 获取html和root元素
    const html = document.documentElement;
    const root = document.querySelector("#root") as HTMLElement; // 明确类型为HTMLElement

    // 获取宽度
    const size = html.clientWidth;

    // 根据宽度设置root元素的宽度
    if (size >= 750) {
      root.style.width = "75px"; // 设置CSS宽度属性
    }
  }

  // 调用SetWidth函数
  SetWidth();

  // 监听窗口大小变化，以便在窗口大小改变时重新调整宽度
  window.addEventListener("resize", SetWidth);
})();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
