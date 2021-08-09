import React from "react";
import CodeExample from "./CodeExample";

export interface ICountOccurances {}

const CountOccurances: React.FC<ICountOccurances> = (props: ICountOccurances) => {
  return (
    <CodeExample
      name="Count Occurances In String"
      description="Count the number of occurences of each letter in a string"
      iframeCodeUrl="https://dotnetfiddle.net/Widget/GxsBpE"
    />
  );
};

export default CountOccurances;
