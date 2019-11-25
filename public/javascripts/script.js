
$(document).on('click', '#burger-submit', function(e) {
    //prevent refresh
    e.preventDefault();

    //assign data to variable
    let burger =  {
        burger: $('#burger-input').val()
    }
    console.log(burger);
    
    if (burger) {
        //post request to server to add burger
        $.ajax('/api/new-burger', {
            method: 'POST',
            data: burger
        }).then(function(data) {
            console.log(data);
            //reload the page
            location.reload();
        });
    }
  
})