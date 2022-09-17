document.getElementById("get__api").addEventListener('click', getUsers);

const url ='https://jsonplaceholder.typicode.com/users'

function getUsers(){
  fetch (url)
  .then((res) => res.json())
  .then ((data) => {
   
    let output = '<h2 class="mb-4 mt-4"> Users </h2>';
    data.forEach (function (user){
      output += `
      <ul class="list-group mb-3">
        <li> ID: ${user.id}</li>
        <li> Name: ${user.name}</li>
        <li> Username: ${user.username}</li>
        <li> email: ${user.email}</li>
        <p class="mb-2">Address:</p>
        <li> street: ${user.address.street}</li>
        <li> suite: ${user.address.suite}</li>
        <li> city: ${user.address.city}</li>
        <li> zipcode: ${user.address.zipcode}</li>
        <li> geo lat: ${user.address.geo.lat}</li>
        <li>geo lng: ${user.address.geo.lng}</li>
        <li> phone: ${user.phone}</li>
        <li> website: ${user.website}</li>
        <li>company name: ${user.company.name}</li>
        <li> company catchPhrase: ${user.company.catchPhrase}</li>
        <li> company bs: ${user.company.bs}</li>
      </ul>
      `
    })
    document.getElementById("output").innerHTML = output; 
  })
.catch((err) => console.log(err))
}



