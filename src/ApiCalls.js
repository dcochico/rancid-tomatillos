import React from 'react'


const GetData = type => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${type}`)
        .then(res => res.json())
}

const Login = (email, password) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/login`, {
        method: 'POST',
        body: JSON.stringify({ email: email, password: password }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export default { GetData, Login }