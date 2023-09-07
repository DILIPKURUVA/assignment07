function add(){
    username1=document.getElementById("username").value;
    password1=document.getElementById("password").value;
    localStorage.setItem('username',username1);
    localStorage.setItem("password",password1);
    window.location="index1.html";
}