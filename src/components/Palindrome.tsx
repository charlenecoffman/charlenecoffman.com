import React from "react";
import CodeExample from "./CodeExample";
import ComponentNavBarWrapper from "./ComponentNavBarWrapper";

export interface IPalindrome {}

const Palindrome: React.FC<IPalindrome> = (props: IPalindrome) => {
  return (
    <ComponentNavBarWrapper>
    <CodeExample
      name="Palindrome"
      description="Palindromes can be read in both directions. How can you determine if a string is a palindrome in the C# language? A palindrome has the same letters on both ends of the string. ex: kayak"
      iframeCodeUrl="https://dotnetfiddle.net/Widget/tbWg77"
    />
    </ComponentNavBarWrapper>
  );
};

export default Palindrome;
