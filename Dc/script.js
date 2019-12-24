    var currentNavBarId = "dataAnalyst-navBar";//no i18n
    var currentSubNavId = "";
    var email;
    jQuery(document).ready(function (e) {
        email = localStorage.getItem("userEmail");//no i18n
        if(email == null){
            window.location = "scrapyLogin.jsp";
        }
    });


    function navigateRootPage(navEle, hasSubEle,fileName) {
        var c = navEle.id;
        if (currentNavBarId != c) {
            $("#" + currentNavBarId).removeClass("active");
            currentNavBarId = c;
            $("#" + currentNavBarId).addClass("active");
            if (currentSubNavId != "" && !hasSubEle) {
                $("#" + currentSubNavId).removeClass("active");
                currentSubNavId = "";
            }
            if(fileName!=undefined){
                $('#panel-body').load(fileName);
            }
        }
        updateHeading();
    }

    /* function closePopUpPage() {
         var myNode = document.getElementById("inner-popup-page");
         while (myNode.firstChild) {
             myNode.removeChild(myNode.firstChild);
         }
         document.getElementById("popup-page").style.display="none";
     }
     function closeSecPopUpPage() {
         var myNode = document.getElementById("inner-popup-sec");

         while (myNode.firstChild) {
             myNode.removeChild(myNode.firstChild);
         }
         document.getElementById("popup-sec").style.display="none";
         document.getElementById("popup-page").style.pointerEvents = "auto";
         document.getElementById("popup-page").style.WebkitFilter = 'blur(0px)';
         document.getElementById("popup-page").style.filter= 'blur(0px)';
     }*/
    /*   function navigateSubPage(subEle,fileName) {
           var c = subEle.id;

           if (currentSubNavId != c) {
               $("#" + currentSubNavId).removeClass("active");
               currentSubNavId = c;
               $("#" + currentSubNavId).addClass("active");
               if(fileName!=undefined){
                   $('#panel-body').load('jsp/'+fileName);
               }
           }
       }*/

    function updateHeading() {
        document.getElementById("panel-heading").innerHTML = document.getElementById(currentNavBarId).innerText;
    }
