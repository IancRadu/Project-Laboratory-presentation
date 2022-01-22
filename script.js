console.log("kity");
const Http = new XMLHttpRequest();
const url = "http://172.27.224.123/wm01.php";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText);
};
