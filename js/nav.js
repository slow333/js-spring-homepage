export const nav = document.querySelector('nav');
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
let checkLocation = location.href.includes("/index.html") ? "index" :  location.href.split('/').slice(4,5)+"";

loadNav(navUrl, function(navText) {
   nav.innerHTML = navText;
   let menus = document.querySelectorAll('.nav');
   menus.forEach(function(item) {
      let asideLocation = item.firstElementChild.href+"";
         if(asideLocation.includes(checkLocation)) {
            item.style.backgroundColor = "black";
         }
   })
});

loadNav(footerUrl, function(footerText) {
   footer.outerHTML = footerText;
});