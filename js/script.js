/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        console.log("test")
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var totalScore;

        function question1(q1Result) {
            var points;
            points = q1Result.length;
            return points
        }

        function question2(q2Result) {
            var points;
            points = q2Result.length;
            return points
        }

        function question3(q3Result) {
            var points;
            points = q3Result.length;
            return points
        }

        function question4(q4Result) {
            var points;
            points = q4Result.length;
            return points
        }
        function congrats(name, points) {
            
            alert (name + " " + points) 
        }
        var q1 = question1(q1Result)
        var q2 = question2(q2Result)
        var q3 = question3(q3Result)
        var q4 = question4(q4Result)
      
        totalScore = q1 + q2 + q3 + q4;
        congrats("james", totalScore)
        console.log(totalScore)
    });

});

