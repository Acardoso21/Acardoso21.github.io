window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("show") == -1) {
    x.className += " show";
  } else { 
    x.className = x.className.replace(" show", "");
  }
}

$(function(){
    $("#nav-placeholder2").load("../NavBar2.html");
  });

$(function(){
  $("#nav-placeholder").load("NavBar.html");
});

$(function(){
  $("#footer-placeholder").load("FootBar.html");
});
$(function(){
  $("#footer-placeholder2").load("../FootBar.html");
});

// function toggleMode() {
//   let element = document.body;
//   element.classList.toggle("dark-mode");
// }


// const result = window.matchMedia('(prefers-color-scheme: dark)');
// console.log(result.matches); // TRUE if user prefers dark mode


// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
//   const theme = event.matches ? 'dark' : 'light';
//   console.log(`change to ${theme} mode!`);
// });
