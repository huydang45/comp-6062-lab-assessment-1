const studentName = "Dang Nguyen Xuan Huy";
const studentNumber = 1161059;
const combineInfo = `${studentName} - ${studentNumber}`;
console.log(combineInfo);

const headerContent = document.querySelector("h1");
headerContent.innerHTML = combineInfo;

headerContent.classList.add("heading1");