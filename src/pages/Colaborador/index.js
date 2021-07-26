import React from 'react';
import { AuthContext } from '../../providers/auth';
import { Principal } from '../PesquisaColaborador/styles';
import { CardColaborador } from './styles';

const Colaborador = () => {
    const{ colaborador } = React.useContext(AuthContext);
    return (
        <Principal>
        <CardColaborador>
            <p>{colaborador.id}</p>
            <p>{colaborador.nome}</p>
            <p>{colaborador.cpf}</p>
        </CardColaborador>
        </Principal>
    );
}

export default Colaborador;
