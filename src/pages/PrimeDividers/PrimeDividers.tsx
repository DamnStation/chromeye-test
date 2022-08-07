// Write a JavaScript function primeDividers(n) {}, which gets single parameter n of type int and prints all of it's prime dividers, except for 1.
function PrimeDividers() {
  return (
    <div className="grid text-start m-4 ">
      <h1 className="text-xl">Prime Dividers Component</h1>
      <br />
      <p className="text-lg w-65">
        Write a JavaScript function primeDividers(n) {`{}`}, which gets single{" "}
        <br />
        parameter n of type int and prints all of it's prime dividers, except{" "}
        <br />
        for 1.
      </p>
      <br />

      <p className="text-base">
        Examples: <br />n = 15 {`=>`} 3, 5<br />n = 11 {`=>`} 11 <br />n = 12{" "}
        {`=>`} 2, 3
      </p>
    </div>
  );
}

export default PrimeDividers;
