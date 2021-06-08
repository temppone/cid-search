import React from "react";
import Input from "../Input/Input";
import Result from "../Results/Result";
import { useQuery } from "react-query";

const Home = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div>
      <form className="homeForm" onSubmit={(e) => e.preventDefault()}>
        <Input type="text" id={search} name={search} setValue={setSearch} />
      </form>

      <Result userInput={search} />
    </div>
  );
};

export default Home;
