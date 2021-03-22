 var clicks = 0;

    function up() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
        console.log((clicks < 5) ? 'keep going!' : 'go back!')
        // clicks > 5 ? console.log("Go back!") : console.log("Keep going!");
    };

 var clicks = 0;
    function down() {
        clicks -= 1;
        document.getElementById("clicks").innerHTML = clicks;
        console.log((clicks < -5) ? 'go back!' : 'keep going!')
        // clicks > -5 ? console.log("Go back!") : console.log("Keep going!");
    };