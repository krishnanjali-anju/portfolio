// console.log(" === Hour 1 : JSON Basics === ");

// let student = {
//     name: "anju",
//     age: 20,
//     marks: [30,29,26]
// };

// let jsonstring =JSON.stringify(student);
// console.log("JSON String:",jsonstring);

// let parsedobj = JSON.parse(jsonstring);
// console.log("parsed object:",parsedobj);
 
// let books = [
//     {titile: "Book A", author: "Author 1", price: 200}
// ];
// console.log("Book Titles:", books.map(b => b.title));



// console.log(" === Hour 2 : AJAX with fetch === ");

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//  .then(response => response.json())
//  .then(data => console.log("Fetched Data:",data))
//  .catch(error => console.error("Error:",error))

//  fetch("https://jsonplaceholder.typicode.com/posts/")
//  .then(response => response.json())
//  .then(data => console.log("Fetched Data:",data))
//  .catch(error => console.error("Error:",error))

//  fetch("https://jsonplaceholder.typicode.com/users/")
//   .then(res => res.json())
//   .then(users => {
//     let ouput = "<h3>user list</h3><ul>";
//     users.forEach(user => {
//         ouput += `<li>${user.name}-${user.email}</li>`;
//     });
//     ouput += "</ul>";
//     document.body.innerHTML += ouput;
//   });

//oredefined city -> coordinates
   const cityCoords = {
     "bangalore": { lat: 12.97, lon: 77.59},
     "delhi":{ lat: 28.61, lon: 77.20},
     "mumbai":{ lat: 19.07, lon: 72.87},
     "london":{ lat: 51.51, lon: -0.13},
     "new york":{ lat: 40.71, lon: -74.01}
   };

document.getElementById("fetchBtn").addEventListener("click", () => {
    let city = document.getElementById("cityInput").value.toLowerCase();

    if(!cityCoords[city]) {
         document.getElementById("Weather").innerHTML = "city is not in list.....";
         return;
    }
    let Coords = cityCoords[city];
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${Coords.lat}&longitude=${Coords.lon}&current_weather=true`;
    //AJAX Fetch
    fetch(url)
        .then(res => res.json())    
        .then(data => {
            if(data.current_weather){
                document.getElementById("Weather").innerHTML = `
                    <h3>Weather in ${city}</h3>
                    <p>Temp: ${data.current_weather.temperature}°C</p>
                    <p>Wind: ${data.current_weather.wind} km/h</p>
                    <p>Time: ${data.current_weather.Time}</p>
                `;
            } else {
                document.getElementById("Weather").innerHTML = "no data available ";
            }
        })
        .catch(err => {
            console.error(err);
            document.getElementById("Weather").innerHTML = "Error fetching data";
        });
});      

