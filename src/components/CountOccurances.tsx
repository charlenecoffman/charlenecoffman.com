import React from "react";
import CodeExample from "./CodeExample";
import ComponentNavBarWrapper from "./ComponentNavBarWrapper";

export interface ICountOccurances {}

const CountOccurances: React.FC<ICountOccurances> = (props: ICountOccurances) => {
  return (
    <ComponentNavBarWrapper>
    <CodeExample
      name="Count Occurances In String"
      description="Count the number of occurences of each letter in a string"
      iframeCodeUrl="https://dotnetfiddle.net/Widget/GxsBpE"
    />
    </ComponentNavBarWrapper>
  );
};

export default CountOccurances;
