function PrimeDividers() {
  const primeDividers = (n: number) => {
    let result = [];

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        result.push(i);
      }
    }

    return result.length > 0 ? result.join(",") : n;
  };
  return (
    <div className="grid text-start justify-center m-4 w-full ">
      <h1 className="text-xl">Prime Dividers Component</h1>
      <br />
      <p className="text-lg w-65">
        Write a JavaScript function primeDividers(n) {`{ }`}, which gets single{" "}
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
      <div className="bg-slate-700 my-4 w-full h-auto">
        <div className="m-4">
          const primeDividers = (n: number) ={`>`} {"{"}
          <br />
          let result = [];
          <br />
          for (let i = 2; i {"<"} n; i++) {"{"}
          <br />
          if (n % i === 0) {"{"}
          <br />
          result.push(i);
          {"}"}
          <br />
          {" }"}
          <br />
          return result.length {">"} 0 ? result.join(",") : n;
          <br />
          {" }"};<br />
        </div>
        <div className="bg-slate-700 m-4">
          <div>For 15 result is= {primeDividers(15)}</div>
          <div>For 11 result is= {primeDividers(11)}</div>
          <div>For 12 result is= {primeDividers(12)}</div>
          <div>For 17 result is= {primeDividers(17)}</div>
          <div>For 18 result is= {primeDividers(18)}</div>
        </div>
      </div>
    </div>
  );
}

export default PrimeDividers;
