function ValidateBrackets() {
  // enum BracketsOpen {
  //   Big = "{",
  //   Medium = "[",
  //   Small = "(",
  // }
  // const enum BracketsClosed {
  //   Big = "}",
  //   Medium = "]",
  //   Small = ")",
  // }
  const validateBrackets = (str: string): boolean => {
    let brackets: number[] = [];
    let bracketsReversed: number[] = [];
    let result: boolean = true;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        brackets.push(1);
      } else if (str[i] === "[") {
        brackets.push(2);
      } else if (str[i] === "{") {
        brackets.push(3);
      } else if (str[i] === ")") {
        bracketsReversed.push(1);
      } else if (str[i] === "]") {
        bracketsReversed.push(2);
      } else if (str[i] === "}") {
        bracketsReversed.push(3);
      }
      // else if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
      //   bracketsReversed.push(str[i]);
      // }
    }
    // for (let j = 0; j < brackets.length; j++) {
    //   if (brackets[j] === "(" && bracketsReversed[j] === ")") {
    //     brackets[j].replaceAll("(", BracketsOpen.Small);
    //     bracketsReversed[j].replaceAll(")", BracketsClosed.Small);
    //   } else if (brackets[j] === "[" && bracketsReversed[j] === "]") {
    //     brackets[j].replaceAll("[", BracketsOpen.Medium);
    //     bracketsReversed[j].replaceAll("]", BracketsClosed.Medium);
    //   } else if (brackets[j] === "{" && bracketsReversed[j] === "}") {
    //     brackets[j].replaceAll("{", BracketsOpen.Big);
    //     bracketsReversed[j].replaceAll("}", BracketsClosed.Big);
    //   }
    // }
    for (let k = 0; k < brackets.length; k++) {
      if (brackets[k] === bracketsReversed[k]) {
        return (result = true);
      } else {
        return (result = false);
      }
    }
    // //array check
    // const myStringArray: string[] = brackets;
    // const arrayLength = myStringArray.length;
    // for (let i = 0; i < arrayLength; i++) {
    //   console.log(myStringArray[i]);
    // }
    // console.log(brackets);
    // console.log(bracketsReversed);
    return result;
  };

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
        <></> Big brackets: {`{}`}
        <br />
        Medium brackets: []
        <br />
        Small brackets: ()
      </p>

      <div className="m-4  text-base">
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
      </div>

      {/* Examples:
      {asd} – true
      {[(asd)]} – true
      [{asd}] – false // order is not right
      [(asd]) – false // there is closing medium bracket, but the last opening bracket is small
      {aaa[bbb(ccc)ddd]eee} – true */}
      <div className="bg-slate-700">
        <div className="m-4">
          {`{asd} –`} {validateBrackets("{asd}") ? "true" : "false"} <br />
          {`{[(asd)]} –`} {validateBrackets("{[(asd)]}") ? "true" : "false"}
          <br />
          {`[{asd}] –`} {validateBrackets("[{asd}]") ? "true" : "false"} <br />
          {`[(asd]) –`} {validateBrackets("[(asd])") ? "true" : "false"} <br />
          {`{aaa[bbb(ccc)ddd]eee} –`}
          {validateBrackets("{aaa[bbb(ccc)ddd]eee}") ? "true" : "false"}
        </div>
      </div>
    </div>
  );
}

export default ValidateBrackets;
