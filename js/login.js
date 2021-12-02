$(document).ready(function(){
    $('#login').click(function(){
        username = $('#user').val();
        password = $('#pass').val();
        if (username == 'admin' && password == 'admin'){
            location.href = "admin_homepage.html";
        }else{
            location.href = "student.html";
        }
    })
})