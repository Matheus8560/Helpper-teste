import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

import api from '../../services/api'

export default function Details(props) {
    const history = useHistory();

    const [cliente, setCliente] = useState({});

    const clienteId = props.location.state.id

    useEffect(() => {
        async function loadCliente(){
            try{
                const response = await api.get(`/cliente/${clienteId}`)
    
                console.log(response);
                setCliente(response.data)
            }catch{
                console.log('erro ao carregar cliente.');
            }
        }
        loadCliente()
    }, [clienteId])

    return(
        <div className='Container'>

            <h1>Dados cadastrados</h1>

            <div className='linha'>
                <div>
                    <strong >Nome: </strong>
                    <span >{cliente.nome}</span>
                </div>
            </div>

            <div className='linha'>
                <div>
                    <strong className="titulo">Email: </strong>
                    <span className="dado">{cliente.email}</span>
                </div>
            </div>

            <div className='linha'>
                <div>
                    <strong className="titulo">CPF/CNPJ: </strong>
                    <span className="dado">{cliente.cpf_cnpj}</span>
                </div>
            </div>
            
            <div className='linha'>
                <div>
                    <strong className="titulo">Telefone: </strong>
                    <span className="dado">{cliente.tel}</span>
                </div>
            </div>

            <div className='linha'>
                <div>
                    <strong className="titulo">Cep: </strong>
                    <span className="dado">{cliente.cep}</span>
                </div>
            </div>

            <div className='linha'>
                <div>
                    <strong className="titulo">Bairro: </strong>
                    <span className="dado">{cliente.bairro}</span>
                </div>
            </div>

            <div className='linha'>
                <div>
                    <strong className="titulo">Logradouro: </strong>
                    <span className="dado">{cliente.logradouro}</span>
                </div>
            </div>

            <div className='linha'>
                <div>
                    <strong className="titulo">Número: </strong>
                    <span className="dado">{cliente.numero}</span>
                </div>
            </div>

            <div className='linha'>
                <div>
                    <strong className="titulo">Cidade: </strong>
                    <span className="dado">{cliente.cidade}</span>
                </div>
            </div>
            <div className='linha'>
                <div>
                    <strong className="titulo">Estado: </strong>
                    <span className="dado">{cliente.estado}</span>
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button className="voltar-btn" onClick={ev => {history.push('/home')}}>Voltar</button>
            </div>
        </div>
    )

}