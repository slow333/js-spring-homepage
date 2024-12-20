export const nav = document.querySelector('nav');
export let asideUrl;
const footer = document.querySelector('footer');

let navUrl = "/page/nav.html";
let footerUrl = "/page/footer.html";

function loadNav(url, callback) {
   const xhr = new XMLHttpRequest();

   xhr.open('GET', url, true);
   xhr.responseType = 'text';
   xhr.setRequestHeader('Accept', 'text/plain');
   xhr.send();
   xhr.onload = () => callback(xhr.response);
   xhr.onerror = () => new Error(xhr.responseText);
}
let checkLocation = location.href.includes("/index.html")
   ? "index" :  location.href.split('/').slice(4,5)+"";

loadNav(navUrl, function(navText) {
   nav.innerHTML = navText;
   let menus = document.querySelectorAll('.nav');
   menus.forEach(function(item) {
      let asideLocation = item.firstElementChild.href+"";
         if(asideLocation.includes(checkLocation)) {
            item.style.backgroundColor = "black";
         }
   });
   nav.onclick = function(event) {
      event.preventDefault();
      let target = event.target;
      let url = target.textContent;
      console.log(url);
      switch(url) {
         case "JavaScript":
            asideUrl = "/page/1-js/js-aside.html";
            break;
         case "HTML":
            asideUrl = "/page/2-html-doc/doc-aside.html";
            break;
         case "JAVA":
            asideUrl = "/page/3-java/java-aside.html";
            break;
         case "info":
            asideUrl = "/page/4-info/info-aside.html";
            break;
         default:
            asideUrl = "";
      }
   }
});

loadNav(footerUrl, function(footerText) {
   footer.outerHTML = footerText;
});