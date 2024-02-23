import { memo } from "react";
import type { FC, ReactNode } from "react";
import AppDownloadWrapper from "./styled";
import NavBar from "../../view/NavBar";

interface IProps {
  children?: ReactNode;
}

const AppDownload: FC<IProps> = () => {
  return (
    <AppDownloadWrapper>
      <NavBar IsShowChildren={false} middle="下载" />
      <div className="hint"></div>
      <div className="action">
        <div className="item"></div>
      </div>
      <div className="actionQ">
        <div className="itemQ"></div>
      </div>
    </AppDownloadWrapper>
  );
};

export default memo(AppDownload);
