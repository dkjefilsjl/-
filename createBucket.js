let count = 6;

function inputVisible() {
  document.getElementById("inputId").type = "visible";
}

function createBucket() {
  count++;
  const newDiv = document.createElement("div");
  const value = document.getElementById("inputId").value;
  const newText = document.createTextNode(value);
  newDiv.className =
    count % 4 === 0
      ? "bucket img1 center"
      : count % 4 === 1
      ? "bucket img1 center"
      : count % 4 === 2
      ? "bucket img2 center"
      : "bucket img2 center";
  newDiv.appendChild(newText);
  document.getElementById("box").appendChild(newDiv);
  document.getElementById("inputId").type = "hidden";
}
