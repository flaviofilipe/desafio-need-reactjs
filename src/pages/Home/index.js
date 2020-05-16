import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container } from '../../styles/general';


import List from '../../components/Default/List';
import { Panel } from './style';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users');
      setUsers(response.data);
    }

    loadUsers();
  }, []);


  return (
    <Panel>
      <Container>
        <a className="btn toRight purple" marginBottom="10px" href="user">Adicionar</a>
        <List data={users} />
      </Container>
    </Panel>

  );
}

export default Home;
