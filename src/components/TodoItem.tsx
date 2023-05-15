// Minimal component where we establish again using
// React.FC<{text: string}> that its a function component and it expects a text type of string

import './TodoItem.css'


const TodoItem: React.FC<{text: string}> = (props) => {
return <ol className='card'>{props.text}</ol>
};


export default TodoItem;
