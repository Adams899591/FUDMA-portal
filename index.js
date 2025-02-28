                    //  fudma student login page index.html
document.getElementById("matric");
document.getElementById("kpassword");
document.getElementById("login");



let matric   = "CSA/2024/899591" ;
let kpassword  = "@@Adams" ;

//                 //  handle student login event 
document.getElementById("login").onclick = function handleLogin (event) {
          // prevent studdent from from refreshing login page 
    event.preventDefault();


  xx =   document.getElementById("matric").value ;
  yy =   document.getElementById("kpassword").value;
  maintenance = false;
                       
                    // MY WORK ON SET_TIME_OUT


  setTimeout(() => {
                         // conditional statement 
         if (xx === matric &&  yy === kpassword  ) {
                // alert(`Login Successful`) ;
           //  window.location.href = "student home page.html"; 
       
                     // if statement to check if it is under maintaiance before login
         if (maintenance === true) {
                 window.location.href = "portal maintenance.html";
       
          }else{
                   alert(`Login Successful`) ; 
                   window.location.href = "student portal.html";
          }  }


        else if(xx  === "" || yy === "")  {
              alert(`Your LOGIN-ID or PASSWORD can not be empty`) ;
        }
       else  {
             alert(`Invalide student ID`)
       }

  }, 1000);

}



document.getElementById("forget-password");

                                            // work on index.html forget-password
        
document.getElementById("forget-password").onclick = function () {
            window.location.href = "Forgot password.html"
     
}





                         // <!-- MY WORK ON SETTING 2G 3G 4G 5G  -->



function checkInternetSpeed() {

      if (navigator.connection) {
           let speed  = navigator.connection.effectiveType;
             
           console.log("current network is : " ,speed);
           
           if (speed === "2g" || speed ===  "slow-2g") {
            //   window.location.href = "index.html"
                   window.location.href = "bad Network.html"
           }
      }
  
 }
                 checkInternetSpeed()
              
    navigator.connection.addEventListener("change", checkInternetSpeed)

                
















