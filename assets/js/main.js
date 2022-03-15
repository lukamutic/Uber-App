$( document ).ready(function() {
   
$("#sign-up-form").validate({
    // rules:{
    //     username: {
    //         minlength: 2
    //     }
    // },
    // messages: {
    //     required: "Obavezno polje!",
    //     minlength: "Please, at least 2"
    // },
    submitHandler: function(form){
        form.submit(); 
    }
})



});