import { create } from "zustand";
import { devtools } from "zustand/middleware";


interface subtaskState {
  name: string,
  isDone: boolean,
}

interface taskState {
  taskName: string,
  description: string,
  subtasks: Array<subtaskState>
}

interface columnState {
  columnName: string,
  tasks: Array<taskState>
}

interface boardName {
  boardName: string,
  columns: Array<columnState>
}

interface useTasksState {
  boards: Array<boardName>,

}


const useTasks = create<any, [["zustand/devtools", never]]>(devtools((set, get) => ({
  currentBoard: '',
  boards: [
    {
      boardName: 'board1',
      columns: [{
        columnName: 'Column1',
        tasks: [
          {
            taskName: 'Task1',
            description: 'Task1 description',
            subtasks: [
              {name: 'Subtask1', isDone: false},
              {name: 'Subtask2', isDone: false},
              {name: 'Subtask3', isDone: false} 
            ],
          },
          {
            taskName: 'Task1',
            description: 'Task1 description',
            subtasks: [
              {name: 'Subtask1', isDone: false},
              {name: 'Subtask2', isDone: false},
              {name: 'Subtask3', isDone: false} 
            ],
          },
          {
            taskName: 'Task1',
            description: 'Task1 description',
            subtasks: [
              {name: 'Subtask1', isDone: false},
              {name: 'Subtask2', isDone: false},
              {name: 'Subtask3', isDone: false} 
            ],
          }
        ]
      },
      {
        columnName: 'Column2',
        tasks: [
          {
            taskName: 'Task1',
            description: 'Task1 description',
            subtasks: [
              {name: 'Subtask1', isDone: false},
              {name: 'Subtask2', isDone: false},
              {name: 'Subtask3', isDone: false} 
            ],
          },
          {
            taskName: 'Task1',
            description: 'Task1 description',
            subtasks: [
              {name: 'Subtask1', isDone: false},
              {name: 'Subtask2', isDone: false},
              {name: 'Subtask3', isDone: false} 
            ],
          },
          {
            taskName: 'Task1',
            description: 'Task1 description',
            subtasks: [
              {name: 'Subtask1', isDone: false},
              {name: 'Subtask2', isDone: false},
              {name: 'Subtask3', isDone: false} 
            ],
          }
        ]
      }]
    },
    {
      boardName: 'board2',
      columns: [{
        columnName: 'Column1',
        tasks: [
          {
            taskName: 'Task1',
            description: 'Task1 description',
            subtasks: [
              {name: 'Subtask1', isDone: false},
              {name: 'Subtask2', isDone: false},
              {name: 'Subtask3', isDone: false} 
            ],
          },
          {
            taskName: 'Task1',
            description: 'Task1 description',
            subtasks: [
              {name: 'Subtask1', isDone: false},
              {name: 'Subtask2', isDone: false},
              {name: 'Subtask3', isDone: false} 
            ],
          },
          {
            taskName: 'Task1',
            description: 'Task1 description',
            subtasks: [
              {name: 'Subtask1', isDone: false},
              {name: 'Subtask2', isDone: false},
              {name: 'Subtask3', isDone: false} 
            ],
          }
        ]
      },
      {
        columnName: 'Column2',
        tasks: [
          {
            taskName: 'Task1',
            description: 'Task1 description',
            subtasks: [
              {name: 'Subtask1', isDone: false},
              {name: 'Subtask2', isDone: false},
              {name: 'Subtask3', isDone: false} 
            ],
          },
          {
            taskName: 'Task1',
            description: 'Task1 description',
            subtasks: [
              {name: 'Subtask1', isDone: false},
              {name: 'Subtask2', isDone: false},
              {name: 'Subtask3', isDone: false} 
            ],
          },
          {
            taskName: 'Task1',
            description: 'Task1 description',
            subtasks: [
              {name: 'Subtask1', isDone: false},
              {name: 'Subtask2', isDone: false},
              {name: 'Subtask3', isDone: false} 
            ],
          }
        ]
      }]
    }
  ],
  setCurrentBoard: ({currentBoard}) => set((state) => {
    return {...state, currentBoard: currentBoard}
  })
})))


export default useTasks