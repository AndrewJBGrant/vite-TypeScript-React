// Not building a component here so .ts not .tsx
// Using modern JS class types

// Constructor function for defining todo objects
class Todo {
id: string;
text: string;

constructor(todoText: string) {
this.text = todoText;
this.id = Math.floor(Math.random() * Date.now()).toString(16);
// this.id = new Date().toISOString();
}

}


export default Todo;
