import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";
interface HighlightProps {
  highlightText: boolean;
}
const ResultData: React.FunctionComponent<HighlightProps> = ({
  highlightText
}) => {
  const { searchVal }:any = useContext(AppContext);
  let textData = "Welcome to React App, Welcome back";
  let updatedText = "";
  if (highlightText && textData.indexOf(searchVal.trim()) !== -1) {
    let array = textData.split(" ");
    array.forEach((elem, index, arr) => {
      if (elem === searchVal.trim()) {
        updatedText += `<mark>${elem}</mark>` + " ";
      } else {
        updatedText += elem + " ";
      }
    });
  }
  useEffect(() => {
    if (updatedText) {
      document.getElementById("para")!.innerHTML = updatedText;
    } else {
      document.getElementById("para")!.innerHTML = textData;
    }
  }, [highlightText]);

  return <p id="para">{textData}</p>;
};

export default ResultData;