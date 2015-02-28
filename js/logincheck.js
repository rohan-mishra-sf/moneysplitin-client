 var isLoaded = false;
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1592690444299818', // App ID
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });
    isLoaded = true;

    // Additional initialization code here
  };

  function checkIfLoaded() {
    if(isLoaded) console.log("LOADED!");
    else console.log("NOT YET!");

    return false;
  }

  // Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));
checkIfLoaded();
