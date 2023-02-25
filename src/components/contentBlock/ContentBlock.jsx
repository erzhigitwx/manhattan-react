import React from "react";
import BlockItem from "./blockItem";
import contentBlock from "../../assets/contentBlock.jpg";

const ContentBlock = function () {
  const pharagraph = {
    first:
      "Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam. Mattis egestas suspendisse convallis eu arcu et aliquet. Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris. Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.",
    second:
      "Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam. Mattis egestas suspendisse convallis eu arcu et aliquet. Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris. Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.",
  };
  return (
    <div className="content-block">
      <BlockItem
        buttonText={"Top “Manhattan” events"}
        title="Банкеты"
        pharagraph={pharagraph.first}
      />
      <img src={contentBlock} alt="style" className="content-block__photo" />
      <BlockItem
        buttonText={"Top “Manhattan” tourists"}
        title={"Туристы"}
        pharagraph={pharagraph.second}
      />
    </div>
  );
};

export default ContentBlock;
