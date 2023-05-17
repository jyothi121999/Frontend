function validate(){
let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username =='jyothi' && password =='jyothi@123')
    {
    location.assign("/Menu.html");
   }
     else{
    alert('login failed')
     }
    
    }
    function navigate(){
      location.assign("/items.html");
    }
