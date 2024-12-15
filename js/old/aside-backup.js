const navMain = document.querySelector('nav');
const menu = new XMLHttpRequest();

menu.open('GET', "/page/nav.html", true);
menu.responseType = 'text';
menu.setRequestHeader('Accept', 'text/plain');
menu.send();
menu.onload = () => navMain.innerHTML = menu.responseText;

async function load() {
   let selectedId;
   const aside = new XMLHttpRequest();
   aside.open('GET', `/page/aside/${selectedId}-aside.html`, true);
   aside.responseType = 'text';
   aside.send();
   aside.onload = () => {
      let navs = document.querySelectorAll('.nav');
      navs.forEach(nav => {
         nav.addEventListener('click', (e) => {
            e.preventDefault();
            selectedId = e.target.id;
            console.log(selectedId);
         });
      });
      navMain.innerHTML += aside.responseText;

   }
}
