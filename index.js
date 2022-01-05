



    function myFunction() {
        var city = document.getElementById('mySearch').value;

        document.getElementById("demo").innerHTML = city;
        // console.log(x)  
        fetch(`https://api.weatherapi.com/v1/current.json?key=bbd6eca869da4dfda12132512220501&q=${city}`
        ).then(response => response.json())
            .then(data => {console.log(data)
                var tempValue = data.current.temp_f;
                var statusValue = data.current.condition.text;
                var timeValue = data.current.last_updated;
                var temp_faran =data.current.temp_c;
                var city_name=data.location.name;
                var state_name=data.location.region

                document.getElementById("city_name").innerHTML=" Weather updates of  :"+city_name
                document.getElementById('getTemp').innerHTML ="Temperature F' : " + tempValue
                document.getElementById('getStatus').innerHTML = "Condition : " + statusValue
                document.getElementById('getTime').innerHTML =  "Last update : " + timeValue
                document.getElementById('getFaran').innerHTML = "Temperature C':"+temp_faran
                
                document.getElementById('state').innerHTML="State :"+state_name


            })

        
          
            .catch(err => alert("Wrong city Name"))
    }
