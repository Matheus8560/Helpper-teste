import React, { useEffect, useState } from 'react';
import './styles.css';

import api from '../../services/api';

export default function Home({history}) {
    const [clientes, setClientes] = useState([])

    useEffect(() => {
        loadClientes()
    }, [])

    async function loadClientes(){
        try{
            const response = await api.get('/clientes')

            console.log(response);
            setClientes(response.data)
        }catch{
            console.log('erro ao carregar clientes.');
        }
    }

    async function handleDelete(id){
        try{
            await api.delete(`/cliente/${id}`)
            window.location.reload();
        }catch{
            console.log('erro ao deletar clientes.');
        }
    }

    function handleDetail(id){
        history.push({
            pathname: '/dados',
            state: { id }
        })
    }

    return(
        <div className='container'>
            <div className='header'>
                <h1 className='header-text'>Dados cadastrados</h1>
                <button 
                    onClick={ev => (history.push('/register'))} 
                    className='register-btn'
                >
                    Cadastrar cliente
                </button>
            </div>
            <div classname='table-container'>
                <table className='table-clientes'>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th style={{width: '25%'}}>Ações</th>
                    </tr>
                    {clientes.map((dados, i) => 
                        <tr key={i}>
                            <td>{dados.nome}</td>
                            <td>{dados.email}</td>
                            <td>
                                <button className='btn-detail' onClick={ev => (handleDetail(dados._id))}> detalhes </button> 
                                <button className='btn-delete' onClick={ev => (handleDelete(dados._id))}> excluir </button>
                            </td>
                        </tr>
                    )}
                </table>
            </div>
        </div>
    )
}