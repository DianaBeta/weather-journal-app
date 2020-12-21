// Personal API Key for OpenWeatherMap API
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?id=524901&appid=';
let apiKey = '4eafbda4626b43a67d3d3610484d19c2';
// Event listener to add function to existing HTML DOM element

/* Function called by event listener */
document.getElementById('generate').addEventListener('click', performAction);

/* Function to GET Web API Data*/

function performAction(e){
  const zip =  document.getElementById('zip').value;
  const temp = document.getElementById('temp').value  
  const feelings = document.getElementById('feelings').value;
  

  getTemp(baseURL, zip, apiKey)

  .then(function(data){
    //Add data
    console.log("DATA " + data)
    postData('/add', { temp: data.list[0].main.temp, zip: zip});
  })

  .then(
    updateUI()
      )
  }

const updateUI = async () => {
  const request = await fetch ('/all');
  try{
    const allData = await request.json();
    document.getElementById('temp').innerHTML = postData[0].temp;
  }catch(error){
  }
}
/* Function to POST data */

const postData = async ( url  = '', data = {})=>{
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
       // Body data type must match "Content-Type" header
        body: JSON.stringify(data),
    });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    } catch(error) {
        console.log(error);
    }
  }


/* Function to GET Project Data */
const getTemp = async (baseURL, zipCode, apiKey)=>{
  const res = await fetch(baseURL+apiKey+'&zip='+zipCode+',de');
  try{
      const data = await res.json()
      console.log(data);
      return data
  }catch(error){
      console.log("error", error);
  }
}
