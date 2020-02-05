//Get the button
var mybutton = document.getElementById("btnTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(function () {
    var clicked;

    $('#saveButton').click(function () {
        clicked = $(this).attr("name");
        
        // Stringify the data
        var dataJson = '';
        for (var i = 1; i < v_table.rows().data().length; i++) {
            dataJson = dataJson + JSON.stringify(v_table.rows().data()[i]);
        }

        var urlRequest = "/save_path/" + dataJson

        // Send the data to the server to save
        $.ajax({
            url: urlRequest,
            type: 'POST',
            success: function (response) {
                console.log(response);
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});

console.log("Common Functions imported.");