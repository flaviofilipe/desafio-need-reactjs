import React from 'react';
import { Table } from './style';

function List({ data }) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => <tr>
                    <td key={item.id}>
                        {item.id}
                    </td>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.cpf}
                    </td>
                    <td>
                        {item.phone}
                    </td>
                    <td>
                        {item.email}
                    </td>
                </tr>)}
            </tbody>
        </Table>
    );
}

export default List;
