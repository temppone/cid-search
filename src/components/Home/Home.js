import React from "react";
import Input from "../Input/Input";
import Result from "../Results/Result";
import { StyledResult } from "../Results/Result.styled";

const Home = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div>
      <form className="homeForm" onSubmit={(e) => e.preventDefault()}>
        <Input type="text" id={search} name={search} setValue={setSearch} placeholder="Digite"/>
      </form>
        <Result userInput={search} />
    </div>
  );
};

export default Home;
