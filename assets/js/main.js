$( document ).ready(function() {
   
// $("#sign-up-form").validate({
//     // rules:{
//     //     username: {
//     //         minlength: 2
//     //     }
//     // },
//     // messages: {
//     //     required: "Obavezno polje!",
//     //     minlength: "Please, at least 2"
//     // },
//     submitHandler: function(form){
//         form.submit(); 
//     }
// })

// MAPS 

var map = $("#maps-col");
var findBtn = $("#find-btn");
var mapsBtn = $("#maps-col .primary-button");
var mapForms = $("#map-form-col");

map.hide();

findBtn.on("click", function(){
map.show(1000);
});

mapsBtn.on("click", function(){
    mapForms.hide(800);
    setTimeout(function() { 
        mapForms.addClass("d-none");
        map.removeClass("col-lg-6");
    }, 799);
   
})




});