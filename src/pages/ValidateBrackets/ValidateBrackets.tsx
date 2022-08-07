// import { useState } from "react";

function ValidateBrackets() {
  // enum BracketsTypeBracket {
  //   "(",
  //   ")",
  // }
  // enum BracketsTypeSquare {
  //   "[",
  //   "]",
  // }
  // enum BracketsTypeCurly {
  //   "{",
  //   "}",
  // }
  // const [inputString, setInputString] = useState("");

  // const validateBrackets = (str: string) => {
  //   return str;
  // };

  return (
    <div className="text-start m-4">
      <h1 className="text-xl">Validate Brackets Component</h1>
      <h2 className=" m-4 text-base">
        Write a JavaScript function validateBrackets(str) {`{ }`}, which gets
        single parameter str of type string and returns a boolean value. The
        function should check if the brackets are correct in the string, eg. for
        every opening bracket there is a corresponding closing bracket.
      </h2>

      <p className="m-4  text-base">
        Brackets can be:
        <br />
        <></> Big brackets: {}
        <br />
        Medium brackets: []
        <br />
        Small brackets: ()
      </p>

      <p className="m-4  text-base">
        Brackets have order: <br />
        <p className="text-base italic">
          You cannot have big or medium brackets inside of small brackets <br />
          You cannot have big brackets in medium brackets.
        </p>
        <p className="m-4 text-base">
          The parameter str can contain letters, digits, brackets, special
          symbols. Validate str with the given rules and return boolean result.
        </p>
        <p className="m-4 text-base bg-slate-700">
          Examples: <br />
          {`{asd} –`} true <br />
          {`{[(asd)]} –`} true <br />
          {`[{asd}] –`} false // order is not right <br />
          {`[(asd]) –`} false // there is closing medium bracket, but the last{" "}
          <br />
          opening bracket is small <br />
          {`{aaa[bbb(ccc)ddd]eee} –`} true
        </p>
      </p>

      <div className="bg-slate-700"></div>
    </div>
  );
}

export default ValidateBrackets;
