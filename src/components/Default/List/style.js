import styled from 'styled-components'


export const Table = styled.table`
flex-grow:3;

width:100%;
border: 1px solid #292828;
border-collapse: collapse;
padding: 10px;
th, td {
    border: 1px solid #292828;
    padding: 15px;
    text-align: left;
}

tr:nth-child(even) {
    background-color: #eee;
  }

tr:nth-child(odd) {
   background-color: #fff;
}

th {
    background-color: #292828;
    color: white;
}
`;