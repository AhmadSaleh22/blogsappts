import styled from "styled-components";
import { Field } from "formik";
import Select from "react-select";

export const InputForm = styled(Field) <any>`
  width: ${(props) => props.fullWidth && props.Width};
  height: 54px;
  display: inline-block;
  border: 1px solid #eef1f5;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  text-align: right;
  /* margin-right: 40px; */
  padding-right: 10px;
  @media (max-width: 800px) {
    width: 100%;
  }
  &::placeholder {
    color: #848484;
  }
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
export const FlexInput = styled.div<any>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: ${(props) => (props.fullWidth ? props.fullWidth : "100%")};
  margin-bottom: 15px;
  margin-inline: 10px;
  @media (max-width: 800px) {
    width: 95%;
  }
`;
export const SelectInput = styled(Select) <any>`
  display: inline-block;
  border: 1px solid #eef1f5;
  border-radius: 3px;
  height: 54px;
  color: #848484;
  font-size: 14px;
  outline: none;
  text-align: right;
  width: ${(props) => (props.width ? props.width : "101%")};
  margin-bottom: 15px;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "")};

  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 98%;
  }
`;

export const TwoInputWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin-left: 25px; */
  gap: "10px";
  width: 100%;
  @media (max-width: 800px) {
    margin: auto;
    width: 100%;
    flex-direction: column;
  }
`;

export const FormWrapper = styled.div<any>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: ${(props) => props.margin || "20px"};
  text-align: right;
  width: ${(props) => props.width && props.width};
  @media (max-width: 1200px) {
    /* width: 90%; */
    margin: auto;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;
export const Label = styled.label<any>`
  color: #000;
  font-size: 16px;
  letter-spacing: 0.88px;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "10px")};
`;
export const Errors = styled.h6`
  color: red;
  font-size: 12px;
  margin: 5px;
`;
export const LoginWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  background-color: #edf2f4;
  font-family: "Cairo";
  width: 100%;
`;

export const divBtn = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    & button {
      width: 98%;
    }
  }
`;
