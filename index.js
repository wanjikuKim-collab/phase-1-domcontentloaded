// Your code goes here



const paragraph = document.querySelector( 'p' )
//The DOMContentLoaded event is the browser's built-in way to indicate when a page's html is loaded into the DOM.
document.addEventListener('DOMContentLoaded', function(){
    let p = document.getElementById('text');
    p.textContent = 'This is really cool!'
})