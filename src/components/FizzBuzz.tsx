import React from "react";
import CodeExample from "./CodeExample";
import ComponentNavBarWrapper from "./ComponentNavBarWrapper";

export interface IFizzBuzz {}

const FizzBuzz: React.FC<IFizzBuzz> = (props: IFizzBuzz) => {
  return (
    <ComponentNavBarWrapper>
    <CodeExample
      name="FizzBuzz"
      description="Write a program that prints the numbers from 1 to 100. But for multiples of three print 'Fizz' instead of the number and for the multiples of five print 'Buzz'. For numbers which are multiples of both three and five print 'FizzBuzz'"
      iframeCodeUrl="https://dotnetfiddle.net/Widget/UbGIqM"
    />
    </ComponentNavBarWrapper>
  );
};

export default FizzBuzz;
