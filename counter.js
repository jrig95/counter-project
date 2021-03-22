 let counter = 0;

    function up() {
        counter += 1;
        document.getElementById("clicker").innerHTML = counter;
        console.log((counter < 5) ? 'keep going!' : 'go back!')
        // clicks > 5 ? console.log("Go back!") : console.log("Keep going!");
    };

    function down() {
        counter -= 1;
        document.getElementById("clicker").innerHTML = counter;
        console.log((counter < -5) ? 'go back!' : 'keep going!')
        // clicks > -5 ? console.log("Go back!") : console.log("Keep going!");
    };