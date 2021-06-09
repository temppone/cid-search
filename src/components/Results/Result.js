import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { StyledResult } from "./Result.styled";

const Result = ({ userInput }) => {
  const [searchResults, setSearchResults] = React.useState([]);

  const fetchResult = async () => {
    const { data } = await axios.get("https://cid.api.mokasoft.org/cid10");
    return data;
  };

  const { data, isLoading, error } = useQuery("result", fetchResult);

  React.useEffect(() => {
    if (isLoading === false && userInput.length > 3) {
      const resultsFilter = data.filter((item) => {
        if (item.nome.toLowerCase().indexOf(userInput.toLowerCase()) !== -1) {
          return true;
        } else {
          return false;
        }
      });
      setSearchResults(resultsFilter);
    }
  }, [userInput, data]);

  React.useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Algo errado não está certo</div>;

  return (
    <StyledResult>
      <ul>
        {searchResults.map((item) => (
          <li key={item.nome}>
            <div>{item.nome}</div>
            <div>{item.codigo}</div>
          </li>
        ))}
      </ul>
    </StyledResult>
  );
};

export default Result;
