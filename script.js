function data()
{
let rows="";
let firstname=document.getElementById("one").value;
let lastname=document.getElementById("two").value;
let address=document.getElementById("three").value;
let pincode=document.getElementById("four").value;
let gender=document.getElementById("gender").value;
let food=document.getElementById("five").value;
let state=document.getElementById("six").value;
let country=document.getElementById("seven").value;
 rows+="<tr><td>"+firstname+"</td><td>"+lastname+"</td><td>"+address+"</td><td>"+pincode+"</td><td>"+gender+"</td><td>"+food+"</td><td>"+state+"</td><td>"+country+"</td></tr>";
 $(rows).appendTo("#list tbody");
  return false;
}

