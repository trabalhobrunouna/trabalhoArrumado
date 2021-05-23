import React, { useEffect, useState, Fragment } from 'react'
import UserAddForms from './Forms/UserAddForms'

const App = () => {
  const baseUrl = "http://localhost:8080";
  const initialFormState = { id: null, usuario: '', email: '', senha: '', confirmarsenha: '', nome: '' , sobrenome: '', cidade: '', estado: '', genero: ''}
  //eslint-disable-next-line
  const [users,setUsers] = useState([])
  const [currentUser] = useState(initialFormState)

  useEffect(() => {
    getUserService();
  }, []);

  //CRUD Adicionar
  const addUser = user => {
    addUserService(user);
  }

  return(
    <Fragment>
    <UserAddForms addUser={addUser} 
    currentUser={currentUser}/>
    </Fragment>
    ) 
    
    async function getUserService() {
      fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
          setUsers(data);
        });
    }

  async function addUserService(user) {
    fetch(baseUrl, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(user)
    })
      .then(
        reponse => {
          getUserService();
        }
      )
  }

}

export default App