import React, { useState } from "react";
import RowItem from "./rowItem";

const RightBlock = function () {
  const [active, setActive] = useState(null);
  return (
    <div className="right-block">
      <RowItem title={"Loudspeakers"} setActive={setActive} active={active} />
      <RowItem title={"Amplifier"} setActive={setActive} active={active} />
      <RowItem title={"FOH"} setActive={setActive} active={active} />
      <RowItem title={"Backline"} setActive={setActive} active={active} />
      <RowItem title={"Microphone set"} setActive={setActive} active={active} />
      <RowItem title={"DJ equipment"} setActive={setActive} active={active} />
    </div>
  );
};

export default RightBlock;
