// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed


$('#exampleModal').on('show.bs.modal', function (event) {

    var name = document.getElementById("name").value; // Extract info from data-* attributes
    var message = document.getElementById("message").value;
    var mail = document.getElementById("email").value;
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find('.first-name input').val(name);
    modal.find('.mail input').val(mail);
    modal.find('.message textarea').val(message)
})
$("#navbar a").on('click', function(event) {
  
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
  
      // Prevent default anchor click behavior
      event.preventDefault();
  
      // Store hash
      var hash = this.hash;
  
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
  
      // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
  
    } // End if
  
  });