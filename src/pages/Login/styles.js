import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  min-width: 400px;
  align-items: center;
  justify-content: center;
  margin: 0;
`;
export const Principal = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 93%;
  background-color: black;
  border-radius: 15px;
  padding: 20px;
  margin-top: 60px;

`;
export const Input = styled.input`
  border: none;
  border-radius: 30px;
  height: 30px;
  width: 90%;
  margin: 10px;
  font-size: 18px;
  padding: 5px 15px;
  font-weight: 700;
  &:focus {
    outline:none;
  }
`;
export const Button = styled.button`
  border: none;
  border-radius: 30px;
  height: 40px;
  width: 120%;
  margin: 10px;
  font-size: 18px;
  padding: 5px 15px;
  font-weight: 600;
  background-color: #01a999;
  color: white;
`;
export const Imagem = styled.div`
  width: auto;
  height: auto;
  padding-left: 80px;;
`;
