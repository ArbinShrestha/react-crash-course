import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'



function App() {

  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text: 'Doc App',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id:2,
            text: 'Doc App1',
            day: 'Feb 6th at 2:30pm',
            reminder: true
        },
        {
            id:3,
            text: 'Doc App3',
            day: 'Feb 7th at 2:30pm',
            reminder: false
        },
    ]
)

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
    
  );
}


export default App;
