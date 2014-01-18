(function( window ){

    setInterval(function() {
      document.body.style.background = "red";
      setTimeout(function(){
        document.body.style.background = "green";
      }, 750);
    }, 1500);

}( this ));