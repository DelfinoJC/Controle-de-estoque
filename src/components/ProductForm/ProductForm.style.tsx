import styled from "styled-components";

export const FormAddProductStock = styled.form<{ themeMode: boolean }>`
  width: 340px;
  height: 100%;

  background-color: ${({ themeMode }) => (themeMode ? "rgb(26, 88, 20)" : "#c0db28")};
  color: ${({ themeMode }) => (themeMode ? "#fff" : "black")};

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6px;
  border-radius: 5px;
`;

export const InputForm = styled.input`
  width: 240px;
  height: 25px;

  border: none;
  border-radius: 4px;
`;

export const ButtonForm = styled.button<{ themeMode: boolean }>`
  width: 240px;
  height: 25px;
  height: 25px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${({ themeMode }) => (themeMode ? "rgb(13, 148, 137)" : "#2eb5dff4")}; ;
  color: white;
  cursor: pointer;
`;

