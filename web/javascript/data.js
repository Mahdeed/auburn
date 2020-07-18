function get(){
    document.getElementById("name").innerHTML=sessionStorage.getItem("name");
    document.getElementById("id").innerHTML=sessionStorage.getItem("id");
    document.getElementById("gender").innerHTML=sessionStorage.getItem("gender");
    document.getElementById("gpa").innerHTML=sessionStorage.getItem("gpa");
    document.getElementById("date").innerHTML=sessionStorage.getItem("date");
    document.getElementById("comments").innerHTML=sessionStorage.getItem("comments");
}