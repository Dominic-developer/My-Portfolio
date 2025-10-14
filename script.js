"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const contacts = document.getElementById('contacts');
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('yourName');
    const emailInput = document.getElementById('yourEmail');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('Submit-btn');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrolIntoView({
                behaviour: 'smooth'
            });
        });
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        let hasError = false;

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        const nameRegex = /^[a-zA-Z0-9]{3,}$/;
        if (!nameRegex.test(name)) {
            nameError.textContent = 'Invalid Username! (At leaast 3 characters and alphanmeric)';
            hasError = true;
            contacts.style.height = '620px';
            contacts.style.margin = '10px auto';
        }

        const emailRegex = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            hasError = true;
            contacts.style.height = '620px';
            contacts.style.margin = '10px auto';
        }

        if(message.length < 5) {
            messageError.textContent = 'Message must be atleast 5 characters long.';
            hasError = true;
            contacts.style.height = '620px';
            contacts.style.margin = '10px auto';
        }

        if (!hasError) {
            alert('Feedback submitted successfully!');
            submitBtn.textContent = 'Submitted';
            submitBtn.innerText = 'Submitted';
            form.submit();
        }
    })
});