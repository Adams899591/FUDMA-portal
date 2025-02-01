document.getElementById("Course-Registration");
document.getElementById("Course-Registration-droupdown");
const MyResultGrade = document.getElementById("My-Result-Grade");
const MyResultGradedroupdown = document.getElementById("My-Result-Grade-droupdown");
const MyExzamCard = document.getElementById("My-Exzam-Card");
const MyExzamCarddroupdown = document.getElementById("My-Exzam-Card-droupdown");
const MyPersonData =  document.getElementById("My-Person-Data");
const MyPersonDatadroupdown =  document.getElementById("My-Person-Data-droupdown");
const SchoolFeesCharges = document.getElementById("School-Fees-Charges");
const SchoolFeesChargesbutton = document.getElementById("School-Fees-Charges-button");
const MyProgram = document.getElementById("My-Program");
const MyProgramdroupdown = document.getElementById("My-Program-droupdown");
const Security = document.getElementById("Security") ;
const Securitydroupdown = document.getElementById("Security-droupdown");



document.getElementById("Course-Registration").onclick = function () {
     if (document.getElementById("Course-Registration-droupdown").style.display === "block") {
         document.getElementById("Course-Registration-droupdown").style.display = "none";
     } else {
         document.getElementById("Course-Registration-droupdown").style.display = "block" ;
     }
    
}                                                     
                                    // my new work that has to do with hidden on this html page
                                                   //  Start the hidden works 

                         // my work on Course-For-This-Semester
                         document.getElementById("Register-Course-For-This-Semester");
                         document.getElementById("Login-Register-Course-For-This-Semester");
                         document.getElementById("box");

                                                    document.getElementById("Register-Course-For-This-Semester").onclick = function () {
                                                    AAA = document.getElementById("Login-Register-Course-For-This-Semester").innerHTML;
                                                     document.getElementById("box").innerHTML = AAA
                                             
                                                    }
                           //  my work on Spill-Over-Course-Registration
                           document.getElementById("Spill-Over-Course-Registration");
                           document.getElementById("LOGIN-Spill-Over-Course-Registration");
                           document.getElementById("box");

                                             document.getElementById("Spill-Over-Course-Registration").onclick = function () {
                                             BBB =   document.getElementById("LOGIN-Spill-Over-Course-Registration").innerHTML;
                                             document.getElementById("box").innerHTML = BBB 
                                         
                                             }
                             //  my work on View-Corrent-Semester-Registration
                            document.getElementById("View-Corrent-Semester-Registration");
                            document.getElementById("FIRST-Login-View-Corrent-Semester-Registration");
                            document.getElementById("box");
                            document.getElementById("Details-Login-View-Corrent-Semester-Registration");

                                              document.getElementById("View-Corrent-Semester-Registration").onclick = function () {
                                               let   FIRSTCCCC  = document.getElementById("FIRST-Login-View-Corrent-Semester-Registration").innerHTML;
                                               document.getElementById("box").innerHTML =  FIRSTCCCC;

                                                      //DISPLAY =============================================    
                                                         document.getElementById("Details-Login-View-Corrent-Semester-Registration").onclick = function () {
                                                            // my work on page LOADIND
                                                              LOADING =  document.getElementById("Loading").innerHTML;
                                                              document.getElementById("box").innerHTML  =  LOADING
                                                        setTimeout(() => {
                                                         FIRSTCCCCdisplay1 =   document.getElementById("Login-View-Corrent-Semester-Registration").innerHTML;
                                                         document.getElementById("box").innerHTML =  FIRSTCCCCdisplay1;
                                                        }, 2000);
                                                          }
                                                                                                       
                                           }

                

                                                 
                                                 
                  
                                                   

                           // my work on View Previoue Registration
                           document.getElementById("View-Previoue-Registration");
                           document.getElementById("LOGIN-View-Previoue-Registration");
                           document.getElementById("box");
                           // sub
                           document.getElementById("LOGIN-View-Previous-Registration-DISPLAY-1");
                           document.getElementById("First-Semester-100L-Courses-Registered");
                           document.getElementById("LOGIN-View-Previous-Registration-DISPLAY-2");
                           document.getElementById("Second-Semester-100L-Courses-Registered")
                           document.getElementById("LOGIN-View-Previous-Registration-DISPLAY-3");
                           document.getElementById("First-Semester-200L-Courses-Registered");
                           document.getElementById("LOGIN-View-Previous-Registration-DISPLAY-4");
                           document.getElementById("Second-Semester-200L-Courses-Registered");
                           document.getElementById("LOGIN-View-Previous-Registration-DISPLAY-5");
                           document.getElementById("First-Semester-300L-Courses-Registered");
                           document.getElementById("LOGIN-View-Previous-Registration-DISPLAY-6");
                           document.getElementById("Second-Semester-300L-Courses-Registered");



                                                              document.getElementById("View-Previoue-Registration").onclick = function () {
                                                              let  DDD    =  document.getElementById("LOGIN-View-Previoue-Registration").innerHTML;
                                                              document.getElementById("box").innerHTML = DDD;

                                                                   //DISPLAY =============================================  
                                                                         document.getElementById("LOGIN-View-Previous-Registration-DISPLAY-1").onclick = function () {
                                                                           LOADING =  document.getElementById("Loading").innerHTML;
                                                                           document.getElementById("box").innerHTML  =  LOADING

                                                                              setTimeout(() => {
                                                                                 Registered1 = document.getElementById("First-Semester-100L-Courses-Registered").innerHTML;
                                                                                 document.getElementById("box").innerHTML =  Registered1
                                                                              }, 2000);
                                                                         }
                                                                     //DISPLAY ============================================= 
                                                                         document.getElementById("LOGIN-View-Previous-Registration-DISPLAY-2").onclick = function () {
                                                                           LOADING =  document.getElementById("Loading").innerHTML;
                                                                           document.getElementById("box").innerHTML  =  LOADING

                                                                         setTimeout(() => {
                                                                           Registered2 = document.getElementById("Second-Semester-100L-Courses-Registered").innerHTML;
                                                                           document.getElementById("box").innerHTML =  Registered2
                                                                         }, 2000);
                                                                         }

                                                                     //DISPLAY ============================================= 
                                                                         document.getElementById("LOGIN-View-Previous-Registration-DISPLAY-3").onclick = function () {
                                                                           LOADING =  document.getElementById("Loading").innerHTML;
                                                                           document.getElementById("box").innerHTML  =  LOADING
                                                                         
                                                                           setTimeout(() => {
                                                                              Registered3 =  document.getElementById("First-Semester-200L-Courses-Registered").innerHTML;
                                                                              document.getElementById("box").innerHTML =  Registered3
                                                                           }, 2000);
                                                                         }

                                                                     //DISPLAY ============================================= 
                                                                     document.getElementById("LOGIN-View-Previous-Registration-DISPLAY-4").onclick = function () {
                                                                        LOADING =  document.getElementById("Loading").innerHTML;
                                                                        document.getElementById("box").innerHTML  =  LOADING

                                                                      setTimeout(() => {
                                                                        Registered4 = document.getElementById("Second-Semester-200L-Courses-Registered").innerHTML;
                                                                        document.getElementById("box").innerHTML =  Registered4
                                                                      }, 2000);
                                                                     }

                                                                     //DISPLAY ============================================= 
                                                                     document.getElementById("LOGIN-View-Previous-Registration-DISPLAY-5").onclick = function () {
                                                                        LOADING =  document.getElementById("Loading").innerHTML;
                                                                        document.getElementById("box").innerHTML  =  LOADING
                                                                     
                                                                        setTimeout(() => {
                                                                           Registered5 = document.getElementById("First-Semester-300L-Courses-Registered").innerHTML;
                                                                           document.getElementById("box").innerHTML =  Registered5
                                                                        }, 2000);

                                                                        
                                                                     }
                                                                   //DISPLAY =============================================
                                                                     document.getElementById("LOGIN-View-Previous-Registration-DISPLAY-6").onclick = function () {
                                                                        LOADING =  document.getElementById("Loading").innerHTML;
                                                                        document.getElementById("box").innerHTML  =  LOADING

                                                                     setTimeout(() => {
                                                                        Registered6 = document.getElementById("Second-Semester-300L-Courses-Registered").innerHTML;
                                                                        document.getElementById("box").innerHTML =  Registered6
                                                                     }, 2000);
                                                                        
                                                                  }


                                                
                                                                      
                                                               }


                                             

MyResultGrade.onclick = function () {
  
   if(MyResultGradedroupdown.style.display === "block") {
      MyResultGradedroupdown.style.display = "none" ;
   } else {
      MyResultGradedroupdown.style.display = "block" ;
   }
   
}
                  //   my work on senate approve result
                  document.getElementById("Senate-Approve-Result"); 
                  document.getElementById("LOGIN-Senate-Approve-Result");

                  // sub
                  document.getElementById("LOGIN-View-DETAILS-Senate-Approved-Results-DISPLAY-1");
                  document.getElementById("First-Semester-100L-Approve-Result-Details");
                  document.getElementById("LOGIN-View-DETAILS-Senate-Approved-Results-DISPLAY-2");
                  document.getElementById("Second-Semester-100L-Approve-Result-Details");
                  document.getElementById("LOGIN-View-DETAILS-Senate-Approved-Results-DISPLAY-3");
                  document.getElementById("First-Semester-200L-Approve-Result-Details");
                  document.getElementById("LOGIN-View-DETAILS-Senate-Approved-Results-DISPLAY-4");
                  document.getElementById("Second-Semester-200L-Approve-Result-Details");
                                        
                                                                document.getElementById("Senate-Approve-Result").onclick = function (){
                                                                 EEE  = document.getElementById("LOGIN-Senate-Approve-Result").innerHTML ;
                                                                 document.getElementById("box").innerHTML = EEE;


                                                                    //DISPLAY ============================================= 
                                                                     document.getElementById("LOGIN-View-DETAILS-Senate-Approved-Results-DISPLAY-1").onclick = function () {
                                                                        LOADING =  document.getElementById("Loading").innerHTML;
                                                                        document.getElementById("box").innerHTML  =  LOADING

                                                                      setTimeout(() => {
                                                                        Result1  =  document.getElementById("First-Semester-100L-Approve-Result-Details").innerHTML;
                                                                        document.getElementById("box").innerHTML = Result1;
                                                                      }, 2000);
                                                                        }

                                                                     //DISPLAY ============================================= 
                                                                        document.getElementById("LOGIN-View-DETAILS-Senate-Approved-Results-DISPLAY-2").onclick = function () {
                                                                           LOADING =  document.getElementById("Loading").innerHTML;
                                                                           document.getElementById("box").innerHTML  =  LOADING

                                                                           setTimeout(() => {
                                                                              Result2 =   document.getElementById("Second-Semester-100L-Approve-Result-Details").innerHTML;
                                                                              document.getElementById("box").innerHTML = Result2;
                                                                           }, 2000);
                                                                        }
                                                                     //DISPLAY ============================================= 
                                                                        document.getElementById("LOGIN-View-DETAILS-Senate-Approved-Results-DISPLAY-3").onclick = function () {
                                                                           LOADING =  document.getElementById("Loading").innerHTML;
                                                                           document.getElementById("box").innerHTML  =  LOADING

                                                                        setTimeout(() => {
                                                                           Result3 = document.getElementById("First-Semester-200L-Approve-Result-Details").innerHTML;
                                                                           document.getElementById("box").innerHTML = Result3;
                                                                        }, 2000);

                                                                        }
                                                                      //DISPLAY ============================================= 
                                                                           document.getElementById("LOGIN-View-DETAILS-Senate-Approved-Results-DISPLAY-4").onclick = function () {
                                                                              LOADING =  document.getElementById("Loading").innerHTML;
                                                                              document.getElementById("box").innerHTML  =  LOADING

                                                                             setTimeout(() => {
                                                                              Result4 =  document.getElementById("Second-Semester-200L-Approve-Result-Details").innerHTML;
                                                                              document.getElementById("box").innerHTML = Result4;
                                                                             }, 2000);
                                                                           }
                                                                        
                                                                         //DISPLAY =============================================
                                                                         document.getElementById("LOGIN-View-DETAILS-Senate-Approved-Results-DISPLAY-5").onclick = function () {
                                                                           LOADING =  document.getElementById("Loading").innerHTML;
                                                                           document.getElementById("box").innerHTML  =  LOADING

                                                                           setTimeout(() => {
                                                                              Result5 =  document.getElementById("First-Semester-300L-Approve-Result-Details").innerHTML;
                                                                              document.getElementById("box").innerHTML = Result5;
                                                                           }, 2000);
                                                                         }
                                                                       //DISPLAY =============================================
                                                                             document.getElementById("LOGIN-View-DETAILS-Senate-Approved-Results-DISPLAY-6").onclick = function () {
                                                                              LOADING =  document.getElementById("Loading").innerHTML;
                                                                              document.getElementById("box").innerHTML  =  LOADING
                                                                              
                                                                               setTimeout(() => {
                                                                                 Result6 =   document.getElementById("Second-Semester-300L-Approve-Result-Details").innerHTML;
                                                                                 document.getElementById("box").innerHTML = Result6;
                                                                               }, 2000);
                                                                             }
                                              
                                             




                                                                  }



























                                          





MyExzamCard.onclick = function () {
   if ( MyExzamCarddroupdown.style.display === "block") {
      MyExzamCarddroupdown.style.display = "none";
   } else {
      MyExzamCarddroupdown.style.display = "block"; 
   }
   
} 
                                 
                                  MyExzamCarddroupdown.onclick = function () {
                                   FFF = MyExzamCarddroupdown.textContent = "Exam Card Not Avaiable";
                                    FFF = MyExzamCarddroupdown.style.color = "red" ;
                                    
                                  }


MyPersonData.onclick = function () {
   if (MyPersonDatadroupdown.style.display === "block") {
      MyPersonDatadroupdown.style.display = "none";
   } else {
      MyPersonDatadroupdown.style.display = "block"
   }
   
}

SchoolFeesCharges.onclick = function () {
   if (SchoolFeesChargesbutton.style.display === "block") {
      SchoolFeesChargesbutton.style.display = "none"
   } else {
      SchoolFeesChargesbutton.style.display = "block"
   }
}

MyProgram.onclick = function () {
   if (MyProgramdroupdown.style.display === "block") {
      MyProgramdroupdown.style.display = "none"
   } else {
      MyProgramdroupdown.style.display = "block"
      
   }
   
}
                                  // my work on My-Program-droupdown
                                    document.getElementById("Course-Outline");
                                    document.getElementById("LOGIN-Course-Outline");
                                    document.getElementById("box");
                                    // sub
                                    document.getElementById("LOGIN-Course-Outline-DISPLAY-1");
                                    document.getElementById("First-Semester-100L-Courses");
                                    document.getElementById("LOGIN-Course-Outline-DISPLAY-2");
                                    document.getElementById("Second-Semester-100L-Courses");
                                    document.getElementById("LOGIN-Course-Outline-DISPLAY-3");
                                    document.getElementById("First-Semester-200L-Courses");
                                    document.getElementById("LOGIN-Course-Outline-DISPLAY-4");
                                    document.getElementById("Second-Semester-200L-Courses");
                                    document.getElementById("LOGIN-Course-Outline-DISPLAY-5");
                                    document.getElementById("First-Semester-300L-Courses");
                                    document.getElementById("LOGIN-Course-Outline-DISPLAY-6");
                                    document.getElementById("Second-Semester-300L-Courses");
                                    document.getElementById("LOGIN-Course-Outline-DISPLAY-7");
                                    document.getElementById("First-Semester-400L-Courses");
                                    document.getElementById("LOGIN-Course-Outline-DISPLAY-8");

                                                                         document.getElementById("Course-Outline").onclick = function () {
                                                                          LLL = document.getElementById("LOGIN-Course-Outline").innerHTML;
                                                                          document.getElementById("box").innerHTML = LLL ;

                                                                                      //   DISPLAY===================================================
                                                                                       document.getElementById("LOGIN-Course-Outline-DISPLAY-1").onclick = function () {
                                                                                             // my work on page LOADING
                                                                                             LOADING =  document.getElementById("Loading").innerHTML;
                                                                                             document.getElementById("box").innerHTML  =  LOADING

                                                                                          setTimeout(() => {
                                                                                             Display1 =   document.getElementById("First-Semester-100L-Courses").innerHTML ;
                                                                                             document.getElementById("box").innerHTML = Display1;
                                                                                          }, 2000);
                                                                                       }

                                                                                         //   DISPLAY===================================================
                                                                                         document.getElementById("LOGIN-Course-Outline-DISPLAY-2").onclick = function () {
                                                                                             // my work on page LOADING
                                                                                             LOADING =  document.getElementById("Loading").innerHTML;
                                                                                             document.getElementById("box").innerHTML  =  LOADING
                                                                                        
                                                                                          setTimeout(() => {
                                                                                             Display2 = document.getElementById("Second-Semester-100L-Courses").innerHTML;
                                                                                             document.getElementById("box").innerHTML = Display2;
                                                                                          }, 2000);
                                                                                       }

                                                                                          //   DISPLAY===================================================
                                                                                          document.getElementById("LOGIN-Course-Outline-DISPLAY-3").onclick = function () { 
                                                                                                // my work on page LOADING
                                                                                                LOADING =  document.getElementById("Loading").innerHTML;
                                                                                                document.getElementById("box").innerHTML  =  LOADING

                                                                                             setTimeout(() => {
                                                                                                Display3 = document.getElementById("First-Semester-200L-Courses").innerHTML;
                                                                                                document.getElementById("box").innerHTML = Display3;
                                                                                             }, 2000); 
                                                                                       }

                                                                                           //   DISPLAY===================================================
                                                                                           document.getElementById("LOGIN-Course-Outline-DISPLAY-4").onclick = function () {
                                                                                                // my work on page LOADING
                                                                                                LOADING =  document.getElementById("Loading").innerHTML;
                                                                                                document.getElementById("box").innerHTML  =  LOADING

                                                                                           setTimeout(() => {
                                                                                             Display4 = document.getElementById("Second-Semester-200L-Courses").innerHTML;
                                                                                             document.getElementById("box").innerHTML = Display4;
                                                                                           }, 2000);
                                                                                       }

                                                                                         //   DISPLAY===================================================
                                                                                          document.getElementById("LOGIN-Course-Outline-DISPLAY-5").onclick = function () {
                                                                                                // my work on page LOADING
                                                                                                LOADING =  document.getElementById("Loading").innerHTML;
                                                                                                document.getElementById("box").innerHTML  =  LOADING
                                                                                           setTimeout(() => {
                                                                                            Display5 =  document.getElementById("First-Semester-300L-Courses").innerHTML;
                                                                                            document.getElementById("box").innerHTML = Display5;

                                                                                           }, 2000);
                                                                                        }

                                                                                         //   DISPLAY===================================================
                                                                                        document.getElementById("LOGIN-Course-Outline-DISPLAY-6").onclick = function () {
                                                                                             // my work on page LOADING
                                                                                             LOADING =  document.getElementById("Loading").innerHTML;
                                                                                             document.getElementById("box").innerHTML  =  LOADING

                                                                                          setTimeout(() => {
                                                                                             Display6 = document.getElementById("Second-Semester-300L-Courses").innerHTML;
                                                                                             document.getElementById("box").innerHTML = Display6;                                                         
                                                                                          }, 2000);

                                                                                        }

                                                                                         //   DISPLAY===================================================
                                                                                        document.getElementById("LOGIN-Course-Outline-DISPLAY-7").onclick = function () {
                                                                                         
                                                                                               // my work on page LOADING
                                                                                               LOADING =  document.getElementById("Loading").innerHTML;
                                                                                                document.getElementById("box").innerHTML  =  LOADING

                                                                                          setTimeout(() => {
                                                                                             Display7  = document.getElementById("First-Semester-400L-Courses").innerHTML;
                                                                                             document.getElementById("box").innerHTML = Display7;
                                                                                          }, 2000);
                                                                                        }

                                                                                          //   DISPLAY===================================================
                                                                                        document.getElementById("LOGIN-Course-Outline-DISPLAY-8").onclick = function () {
                                                                                               // my work on page LOADING
                                                                                                LOADING =  document.getElementById("Loading").innerHTML ;
                                                                                                document.getElementById("box").innerHTML  =  LOADING

                                                                                           setTimeout(() => {
                                                                                             Display8  = document.getElementById("Second-Semester-400L-Courses").innerHTML;
                                                                                             document.getElementById("box").innerHTML = Display8;
                                                                                       
                                                                                          }, 2000);                                                                                      
                                                                                          
                                                                                        }

                                                                          }
                                 

Security.onclick = function () {
   if (Securitydroupdown.style.display === "block") {
      Securitydroupdown.style.display = "none"
   } else {
      Securitydroupdown.style.display = "block"
   }
   
 }
                      const UpdatePassword = document.getElementById("UpdatePassword");
                       UpdatePassword.onclick = function () {
                        // my work on page LOADING
                        LOADING =  document.getElementById("Loading").innerHTML;
                        document.getElementById("box").innerHTML  =  LOADING
                       setTimeout(() => {
                        alert("Click OK to Proceed")
                        window.location.href = "change password.html"
                       },2000);
                       }  










                     //   dtatnnbnvxgokmbx
                  const checkbox =  document.getElementById("mycheckbox");
                  if (localStorage.getItem(`checkboxClicked`) === `true`) {
                     checkbox.checked = `true`;
                  }

                  checkbox.addEventListener(`change`, () => {
                     if (checkbox.checked) {
                        localStorage.setItem(`checkboxClicked`, "true")
                     }
                  });
