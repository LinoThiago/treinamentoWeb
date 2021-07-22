import styled from "styled-components";

export const Principal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;
export const Input = styled.input`
  color:grey;
  border: none;
  border-radius: 30px;
  width: 46%;
  height: 30px;
  margin: 10px;
  font-size: 18px;
  padding: 5px 15px;
  font-weight: 700;
  &:focus {
    outline:none;
  }
`;
export const Formulario = styled.form`
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 80%;
  background-color: black;
  border-radius: 15px;
  margin-top: 30px;
`;
export const FormurarioDiv = styled.div`
  border: red solid 1px;
  display: flex;
  flex-direction: column;
  width: 48%;
`; 
export const Imagem = styled.div`
  width: 82%;
  margin-top:30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border: red 1px solid;
`;
export const Select = styled.select`
  color:grey;
  border: none;
  border-radius: 30px;
  height: 40px;
  width: 48%;
  margin: 10px;
  font-size: 18px;
  padding: 5px 15px;
  font-weight: 700;
  &:focus {
    outline:none;
  }
  appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url(../../components/img/seta.png) no-repeat center right #FFF;
    border: 1px solid #333;
    font-size: 15px;
    padding-right: 20px;
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
export const Texto = styled.h2`
  color: black;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`;