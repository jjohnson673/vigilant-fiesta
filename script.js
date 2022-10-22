fetch ('https://reqres.in/api/users/23')
    .then(res => res.json())
    .then(data => console.log(data))