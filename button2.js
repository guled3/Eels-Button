const content = document.getElementById("content");
const button = document.getElementById('Click')

handleClick = () => {
    if (content.classList.contains('hidden')){
        //make the box disappear
        content.className = "";
        button.innerHTML = "Show More";
    } else {
        //make the box appear
        content.className = "hidden";
        button.innerHTML = "Show Less";
    }
}