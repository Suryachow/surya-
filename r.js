document.getElementById('toggleButton').addEventListener('click', function() {
    var container = document.getElementById('container');
    var text = document.getElementById('text');
    var body = document.body;
   
    // Toggle the 'active' class on the button, container, and body
    this.classList.toggle('active');
    container.classList.toggle('active');
    body.classList.toggle('active');
   
    // Change text content of the button and text
    if (this.classList.contains('active')) {
        this.textContent = 'Click Again!';
        text.textContent = 'It worked!';
    } else {
        this.textContent = 'Click Me!';
        text.textContent = 'Click me to change.';
    }
});
