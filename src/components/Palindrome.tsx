import React from "react";
import CodeExample from "./CodeExample";

export interface IPalindrome {}

const Palindrome: React.FC<IPalindrome> = (props: IPalindrome) => {
  return (
    <CodeExample
      name="Palindrome"
      description="Palindromes can be read in both directions. How can you determine if a string is a palindrome in the C# language? A palindrome has the same letters on both ends of the string. ex: kayak"
      iframeCodeUrl="https://dotnetfiddle.net/Widget/tbWg77"
    />
  );
};

export default Palindrome;
