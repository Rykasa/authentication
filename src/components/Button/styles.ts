import styled from "styled-components";

export const ButtonComponent = styled.button`
  padding: .25rem 1rem;
  font-size: .875rem;
  text-transform: capitalize;
  font-weight: bold;
  color: #9DBF9E;
  border: none;
  border-radius: .25rem;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover{
    box-shadow: 0 0 0 2rem #9DBF9E inset;
    color: #fff;
  }
`;