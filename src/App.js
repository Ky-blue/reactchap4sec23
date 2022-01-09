import "./styles.css";
import React, { useState } from "react";

//イベント実行(クリック)時に読み込まれる関数
const handleClick = (e) => {
  console.log(e.target.value);
};

const SampleButton = () => {
  //onClickに先ほどのhandleClickを渡す
  //閉じタグいらんのこれ？
  return <input type="text" defaultValue="" onChange={handleClick} />;
};

export default function App() {
  return <SampleButton />;
}
