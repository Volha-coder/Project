// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var email = document.getElementById('email').value;
        $('#exampleModal').on('show.bs.modal', function (event) {
            var modal = $(this);
            modal.find('.first-name input').val(name);
            modal.find('.mail input').val(email);
            modal.find('.message textarea').val(message);
        })

