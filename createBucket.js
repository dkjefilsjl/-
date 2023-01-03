let count = 6;

function inputVisible() {
  document.getElementById("inputId").type = "visible";
}

function createBucket() {
  count++;
  const newDiv = document.createElement("div");
  const value = document.getElementById("inputId").value;
  const newText = document.createTextNode(value);
  newDiv.className = "bucket " + getimageStyle(count) + " center";
  newDiv.id = "b" + count;
  newDiv.appendChild(newText);
  document.getElementById("box").appendChild(newDiv);
  document.getElementById("inputId").type = "hidden";
}

function getimageStyle(count) {
  return count % 4 === 0
    ? "img1"
    : count % 4 === 1
    ? "img1"
    : count % 4 === 2
    ? "img2"
    : "img2";
}

function checkDone(id) {
  const oldName = document.getElementById(id).className;
  document.getElementById(id).className =
    "bucket " +
    getimageStyle(getCount(id)) +
    (oldName.includes("done") ? " center" : " center done");
}

function getCount(id) {
  return Number(id.slice(1));
}
