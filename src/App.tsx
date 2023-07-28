import { createContext, useState } from "react";
import Searchbar from "./components/Searchbar";
import ResultData from "./components/ResultData";
export const AppContext: any = createContext(null);

export default function App() {
  const [searchVal, setSearchVal] = useState("");
  const [highlightText, setHighlightText] = useState(false);

  return (
    <AppContext.Provider value={{ searchVal, setSearchVal, setHighlightText }}>
      <Searchbar />
      <ResultData highlightText={highlightText} />
    </AppContext.Provider>
  );
}
