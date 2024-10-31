import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  const [todoItems, setTodoItems] = useState([{
    id: 1,
    title: "Ayam Bakar",
    counter: 0
  },
  {
    id: 2,
    title: "Ayam Goreng",
    counter: 0
  },
  {
    id: 3,
    title: "Sate Ayam",
    counter: 0
  }]);

  return (
    <div className="App">
      {todoItems.map((todoItem, idx) => {
        return (
          <>
          <div key={todoItem.id} style={{padding: '16px', borderBottom: '1px solid #000', alignItems: 'center', display: 'flex'}}>
          <span>{todoItem.title}</span>
          <span style={{marginLeft: '16px'}}>{todoItem.counter}</span>
          <button onClick={() => {
            const newTodoItems = todoItems.map((todoItem) => {
              if (todoItem.id === (idx + 1)) {
                return {
                  ...todoItem,
                  counter: todoItem.counter + 1
                }
              }
              return todoItem
            });
            setTodoItems(newTodoItems);
          }} style={{marginLeft: '8px'}}>+</button>
          <button onClick={() => navigate(`/detail/${todoItem.id}`)} style={{marginLeft: '8px'}}>Masuk ke Detail</button>
          </div>
          </>
        )
      })}
    </div>
    );
}

export default App;
