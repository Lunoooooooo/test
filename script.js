const browserInfo = {
    platform: navigator.platform,
    userAgent: navigator.userAgent,
    language: navigator.language,
    appVersion: navigator.appVersion
};
localStorage.setItem("systemInfo", JSON.stringify(browserInfo));

const footer = document.getElementById("footerInfo");
const savedInfo = JSON.parse(localStorage.getItem("systemInfo"));
footer.innerText = `OS: ${savedInfo.platform}, Browser: ${savedInfo.userAgent}`;

const commentsContainer = document.getElementById("comments");
const variantNumber = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`)
    .then(response => response.json())
    .then(data => {
        data.forEach(comment => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${comment.name}</strong><p>${comment.body}</p>`;
            commentsContainer.appendChild(div);
        });
    });

setTimeout(() => {
    document.getElementById("modal").style.display = "block";
}, 60000);

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
}

window.onload = () => {
    const hour = new Date().getHours();
    const savedTheme = localStorage.getItem("theme");

    if ((hour >= 7 && hour < 21 && savedTheme !== "dark") || savedTheme === "light") {
        document.body.classList.remove("dark-theme");
    } else {
        document.body.classList.add("dark-theme");
    }
};
