import { useState } from "react";
import Background from "./Components/Background/Background";
const App = () => {
  let heroData = [
    { text1: "EV", text2: "Website" },
    { text1: "EV", text2: "Website" },
    { text1: "EV", text2: "Website" },
  ];
  const [heroCount, SetHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
    </div>
  );
};

export default App;
