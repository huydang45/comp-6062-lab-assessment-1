// Create the variables to contain my information
const studentName = "Dang Nguyen Xuan Huy";
const studentNumber = 1161059;
const combineInfo = `${studentName} - ${studentNumber}`;
console.log(combineInfo);
// Change content of h1 heading
const headerContent = document.querySelector("h1");
headerContent.innerHTML = combineInfo;
// Adding header class
headerContent.classList.add("heading1");