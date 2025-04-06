                 //  fudma student login page index.html
document.getElementById("matric");
document.getElementById("kpassword");
document.getElementById("login");



let matric   = "CSA/2024/899591" ;
let kpassword  = "@Adams" ;

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




  
                        //   WORK ON SETTING NETWORK TESTING CODE 
                        
// function CheckTnternetQuality() {

//       let downlink = 0.3;
//       let rtt = 600;
      
//       console.log(`speed: ${downlink }msps,  Latency${rtt}ms `);
      
      
//       if (downlink < 0.5 || rtt > 500) {
//             window.location.href = "bad Network.html"
            
//       }
      
// }
      
//       CheckTnternetQuality()
//       setInterval(CheckTnternetQuality, 3000) 



                                     //   WORK ON SETTING NETWORK MAIN  CODE
function CheckTnternetQuality() {

      let downlink = navigator.connection.downlink;
      let rtt = navigator.connection.rtt;
      

      // alert(`speed: ${downlink }msps,  Latency${rtt}ms `)


      if (downlink <= 0.05 && rtt >= 3000) {

  
            sessionStorage.setItem("badNetwork", "true")

             window.location.href = "bad Network.html"
      }
      
}
      
      CheckTnternetQuality();
     
      setInterval(CheckTnternetQuality, 30000) 

     













