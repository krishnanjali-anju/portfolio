function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score > 70) {
    return "B";
  } else if (score > 50) {
    return "C";
  } else if (score >= 40) {
    return "D";
  } else {
    return "Fail";
  }
}
const score = 60;  
console.log("Marks: " + score + ", Grade: " + getGrade(score));

