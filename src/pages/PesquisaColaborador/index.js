import React from "react";
import Logo from "../../components/img/logo.svg";
import { Link } from 'react-router-dom';
import { Button, Principal, Imagem, Botoes, Input } from "../Home/styles";

const Home = () => {
  return (
    <Principal>
      <div>
        <Imagem>
          <img src={Logo} alt="Logo" />
        </Imagem>
      </div>
      <Botoes>
      <Link to="/cadastrarcolaboradores"style={{width:"100%"}}><Button descricao="CadastrarColaboradores" >Adicionar Colaboradores</Button></Link>
      </Botoes>
      <Input type="text" placeholder="Pesquisar Colaborador" style={{width:"70%"}}></Input>
    </Principal>
  );
};

export default Home;