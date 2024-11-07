function calculer() {
   
    var prix1 = parseFloat(document.getElementById("prix1").value) || 0;
    var quantité1 = parseInt(document.getElementById("quantité1").value) || 0;
    var prix2 = parseFloat(document.getElementById("prix2").value) || 0;
    var quantité2 = parseInt(document.getElementById("quantité2").value) || 0;
    var prix3 = parseFloat(document.getElementById("prix3").value) || 0;
    var quantité3 = parseInt(document.getElementById("quantité3").value) || 0;

   
    var res1 = prix1 * quantité1;
    var res2 = prix2 * quantité2;
    var res3 = prix3 * quantité3;

 
    document.getElementById("result1").value = res1.toFixed(2);
    document.getElementById("result2").value = res2.toFixed(2);
    document.getElementById("result3").value = res3.toFixed(2);

  
    var total = res1 + res2 + res3;
    document.getElementById("totalResult").value = total.toFixed(2);
}

function reset() {
   
    location.reload();
}
