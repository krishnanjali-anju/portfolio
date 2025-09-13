let distance = 19.5;
let fare = 0;
if (distance <= 4) {
    fare = 30;
}
else if (distance <= 9) {
    fare = 30 + (distance - 4) * 10;
}
else if (distance <= 19) {
    fare = 30 + (5 * 10) + (distance - 9) * 15;
}

else {
    fare = 30 + (5 * 10) + (10 * 15) + (distance - 19) * 20;
}
console.log("You travelled " + distance + " km");
console.log("Your total fare is ₹" + fare);

	
