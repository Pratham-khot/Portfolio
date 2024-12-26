const themeToggle=document.getElementById("themeToggler");

function toggleTheme(){
    document.documentElement.classList.toggle("dark");
}



themeToggle.onclick=toggleTheme;