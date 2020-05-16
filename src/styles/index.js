import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #f5f5f5;
  }

  input, button, textarea {
    font: 400 14px 'Roboto', sans-serif;
  }

  input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }

  input:focus, textarea:focus {
    border: 1px solid #7ff790;
  }
  
  a {
    text-decoration: none;
  }

  label {
    font-size:20px;
    color: gray;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

 .btn{
    padding: 10px;
    border-radius: 50px;
    border-style: none;
    text-align:center;
    
    background: #00c8b3;
    color: #f6f6f6;
 }

 
 .btn:hover {
    opacity: 70%;
  }

  .btn:disabled {
    background: #dddcdc;
    color: #f6f6f6;
  }

 .toRight{
    align-self: flex-end;
 }

 .form-group{
    margin:10px 0;  
    display: flex;
    flex-direction: column;

    input {
        color:#efeeed;
        border: 0;
        border-bottom: 1px solid #efeeed;
    };

    input:focus{
      color: #333333;
    }

    input:invalid{
      color: #eb4a46;
      border-color: #eb4a46;
    }

    label{
      min-width: 100px;
    }
  }

  .title{
    margin-top:15px;
    color: #3D3D3D;
  }
`;