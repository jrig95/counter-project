 let counter = 0;
 const clicker = document.querySelector("#clicker");
const buttonUp = document.querySelector("#up");
const buttonDown = document.querySelector("#down");


if (buttonUp != null) {
	buttonUp.addEventListener("click", () => {
		counter++;
		clicker.innerHTML = counter;
		counter > 5 ? console.log("go back!") : console.log("keep going!");
	})
}


if (buttonDown != null) {
	buttonDown.addEventListener("click", () => {
		counter--;
		clicker.innerHTML = counter;
		
		counter < -5 ? console.log("go back!") : console.log("keep going!")
	})
}


    // function up() {
    //     counter += 1;
    //     document.getElementById("clicker").innerHTML = counter;
    //     console.log((counter < 5) ? 'keep going!' : 'go back!')
    //     // clicks > 5 ? console.log("Go back!") : console.log("Keep going!");
    // };

    // function down() {
    //     counter -= 1;
    //     document.getElementById("clicker").innerHTML = counter;
    //     console.log((counter < -5) ? 'go back!' : 'keep going!')
    //     // clicks > -5 ? console.log("Go back!") : console.log("Keep going!");
    // };