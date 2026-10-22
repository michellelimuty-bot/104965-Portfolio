const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

// Toggle the mobile menu and swap the hamburger/close icon
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
});

// Close the menu after tapping a link
navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-xmark');
    });
});
<script>
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const sendBtn = document.getElementById("send-btn");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    sendBtn.disabled = true;
    sendBtn.textContent = "Sending...";

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { Accept: "application/json" }
        });

        if (response.ok) {
            status.textContent = "✅ Message sent! Thank you, I'll get back to you soon.";
            status.className = "show success";
            form.reset();
        } else {
            throw new Error("Failed");
        }
    } catch (err) {
        status.textContent = "❌ Something went wrong. Please try again.";
        status.className = "show error";
    }

    sendBtn.disabled = false;
    sendBtn.textContent = "Send Message";

    setTimeout(() => status.classList.remove("show"), 6000);
});
</script>