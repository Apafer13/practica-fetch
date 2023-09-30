let btn = document.getElementById("btn")
btn.addEventListener("click", ()=>{
    let name = document.getElementById("name")
    let lastName = document.getElementById("lastName")
    let date = document.getElementById("date")
    let info = {name: name.value, lastName: lastName.value, date: date.value}
    fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(info)
    })

})