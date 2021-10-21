
const todos = [];


// Sirve para esperar que nuestro documento HTML este completamente
// cargado. Si ponemos <script> </script> al inicio del body.
// Se puede utilizar window.onload con <script></script> al final del body
window.onload = () => {
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();//Dejar que nuestra aplicacion se refresque
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';//Borrar el contenido del input cuando se da click en boton Enviar
        todos.push(todoText);

        const listaTodo = document.getElementById('todo-list');
        const todosTemplate = todos.map( t => '<li>' + t + '</li>');

        listaTodo.innerHTML = todosTemplate.join('');
        
    }
}


