/**
 * Created by john on 25/05/2016.
 */

(function(w) {

    console.log("INIT My Script");

})(window);

/*
document.getElementById("thebutton").addEventListener("click", function(event) {
    console.log("Button clicked ");
    console.log(event);
});
*/

function handler(response) {
    console.log("In handler " + response);

    console.log(response);
    console.log(response.firstname);
//     $("#thediv").innerHTML = "<h2>" + response.firstname + "</h2>";
    $("#thediv").html("<h2>" + response.firstname + "</h2>");

//    document.getElementById("thediv").innerHTML = "<h2>" + response.firstname + "</h2>";
}

$("#thebutton").bind("click", function(event) {
    $ajaxUtils.sendGetRequest("/module-5-solution/data/name.json", handler, true);
    console.log($ajaxUtils);
    console.log("Button clicked ");
    console.log(event);
});