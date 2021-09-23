const holder_containers = document.querySelectorAll('.holder_container');
const items = document.querySelectorAll('.item');
const set_function = (fun) => setTimeout(fun, 0);
const item_template = document.createElement('div');
item_template.innerHTML = 'Перетащи меня 1';
item_template.classList.add("item");
item_template.setAttribute('draggable', 'true');
let item_counter = 3;
let item_counter_max = 6;

for (let item of items) {
    item.addEventListener('dragstart', dragstart);
    item.addEventListener('dragend', dragend);
}

for (const holder_container of holder_containers) {
    holder_container.addEventListener('dragover', dragover);
    holder_container.addEventListener('dragenter', dragenter);
    holder_container.addEventListener('dragleave', dragleave);
    holder_container.addEventListener('drop', drop);
}

let dragable_temp_item;

function dragstart(event) {
    console.log('dragstart');
    console.log(event.target);

    event.target.classList.add('hold');
    // set_function(() => event.target.classList.add('hide'));
    dragable_temp_item = event.target;
    set_function(()=>event.target);
}

function dragend(event) {
    console.log('dragend');
    console.log(event.target);

    event.target.classList.remove('hover');
    event.target.classList.remove('hold');
}

function dragover(event) {
    console.log('dragover');

    event.preventDefault();
}

function dragenter(event) {
    console.log('dragenter');
    console.log(event.target);

    if(event.target.classList.contains('holder_container')){
        event.target.classList.add('hover');
    };
}

function dragleave(event) {
    console.log('dragleave');
    console.log(event.target);

    if(event.target.classList.contains('holder_container')){
        event.target.classList.remove('hover');
    };
}

function drop(event) {
    console.log('drop');
    console.log(event.target);

    event.preventDefault();
    if(event.target.classList.contains('holder_container')){
        event.target.classList.remove('hover');
        event.target.appendChild(dragable_temp_item);
    };
    
}