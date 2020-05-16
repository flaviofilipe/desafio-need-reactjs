import React from 'react';
import { useHistory } from 'react-router-dom';
import InputMask from "react-input-mask";

import { Container } from '../../styles/general';
import { Form } from './style';


import useForm from "../../hooks/useForm";
import api from '../../services/api';

function NewUser() {

  const [{ values, loading }, handleChange, handleSubmit] = useForm();
  let history = useHistory();


  async function enviarContato(e) {
    // faça o que for preciso :)
    const response = await api.post('/users', values);
    console.log(values);
    history.push('/');
  };


  return (
    <Container>
      <h1 className="title">Novo Usuário</h1>

      <Form onSubmit={handleSubmit(enviarContato)}>
        <div className="form-group">
          <label htmlFor="name">Nome completo (sem abreviações)</label>
          <input className="form-control" name="name" onChange={handleChange} />
        </div>


        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input className="form-control" name="email" type="email" onChange={handleChange} />
        </div>

        <div className="form-group">

          <label htmlFor="cpf">CPF</label>
          <InputMask mask="999.999.999-99" className="form-control" name="cpf" onChange={handleChange} />

          {/* <input className="form-control" name="cpf" type="number" onChange={handleChange} /> */}
        </div>

        <div className="form-group">

          <label htmlFor="phone">Telefone</label>
          <InputMask mask="(99) 99999-9999" className="form-control" name="phone" onChange={handleChange} />
          {/* <input className="form-control" name="phone" type="number" onChange={handleChange} /> */}
        </div>


        <button className="btn purple" type="submit" >{loading ? "Salvando..." : "Salvar"}</button>

      </Form>

    </Container>
  );
}

export default NewUser;
