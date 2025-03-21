async function getPlayerDetails() {
    const apiKey= `d0a198f9a82351d2795da1de28a3b4521eeba3dcb9581b3aa38b8d39c606bc84`
    const player= document.getElementById('search-player').value
    const url = `https://apiv3.apifootball.com/?action=get_players&player_name=${player}&APIkey=${apiKey}`


    try{
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
      displayResults(data)
    }catch (error) 
    {
      console.log("The application was not able to fetch the player", error);
    }
  }
  function displayResults(data){
    /*
    1. get the length of the json file
    2. be able to call from any line
    3. for loop to iterate over every person
    4. (optional) turn into 2 functions for ease of use
    */
    const [{player_name, player_image, player_goals, team_name, player_assists, player_type }] = data
    const htmlOutput = `
    <p><img src=${player_image} alt="player123" width="200px" height="auto" style="border-radius: 50%"></>
    <p>Player Name : ${player_name}</p>
    <p>Team: ${team_name}</p>
    <p>Goals:${player_goals}</p>
    <p>Assists: ${player_assists}</p>
    <p> Player Type: ${player_type}</p> 
    `
    const displayResults = document.getElementById('display-results')
    displayResults.innerHTML = htmlOutput 
  }
function loopArray(data){
  length
}

const API_URL = 'https://apiv3.apifootball.com/?action=get_standings&league_id=153&APIkey=d0a198f9a82351d2795da1de28a3b4521eeba3dcb9581b3aa38b8d39c606bc84';

    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        const tableBody = document.querySelector('#standingsTable tbody');

        data.forEach(team => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${team.overall_league_position}</td>
            <td>${team.team_name}</td>
            <td>${team.overall_league_payed}</td>
            <td>${team.overall_league_W}</td>
            <td>${team.overall_league_D}</td>
            <td>${team.overall_league_L}</td>
            <td>${team.overall_league_PTS}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
   
let isRunning = false;
let slideIndex = 1;
showSlides(slideIndex);
      
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
      
function showSlidesmanual(n) {
  let i;
  let slides = document.getElementsByClassName("Slides");
  let dots = document.getElementsByClassName("dot");
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlidesmanual, 10000); 
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
      }

showSlidesmanual();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("Slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); 
}