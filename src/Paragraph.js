import { ThemeContext } from "./App";
import { useContext } from "react";

function Paragraph() {
  const theme = useContext(ThemeContext);
  return (
    <p className={theme}>
      Nhóm ReactJS - Việt Nam trước đây không phải nhóm của F8 đã bị chủ sở hữu
      cũ bán, nhóm không còn chất lượng vì có nhiều tin bán hàng, quảng cáo.
    </p>
  );
}

export default Paragraph;
