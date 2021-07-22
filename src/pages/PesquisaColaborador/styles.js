import styled from "styled-components";

export const Principal = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 400px;
  align-items: center;
`;
export const Button = styled.button`
  border: none;
  border-radius: 30px;
  width: 97%;
  height: 40px;
  margin: 10px;
  font-size: 18px;
  padding: 5px 15px;
  font-weight: 600;
  background-color: #01a999;
  color: white;
`;
export const Botoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;
export const Imagem = styled.div`
  width: 100%;
  padding-left: 10%;
`;
export const Input = styled.input`
  border: none;
  border-radius: 30px;
  height: 30px;
  margin: 10px;
  font-size: 18px;
  padding: 5px 15px;
  font-weight: 700;
  &:focus {
    outline:none;
  }
`;
export const ButtonFiltro = styled.button`
  
`;

