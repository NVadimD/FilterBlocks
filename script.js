const li = Array.from(document.querySelectorAll('.li'));

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', filterColor);
}

const blocks = Array.from(document.querySelectorAll('.block'));

function filterColor(event) {
    for (let i = 0; i < blocks.length; i++) {        
        blocks[i].classList.remove('hide');
    }

    if(event.target.classList.contains('red-text')) {
        for (let i = 0; i < blocks.length; i++) {
            if (!blocks[i].classList.contains('red-text')) {
                blocks[i].classList.add('hide')
            }
        }
    };
    if(event.target.classList.contains('blue-text')) {
        for (let i = 0; i < blocks.length; i++) {
            if (!blocks[i].classList.contains('blue-text')) {
                blocks[i].classList.add('hide')
            }
        }
    };
    if(event.target.classList.contains('yellow-text')) {
        for (let i = 0; i < blocks.length; i++) {
            if (!blocks[i].classList.contains('yellow-text')) {
                blocks[i].classList.add('hide')
            }
        }
    };
    if(event.target.classList.contains('green-text')) {
        for (let i = 0; i < blocks.length; i++) {
            if (!blocks[i].classList.contains('green-text')) {
                blocks[i].classList.add('hide')
            }
        }
    };
}