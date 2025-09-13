function compoundInterest(principal, rate, time) {
  let amount = principal * (1 + rate) ** time;
  console.log("Principal Amount: " + principal);
  console.log("Time (years): " + time);
  console.log("Rate of Interest: " + (rate * 100) + "%");
  console.log("Final Amount: " + amount.toFixed(2));
}
compoundInterest(1000, 0.05, 3);