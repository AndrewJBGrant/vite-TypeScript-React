// Minimal component where we establish again using
// React.FC<{text: string}> that its a function component and it expects a text type of string

import './TodoItem.css'


const TodoItem: React.FC<{text: string; onRemoveTodo: () => void }> = (props) => {
return <ol className='card'>{props.text}
<button onClick={props.onRemoveTodo}>Delete</button></ol>
};


export default TodoItem;
