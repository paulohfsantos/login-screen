$(document).ready(function(){

    $("#submit").click(function(event){
        event.preventDefault()
    })

    $("#dateInput").click(function(){
        var date = document.getElementById("dateInput").value;

        if (date == '' || date == null){
            $("#date").show();
        } else {
            $("#date").hide();
        }

        if(date != 0) {
            $('#submit').prop('disabled', false);
            $('#submit').removeClass('btn-secondary');
        }

    });

    $("#passInput").click(function(){
        var passWord = document.getElementById("passInput").value;

        if (passWord == '' || passWord == null){
            $("#pass").show();
        } else {
            $("#pass").hide();
        }
    });

    $("#emailInput").click(function(){
        var email = document.getElementById("emailInput").value;

        if (email == '' || email == null){
            $("#email").show();
        } else {
            $("#email").hide();
        }         
        
    });

    function onKey(){
        if ($("#emailInput")!= '' || $("#emailInput")!= null) {
            $("#email").hide();
        }
    }    
    addEventListener("keydown", onKey);
    
    function onKeyPass(){
        if ($("#passInput")!= '' || $("#passInput")!= null) {
            $("#pass").hide();
        }
    }    
    addEventListener("keydown", onKeyPass);

});