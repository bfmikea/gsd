// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request

$('.form-inline').submit(function(event){
    
    // Stop form from submitting normally
  event.preventDefault();

  $('.alert-coming-soon').append(`
  <div class="margin-top-20 alert alert-warning alert-dismissible pop-in" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>!</strong> Hemos recibido su correo. Le avisaremos cuando hagamos el lanzamiento.</div>
  `);
  
  $.ajax('phpmailer/index-config.php',{
      type:'POST', 
      dataType:'json',
      data:{
          'email':$('#email').val()
        }
}).then(function( msg ) {
    console.log( msg );
    
  });

})



 
  