// Personal API Key for OpenWeatherMap API
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=';
const apiKey = '4eafbda4626b43a67d3d3610484d19c2';
let today = new Date();   
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// Event listener to add function to existing HTML DOM element

/* Function called by event listener */
document.getElementById('generate').addEventListener('click', performAction);

/* Function to GET Web API Data*/

function performAction(e){
  const zip =  document.getElementById('zip').value; 
  const feelings = document.getElementById('feelings').value;
  
    getTemp(baseURL, zip, apiKey)

    .then((data) => {
        //Add data
        console.log(data);
        postData('/add', { temp: data.main.temp, city: data.name, zip: zip, feelings: feelings, temp_max: data.main.temp_max, temp_min: data.main.temp_min });
      })

    .then(function(){
      updateUI()
    });
}

const updateUI = async () => {
  const request = await fetch ('/all');
  try{
    const projectData = await request.json();
    console.log(projectData);
    const last_entry = projectData.newEntry;
    console.log(last_entry);
    document.getElementById('city').innerHTML = ` ${last_entry.city} ,DE`; 
    document.getElementById('temp').innerHTML = ` ${last_entry.temp}°`;
    document.getElementById('content').innerHTML= `Feeling: ${last_entry.feelings}`;
    document.getElementById('temp-max-min').innerHTML= `Max: ${last_entry.temp_max}°  Min: ${last_entry.temp_min}°`;
    document.getElementById('date').innerHTML= date;
    const card= document.querySelector(".card");
    const entryHolder= document.querySelector(".entryHolder");
    card.classList.add("invisible");
    entryHolder.classList.remove("invisible");
    
  }catch(error){
  }
}
/* Function to POST data */

const postData = async ( url  = '', data = {})=>{
   // console.log(data);
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
      const data = await res.json();
      console.log(data);
      return data;
    }catch(error){
      console.log("error", error);
    }
  }