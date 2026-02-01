function emailsend() {
    alert("Thank you for contacting us! We will get back to you shortly.");
}
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    emailsend();
});