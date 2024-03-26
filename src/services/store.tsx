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
  setCurrentBoard: (currentBoard) => set((state) => {
    return {...state, currentBoard: currentBoard}
  }),
  currentColumn:'',
  setCurrentColumn: (currentColumn) => set((state) => {
    return {...state, currentColumn: currentColumn}
  }),
  currentTask: '',
  setCurrentTask: (currentTask) => set((state) => {
    return {...state, currentTask: currentTask}
  }),
  isNewTask: false,
  isEditTask: false,

  editTask: (payload) => set((state) => {
    let currentTask = state.boards.find(board => board.boardName === state.currentBoard).columns.find(column => column.columnName === state.currentColumn).tasks.find(task => task.name === state.currentTask.name)
    currentTask = {...payload}
    return currentTask
  }),

  replaceTask: (newColumnName) => set((state) => {
    const currentColumn = state.boards.find(board => board.boardName === state.currentBoard).columns.find(column => column.columnName === state.currentColumn);
    currentColumn.tasks.filter(task => task.taskName !== state.currentTask.taskName);
    const newColumn = state.boards.find(board => board.boardName === state.currentBoard).columns.find(column => column.columnName == newColumnName);
    newColumn.tasks.push(state.currentTask);
    return state
  }),

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

})))


export default useTasks