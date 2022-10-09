const buttonsMode = document.querySelectorAll('#version-js');
const html = document.documentElement;

buttonsMode.forEach(button => button.onclick = e => html.dataset.dark = !html.dataset.dark)