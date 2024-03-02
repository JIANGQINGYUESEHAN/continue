/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import Searchwrapper from "./styled";
import { useNavigate } from "react-router-dom";

interface IProps {
  children?: ReactNode;
}

const Search: FC<IProps> = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleClearClick = () => {
    setInputValue("");
  };
  return (
    <Searchwrapper>
      <div className="search-box">
        <button
          className="back-button"
          onClick={() => {
            navigate(-1);
          }}
        >
          返回
        </button>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="请输入搜索关键词"
            value={inputValue}
            onChange={handleInputChange}
          />
          {inputValue && (
            <button className="clear-button" onClick={handleClearClick}>
              ×
            </button>
          )}
        </div>
        <button className="search-button">搜索</button>
      </div>
    </Searchwrapper>
  );
};

export default memo(Search);
