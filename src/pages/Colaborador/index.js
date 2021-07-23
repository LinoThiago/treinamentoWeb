import React from 'react';
import { useParams } from 'react-router-dom';
import { PrincipalDiv, CardColaboradorDiv, Info } from '../Colaborador/styles';

const Colaborador = (props) => {
    const {id} = useParams();
    return (
        <PrincipalDiv>
            <CardColaboradorDiv>
                <Info id={id ? Number.parseInt(id,10) : null}>{id}</Info>
                <Info>{props.name}</Info>
            </CardColaboradorDiv>
        </PrincipalDiv>
    );
}

export default Colaborador;
