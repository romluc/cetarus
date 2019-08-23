const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    // Preventing from having more than one open
    panels.forEach(panel => panel.classList.remove('open'));
    
    this.classList.toggle('open');

}

function toggleActive(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
 
// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));