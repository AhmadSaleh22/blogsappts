import styled from "styled-components";

const SpinnerContainer = styled.div<any>`
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 6px solid ${(props) => props.theme?.primary?.lightYallow};
  box-sizing: border-box;
  border-radius: 50%;
  border-top-color: #ddd;
  margin: auto;
  animation: spin 3s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export { SpinnerContainer };
