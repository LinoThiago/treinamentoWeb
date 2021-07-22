import React from "react";
import {
  Principal,
  Input,
  Formulario,
  FormurarioDiv,
  Imagem,
  Select,
  Button,
  Texto,
} from "../CadastrarColaboradores/styles";
import Logo from "../../components/img/logo.svg";

const CadastrarColaboradores = () => {
  return (
    <Principal>
      <Imagem>
        <img src={Logo} alt="Logo" style={{ width: "15%" }} />
      </Imagem>
      <div>
        <Texto>Cadastre: </Texto>
      </div>
      <Formulario>
        <FormurarioDiv>
          <Select name="estados-brasil">
            <option value="">Cargo</option>
            <option value="LID">Líder</option>
            <option value="ADM">Administrador</option>
            <option value="COL">Colaborador</option>
          </Select>
          <Input type="text" placeholder="Nome"></Input>
          <Input type="text" placeholder="CPF"></Input>
          <Input type="text" placeholder="RG"></Input>
          <Input type="text" placeholder="Posição"></Input>
          <Input type="date" placeholder="Data de nascimento"></Input>
          <Input type="email" placeholder="Email"></Input>
        </FormurarioDiv>
        <FormurarioDiv>
          <Input type="text" placeholder="Cidade"></Input>
          <Select name="estados-brasil">
            <option value="">Estado</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </Select>
          <Input type="text" placeholder="Rua"></Input>
          <Input type="number" placeholder="Telefone"></Input>
          <Input type="number" placeholder="Número"></Input>
          <Input type="text" placeholder="Conta bancária"></Input>
          <Input type="text" placeholder="PIX"></Input>
        </FormurarioDiv>
        <Button>Cadastrar</Button>
      </Formulario>
    </Principal>
  );
};

export default CadastrarColaboradores;
