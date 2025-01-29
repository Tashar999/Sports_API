fetch('https://www.pro-football-reference.com/players/B/BigsTa00.htm')
.then(res => {

    if(!response.ok){
        throw new Error("Could not fetch resource")
    }
    return response.json();  
})
.then(data => console.log(data.id))
.catch(error => console.error(error));
