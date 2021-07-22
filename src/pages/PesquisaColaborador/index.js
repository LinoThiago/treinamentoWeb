import React,{useEffect,useState} from "react";
import Logo from "../../components/img/logo.svg";
import { Link } from 'react-router-dom';
import { Button, Principal, Imagem, Botoes, Input } from "../Home/styles";
import api from '../../services/api'

const Home = () => {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api
      .get('/produtos')
      .then((response) => setProdutos(response.data))
      .catch((err) => {
        console.error('ops! ocorrei um erro' + err);
      });

  }, []);

  const products = produtos.map((p,i)=>
      <div key={i}>
        <p>
          Nome: {p.nome}
        </p>
      </div>
  )

  return (
    <Principal>
      <div>
        <Imagem>
          <img src={Logo} alt="Logo" />
        </Imagem>
      </div>
      <Botoes>
        <Link to="/cadastrarcolaboradores" style={{ width: "100%" }}><Button descricao="CadastrarColaboradores" >Adicionar Colaboradores</Button></Link>
      </Botoes>
      <Input type="text" placeholder="Pesquisar Colaborador" style={{ width: "70%" }}></Input>
      {products}
    </Principal>
  );
};

export default Home;