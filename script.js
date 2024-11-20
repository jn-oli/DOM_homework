// Change Background Color
document.getElementById('btn-change-color').addEventListener('click', () => {
    document.body.style.backgroundColor =
        `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

// Change Text Content
document.getElementById('btn-change-text').addEventListener('click', () => {
    const textElement = document.getElementById('text');
    textElement.textContent = "Thank You!";
});

// Change Font Size
document.getElementById('btn-change-font-size').addEventListener('click', () => {
    const textElement = document.getElementById('text');
    textElement.style.fontSize = "24px";
});

// Hide Text
document.getElementById('btn-hide-text').addEventListener('click', () => {
    const textElement = document.getElementById('text');
    textElement.style.display =
        textElement.style.display === "none" ? "block" : "none";
});

// Change Font Style
document.getElementById('btn-change-font-style').addEventListener('click', () => {
    const textElement = document.getElementById('text');
    textElement.style.fontFamily = "'Courier New', Courier, monospace";
});
