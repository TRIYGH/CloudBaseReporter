$(document).ready(function() {
    $('#tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
        $('#tabs ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        // Change tab coloration to whatever it wasn't
        var switchBack = document.getElementById("firstSwitch").style.color;
        if (switchBack == "black")
            {document.getElementById("firstSwitch").style = "background-color:#gray; color:ghostwhite;"}
            else
            {document.getElementById("firstSwitch").style = "background-color:#ccc; color:#333;"}
        e.preventDefault();
    });
});
