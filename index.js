const apiKey = 'RGAPI-8ac28520-2e56-433a-8381-cbc8dbbf85de';

const apiEndPoint = 'https://euw1.api.riotgames.com/tft/summoner/v1/summoners/by-name/';
const rankEndPoint = 'https://euw1.api.riotgames.com/tft/league/v1/entries/by-summoner/';
const fetchSumData = (name) => {
  fetch(apiEndPoint+name+`?api_key=${apiKey}`).then((response) => response.json()).then((data)=>{
    console.log(data.id);
    fetch(rankEndPoint+data.id+`?api_key=${apiKey}`).then((response) => response.json()).then((data)=>{
      console.log(data);
      $('#ans').text(JSON.stringify(data[0]));
    });
  });
}

function () {
  $('#fetch-sum').on('blur', (e) => {
    fetchSumData(e.target.value);
  });
}
