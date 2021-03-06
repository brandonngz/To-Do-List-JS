
const todos = JSON.parse(localStorage.getItem('todos'))  || [];

const render = () => {
    const listaTodo = document.getElementById('todo-list');
    const todosTemplate = todos.map( (current, index) => '<li>' +'Task# '+index + ' ' +current + '</li>');//Agrega datos al array todos como <li> </li> entre medio esta nuestro dato del array
    listaTodo.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li');//buscar mediante un id todos los elementos que se encuentren dentro de #todo-list
    elementos.forEach((elemento, i) => {//iterar elementos
        elemento.addEventListener('click', () => {//agregar al elemento un evento
            elemento.parentElement.removeChild(elemento);
            todos.splice(i,1);
            actualizaTodos(todos);
            render();
        })
    })
}


const actualizaTodos = (todos) => {
    const todoString = JSON.stringify(todos);//transforma esto a string
    localStorage.setItem('todos', todoString);
} 

// Sirve para esperar que nuestro documento HTML este completamente
// cargado. Si ponemos <script> </script> al inicio del body.
// Se puede utilizar window.onload con <script></script> al final del body

window.onload = () => {
    render();
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();//Dejar que nuestra aplicacion se refresque
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';//Borrar el contenido del input cuando se da click en boton Enviar
        todos.push(todoText);
        actualizaTodos(todos);
        render();
        
    }
}
