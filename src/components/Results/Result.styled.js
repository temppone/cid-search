import styled from "styled-components";

export const StyledResult = styled.div`
margin-top: 20px;
  display: flex;
  align-content: center;
  font-family: sans-serif;

  ul {
    margin: 0 auto;
    list-style: none;
  }

  li {
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 20px;
    text-align: center;
  }

  li:after {
    content: "";
    width: 200px;
    height: 3px;
    background: #333333;
    display: block;
    margin-top: 20px;
    border-radius: 2px;
    margin: 2rem auto 0 auto;
  }

  li > div {
    padding: 0.5rem;
  }
`;
