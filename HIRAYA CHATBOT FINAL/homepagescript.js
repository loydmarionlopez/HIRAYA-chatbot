
var typed = new Typed(".typing", {
    strings: ["CHATBOT", "ACADEMIC ASSISTANT"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["A CHATBOT", "YOUR ACADEMIC ASSISTANT"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const chatBtn = document.getElementById("chatBtn");
chatBtn.addEventListener('click', goToChatPage);

function goToChatPage() {
    window.location.href = 'HomeChatPage.html'
}
