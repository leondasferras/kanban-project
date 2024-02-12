import { create } from "zustand";
import { devtools } from "zustand/middleware";


interface ISubtask {
  name: string,
  isDone: boolean,
}

interface ITask {
  taskName: string,
  description: string,
  subtasks: Array<ISubtask>
}

interface IColumn {
  columnName: string,
  tasks: Array<ITask>
}

export interface IBoard {
  boardName: string,
  columns: Array<IColumn>
}

interface useTasksState {
  boards: Array<IBoard>,

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
            taskName: 'Task2',
            description: 'Task1 description',
            subtasks: [
              {name: 'Subtask1', isDone: false},
              {name: 'Subtask2', isDone: false},
              {name: 'Subtask3', isDone: false} 
            ],
          },
          {
            taskName: 'Task3',
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
            taskName: 'Task2',
            description: 'Task1 description',
            subtasks: [
              {name: 'Subtask1', isDone: false},
              {name: 'Subtask2', isDone: false},
              {name: 'Subtask3', isDone: false} 
            ],
          },
          {
            taskName: 'Task3',
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
        columnName: 'Column22',
        tasks: [
          {
            taskName: 'Task22',
            description: 'Task1 description',
            subtasks: [
              {name: 'Subtask1', isDone: false},
              {name: 'Subtask2', isDone: false},
              {name: 'Subtask3', isDone: false} 
            ],
          },
          {
            taskName: 'Task2',
            description: 'Task1 description',
            subtasks: [
              {name: 'Subtask1', isDone: false},
              {name: 'Subtask2', isDone: false},
              {name: 'Subtask3', isDone: false} 
            ],
          },
          {
            taskName: 'Task3',
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
            taskName: 'Task2',
            description: 'Task1 description',
            subtasks: [
              {name: 'Subtask1', isDone: false},
              {name: 'Subtask2', isDone: false},
              {name: 'Subtask3', isDone: false} 
            ],
          },
          {
            taskName: 'Task3',
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
  setCurrentBoard: (currentBoard) => set((state) => {
    return {...state, currentBoard: currentBoard}
  })
})))


export default useTasks