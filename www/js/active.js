$(document).ready(function() {

    /* loading spinner */
    setInterval(function(){
      if ($('html').attr('class')=='shiny-busy') {
        setTimeout(function() {
          if ($('html').attr('class')=='shiny-busy') {
            $('div.busy').show()
          }
        }, 1000)
      } else {
        $('div.busy').hide()
      }
    }, 100)
    
    /* clear file button control */
    var fileControl = $("#file");

    $("#clearFile").on("click", function () {
        
        fileControl.replaceWith( fileControl = fileControl.clone( true ) );
        
        $("#file_progress").hide();
    });
    
    /* file input progress bar control */
    $( "#file" ).change(function() {
      document.getElementById("file_progress").setAttribute('style', "height:20px; margin-top:5px;");
    });    

    /* example file info close button */
    $( "#closeExampleButton" ).on("click", function(){
        $("#exampleInfo").hide();
    });
    
    /* example file info open button */
    $( "#exampleButton" ).on("click", function(){
        $("#exampleInfo").show();
    });
    
    /* advanced options section */
    var advancedOptionsButtonCount = 1;
    document.getElementById("advancedOptionsButton").addEventListener("click", toggleAdvancedOptionsButton);
    
    function toggleAdvancedOptionsButton(e){
        generalToggleButtons("advancedOptionsButton", "Advanced Options", advancedOptionsButtonCount);
        advancedOptionsButtonCount++;
    } 
    
    function generalToggleButtons(messageId, message, count) {
        if(count%2){
            $("#"+messageId).removeClass("fa fa-angle-down").addClass("fa fa-angle-up");
            document.getElementById(messageId).innerHTML = "Hide " + message;
        }
        else{
            $("#"+messageId).removeClass("fa fa-angle-up").addClass("fa fa-angle-down");
            document.getElementById(messageId).innerHTML = "Show " + message;
        }
    }
    
})	