import axios from 'axios'
import oauth from 'axios-oauth-client'

export const FeedBack = userFeedback => {
  return axios
  .post('http://localhost:5000/nps/feedback',{
    nombre: userFeedback.nombre,
    clasificacion: userFeedback.clasificacion,
    argumento: userFeedback.argumento,
    respuesta: userFeedback.respuesta
  }).then(response => {
    return response.data
  })
}



export const encuesta = id => {
  return axios
  .post('http://localhost:5000/nps/encuesta', {
    id: id
  })
  .then(response => {
    return response.data
  })
}

export const register = user => {
  return axios
    .post('http://localhost:5000/nps/register', {
      email: user.email,
      password: user.password,
      rol: user.rol
    })
    .then(response => {
      console.log('Registered')
      return response.data
    })
}

export const argumentz = obj => {
  return axios
  .post('http://localhost:5000/nps/argument', {
    idformulario: obj.idformulario,
    clasificacion: obj.clasificacion    
  })
  .then(response => {
    return response.data
  })
}

export const login = user => {
  return axios
    .post('http://localhost:5000/nps/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const roles = rol =>{
  return axios
  .get('http://localhost:5000/nps/getRoles')
  .then(response => {
    return response.data
  });
}


export const SummaryNPS = req => {
  return axios
  .get('http://localhost:5000/nps/summarynps',
  ).then(response => {
    return response.data
  });

  
}
