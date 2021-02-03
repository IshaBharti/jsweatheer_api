



    function myFunction() {
        var city = document.getElementById('mySearch').value;

        document.getElementById("demo").innerHTML = city;
        // console.log(x)  
        fetch(`http://api.weatherapi.com/v1/current.json?key=c64de9b96f1a4bcfbb7103125213101&q=${city}`
        ).then(response => response.json())
            .then(data => {console.log(data)
                var tempValue = data.current.temp_f;
                var statusValue = data.current.condition.text;
                var timeValue = data.current.last_updated;
                var temp_faran =data.current.temp_c;
                var city_name=data.location.name;
                var state_name=data.location.region

                document.getElementById("city_name").innerHTML=" Weather updates of  :"+city_name
                document.getElementById('getTemp').innerHTML ="Temprature F' : " + tempValue
                document.getElementById('getStatus').innerHTML = "Contidion : " + statusValue
                document.getElementById('getTime').innerHTML =  "Last update : " + timeValue
                document.getElementById('getFaran').innerHTML = "Temprature C':"+temp_faran
                
                document.getElementById('state').innerHTML="state :"+state_name


            })

        
          
            .catch(err => alert("Wrong city Name"))
    }
