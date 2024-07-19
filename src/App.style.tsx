import styled from "styled-components";

export const ButtonMode = styled.button<{ themeMode: boolean }>`
  position: absolute;
  top: 30px;
  right: 40px;
  width: 86px;
  height: 25px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${({ themeMode }) => (themeMode ? "#fff " : "#000000" )};
  color: ${({ themeMode }) => (themeMode ? "#000000 " : "#fff" )};
  cursor: pointer;
`;

export const Container = styled.div<{ themeMode: boolean }>`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ themeMode }) => (themeMode ? "#4e4e4e " :"#fff" )};
`;
