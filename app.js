// Simple JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    console.log('Azure Static Website Loaded!');
    
    // Add dynamic content
    const section = document.querySelector('section');
    const p = document.createElement('p');
    p.textContent = 'This content was added dynamically with JavaScript!';
    p.style.color = '#667eea';
    p.style.fontWeight = 'bold';
    p.style.marginTop = '1rem';
    section.appendChild(p);
});
