  function submitData(nameArg, emailArg){
    let data = {
        name: nameArg,
        email: emailArg
    }
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    } 
    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        console.log(object)
        let id = document.createElement('p')
        id.textContent = object.id
        document.querySelector('h2').appendChild(id)
    })
    .catch(function(error){
        alert("Bad!")
        console.log(error.message)
        let em = document.createElement('p')
        em.textContent = error.message
        document.querySelector('h2').appendChild(em)
    })
}