$( document ).ready(function() {
   
$("#sign-up-form").validate({
    rules:{
        username: {
            minlength: 2
        }
    },
    messages: {
        required: "Obavezno polje!",
        minlength: "Please, at least 2"
    },
    submitHandler: function(form){
        form.submit();
    }
})


function handleSubmit(event) {
//     event.preventDefault();

//     const data = new FormData(event.target);

//     const value = Object.fromEntries(data.entries());

//    value.topics = data.getAll("topics");

//     console.log({ value });

var formData = $("#sign-up-form").serializeObject();
console.log(formData);

  }

  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit());


});