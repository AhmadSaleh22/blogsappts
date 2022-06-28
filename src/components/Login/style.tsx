import { Button } from "@mui/material";
import styled from "styled-components";

export const ProductTitle = styled.div<any>`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: ${(props) => props.width || "90%"};
  margin: 10px auto;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    margin: auto;
    align-items: flex-end;
    width: 80%;
  }
`;
export const ButtonService = styled(Button) <any>`
  margin-top: 20px;
  border-color: white;
  color: white;
  width: 143px;
  height: 46px;
  :hover {
    background-color: #dc2129;
    border: none;
  }
`;

export const BuyButton = styled(ButtonService)`
  border: none;
  color: white;
  display: flex;
  border-radius: ${(props) => props.borderRadius || "2px"};
  width: ${(props) => props.width || "201.12px"};
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: 500;
  font-family: cairo;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  background-color: #dc2129;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  :hover {
    color: #dc2129;
    background-color: inherit;
  }
`;
