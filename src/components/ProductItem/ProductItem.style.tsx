import styled from "styled-components";

export const ProductItem = styled.div<{ themeMode: boolean }>`
    width: 72vw;
    height: 190px;
    color: #030303;
    background-color:${({ themeMode }) => (themeMode ? "rgb(26, 88, 20)" : "#0bb636")}; 
    margin-top: 5px;
    margin-left: 5px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    li{
        list-style-type: none
    }

    h2{
        margin-bottom: -12px;
    }

    h4{
        margin-bottom: 5px;
    }
`

export const ButtonDeleteStyled = styled.button`
    width: 50px;
    height: 40px;
    background-color: #b60c0c;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
`

export const ButtonEditStyled = styled.button`
    width: 50px;
    height: 40px;
    background-color: #21ccd8;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
`