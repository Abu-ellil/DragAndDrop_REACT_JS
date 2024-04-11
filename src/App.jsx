import { useRef, useState } from "react";
import "./App.css";

function App() {
  const draggedItem = useRef(0)
  const draggedOverItem = useRef(0)

  const [users, setUsers] = useState([
    { id: 1, name: "محمد" },
    { id: 2, name: "وليد" },
    { id: 3, name: "عصام" },
    { id: 4, name: "كاظم" },
  ]);
const dragSwitch=(e)=>{
  e.preventDefault()

  const newUsers = [...users]
  const temp = newUsers[draggedItem.current]
  newUsers[draggedItem.current] = newUsers[draggedOverItem.current]
  newUsers[draggedOverItem.current] = temp

  setUsers(newUsers)
}
  return (
    <>
      {users.map((user, index) => (
        <div className="user" key={index} 
        draggable
        onDragStart={()=>{draggedItem.current = index
  
        }}
        onDragEnter={()=>{draggedOverItem.current = index
  
        }}
        onDragEnd={(e)=>{dragSwitch(e)}}
        >
          {user.name}
        </div>
      ))}
    </>
  );
}

export default App;
