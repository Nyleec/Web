const visited = 0;
function opening (){
    if (visited ==0){
        //open cuurtains animation
        }
        else{

        }
    }

function add(x,y){
   return x+y;
}



$(".pop").on("click", function() {
    $('#imagepreview').attr('src', $(this).attr('src')); // here asign the image to the modal when the user click the enlarge link
    $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function

});
