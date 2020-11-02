type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

// Readonly
const todo: Readonly<Todo> = {
  title: "Assistir Dark de novo",
  description: "Relembrar os detalhes",
  completed: false,
};

console.log(todo);

// todo.completed = true; // faz uma mutação do objeto

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) { // O Partial permite que sejam utilidas somente algumas propriedades do tipo sem que seja necessário coloca-las como opcionais
  return {
    ...todo, 
    ...fieldsToUpdate,
  }
};

const todo2: Todo = updateTodo(todo, {completed: true})
console.log(todo2);

// Pick
type TodoPreview = Pick<Todo, "title" | "completed">;

const todo3: TodoPreview = {
  title: "Fechar Ghost of Tsushima", 
  completed: false,
};

// Omit
type TodoPreview2 = Omit<Todo, "description">;

const todo4: TodoPreview2 = {
  title: "Fechar Ghost of Tsushima", 
  completed: false,
}
