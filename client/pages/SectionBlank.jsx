import { useState, useCallback } from "react";
import { clear } from "./test";

const imageSrc =
  "https://img.alicdn.com/imgextra/i3/3438702227/O1CN01xoQ8Zf1SK0udVGW7I_!!3438702227-2-qnaigc.png";

const styles = {
  testStyle: {
    width: "auto",
    background: "#dedede",
    padding: 10
  },
  imgStyle: {
    width: 200,
    height: "auto",
    border: "4px solid white"
  }
};

/**
 * test.js ctx.getImageData
 * 浏览器环境运行相对比较快
 * 在淘宝开发者工具中运行比较慢，且生成数据为object非array
 * */
export default function App() {
  const [newImage, setNewImage] = useState("");
  const [loading, setLoading] = useState(false);

  const clean = useCallback(async () => {
    setLoading(true);
    const newImageUrl = await clear(imageSrc);
    setLoading(false);
    setNewImage(newImageUrl);
  }, []);

  return (
    <>
      <div style={styles.testStyle}>
        <img style={styles.imgStyle} src={imageSrc} alt="" />
        {newImage ? (
          <img
            alt=""
            style={{
              ...styles.imgStyle,
              marginLeft: 10
            }}
            src={newImage}
          />
        ) : null}
      </div>

      <button style={{ cursor: "pointer" }} onClick={clean}>
        {loading ? "loading" : "clean"}
      </button>
    </>
  );
}

