import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const Result = ({ userInput }) => {
  const [searchResults, setSearchResults] = React.useState("");

  console.log(searchResults);
  const fetchResult = async () => {
    const { data } = await axios.get("https://cid.api.mokasoft.org/cid10");
    return data;
  };

  const { data, isLoading, error } = useQuery("result", fetchResult);

  React.useEffect(() => {
    const results = data?.filter((item) => {
      item.nome.toLowerCase().includes(userInput);
    });
    setSearchResults(results);
    console.log(searchResults)
  }, [userInput, data]);

  return <div>{searchResults}</div>;
};

export default Result;
