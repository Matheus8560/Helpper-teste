import React from 'react';
import './styles.css';
import { useState } from 'react';

export default function Details(history) {

    const [dados, setDados] = useState({
        nome: localStorage.getItem('nome'),
        email: localStorage.getItem('email'),
        cpf_cnpj: localStorage.getItem('cpf_cnpj'), 
        tel: localStorage.getItem('tel'),
        cep: localStorage.getItem('cep'),
        bairro: localStorage.getItem('bairro'),
        logradouro: localStorage.getItem('logradouro'),
        numero: localStorage.getItem('numero'),
        cidade: localStorage.getItem('cidade'),
        estado: localStorage.getItem('estado')
    })

    return(
        <div className='Container'>

            <h1>Dados cadastrados</h1>

            <div className='linha'>
                <div>
                    <strong className="titulo">Nome: </strong>
                    <span className="dado">{dados.nome}</span>
                </div>
                <button 
                    onClick={
                        (ev) => 
                            setDados({...dados, nome: ''}, 
                            localStorage.removeItem('nome'))
                    }
                >
                    remover
                </button>
            </div>

            <div className='linha'>
                <div>
                    <strong className="titulo">Email: </strong>
                    <span className="dado">{dados.email}</span>
                </div>
                <button 
                    onClick={
                        (ev) => 
                            setDados({...dados, email: ''}, 
                            localStorage.removeItem('email'))
                    }
                >
                    remover
                </button>
            </div>

            <div className='linha'>
                <div>
                    <strong className="titulo">CPF/CNPJ: </strong>
                    <span className="dado">{dados.cpf_cnpj}</span>
                </div>
                <button 
                    onClick={
                        (ev) => 
                            setDados({...dados, cpf_cnpj: ''}, 
                            localStorage.removeItem('cpf_cnpj'))
                    }
                >
                    remover
                </button>
            </div>
            
            <div className='linha'>
                <div>
                    <strong className="titulo">Telefone: </strong>
                    <span className="dado">{dados.tel}</span>
                </div>
                <button 
                    onClick={
                        (ev) => 
                            setDados({...dados, tel: ''}, 
                            localStorage.removeItem('tel'))
                    }
                >
                    remover
                </button>
            </div>

            <div className='linha'>
                <div>
                    <strong className="titulo">Cep: </strong>
                    <span className="dado">{dados.cep}</span>
                </div>
                <button 
                    onClick={
                        (ev) => 
                            setDados({...dados, cep: ''}, 
                            localStorage.removeItem('cep'))
                    }
                >
                    remover
                </button>
            </div>

            <div className='linha'>
                <div>
                    <strong className="titulo">Bairro: </strong>
                    <span className="dado">{dados.bairro}</span>
                </div>
                <button 
                    onClick={
                        (ev) => 
                            setDados({...dados, bairro: ''}, 
                            localStorage.removeItem('bairro'))
                    }
                >
                    remover
                </button>
            </div>

            <div className='linha'>
                <div>
                    <strong className="titulo">Logradouro: </strong>
                    <span className="dado">{dados.logradouro}</span>
                </div>
                <button 
                    onClick={
                        (ev) => 
                            setDados({...dados, logradouro: ''}, 
                            localStorage.removeItem('logradouro'))
                    }
                >
                    remover
                </button>
            </div>

            <div className='linha'>
                <div>
                    <strong className="titulo">Número: </strong>
                    <span className="dado">{dados.numero}</span>
                </div>
                <button 
                    onClick={
                        (ev) => 
                            setDados({...dados, numero: ''}, 
                            localStorage.removeItem('numero'))
                    }
                >
                    remover
                </button>
            </div>

            <div className='linha'>
                <div>
                    <strong className="titulo">Cidade: </strong>
                    <span className="dado">{dados.cidade}</span>
                </div>
                <button 
                    onClick={
                        (ev) => 
                            setDados({...dados, cidade: ''}, 
                            localStorage.removeItem('cidade'))
                    }
                >
                    remover
                </button>
            </div>
            <div className='linha'>
                <div>
                    <strong className="titulo">Estado: </strong>
                    <span className="dado">{dados.estado}</span>
                </div>
                <button 
                    onClick={
                        (ev) => 
                            setDados({...dados, estado: ''}, 
                            localStorage.removeItem('estado'))
                    }
                >
                    remover
                </button>
            </div>
        </div>
    )

}