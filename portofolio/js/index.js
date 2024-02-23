function ChangeColor(button){
    var body = document.body;
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        button.innerText = 'Light';
    } else {
        button.innerText = 'Dark';
    }
}