import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { nanoid } from "nanoid";

interface ISubtask {
  name: string;
  isDone: boolean;
}

interface ITask {
  taskName: string;
  description: string;
  subtasks: Array<ISubtask>;
}

interface IColumn {
  columnName: string;
  tasks: Array<ITask>;
}

export interface IBoard {
  boardName: string;
  columns: Array<IColumn>;
}

interface useTasksState {
  boards: Array<IBoard>;
}

const useTasks = create<any, [["zustand/devtools", never]]>(
  persist((set) => ({
    currentBoard: "",
    setCurrentBoard: (currentBoard) =>
      set((state) => {
        return { ...state, currentBoard: currentBoard };
      }),
    currentColumn: "",
    setCurrentColumn: (currentColumn) =>
      set((state) => {
        return { ...state, currentColumn: currentColumn };
      }),
    currentTask: "",
    setCurrentTask: (currentTask) =>
      set((state) => {
        return { ...state, currentTask: currentTask };
      }),

    isNewTask: false,
    setIsNewTask: (payload) => {
      set((state) => {
        state.isNewTask = payload
        return {...state, isNewTask:payload}
      })

    },
    setNewTask:(newTask, columnName) => {
      set((state) => {
        const newState = { ...state };
        const columnToAdd = newState.boards.find(board => board.boardName === newState.currentBoard).columns.find(column => column.columnName === columnName)
        columnToAdd.tasks.push(newTask)
        return {...newState}
      })
    },

    isTaskOpened: false,
    setisTaskOpened: (payload) => {
      set((state) => {
        state.isTaskOpened = payload
        return {...state, isTaskOpened:payload}
      })
    },

    
    isEditTaskModal: false,
    setIsEditTaskModal: (payload) =>
      set((state) => {
        return {...state, isEditTaskModal: payload}
      }),

    isDeleteTask: false,
    setIsDeleteTask:(payload) => {
      set((state) => {
        return {...state, isDeleteTask:payload}
      })
    },
    deleteTask:() => {
      set((state) => {
        let taskList = state.boards.find(board => board.boardName === state.currentBoard).columns.find(column => column.columnName === state.currentColumn)?.tasks
        let taskToDelete = taskList?.findIndex(task => task.taskID === state.currentTask.taskID)
        taskList?.splice(taskToDelete,1)
        return {state}
      })
    },


    editTask: (editedTask) =>
      set((state) => {
        const newState = {...state}
        const currentTasklist = newState.boards.find(board => board.boardName === newState.currentBoard).columns.find(column => column.columnName === newState.currentColumn).tasks;
        
        const currentTask = currentTasklist.findIndex(task => task.taskID === editedTask.taskID)
        currentTasklist.splice(currentTask, 1, editedTask)
        return {...newState}
      }),

    replaceTask: (newColumnName) =>
      set((state) => {
        const newState = {...state}

        const currentColumn = newState.boards
          .find((board) => board.boardName === newState.currentBoard)
          .columns.find((column) => column.columnName === newState.currentColumn);

          console.log(currentColumn);
          
          const newColumn = state.boards
          .find((board) => board.boardName === newState.currentBoard)
          .columns.find((column) => column.columnName == newColumnName)
          
          console.log(newColumn);
          const filteredTasks = currentColumn.tasks.filter(
          (task) => task.taskID !== newState.currentTask.taskID
        );
        currentColumn.tasks = filteredTasks;
        if (
          !newColumn.tasks.find(
            (task) => task.taskID == newState.currentTask.taskID
          )
        )
          newColumn.tasks.push(newState.currentTask);
        return {...newState};
      }),

      isNewBoardModal: false,
      setIsNewBoardModal: (payload) => { 
        set((state) => {
          return {...state, isNewBoardModal:payload}
        })
      },
      setNewBoard: (payload) => {
        set((state) => {
          state.boards.push(payload)
          return state
        })
      },

      isEditBoardModal: false,
      setIsEditBoardModal: (payload) => { 
        set((state) => {
          return {...state, isEditBoardModal:payload}
        })
      },
      isDeleteBoardModal: false,
      setIsDeleteBoardModal: (payload) => { 
        set((state) => {
          return {...state, isDeleteBoardModal:payload}
        })
      },

      editBoard: (newBoard) => {
        set((state) => {
          const boardToChange = state.boards.findIndex(board => board.boardName === state.currentBoard)
          const newBoards = state.boards
          newBoards.splice(boardToChange, 1, newBoard)
          return {...state, boards: newBoards}
        })
      },
      
      deleteBoard: () => {
        set((state) => {
          const boardToChange = state.boards.findIndex(board => board.boardName === state.currentBoard)
          const newBoards = state.boards
          newBoards.splice(boardToChange,1)
          const newCurrentBoard = state.boards[0].boardName
          return {...state, boards: newBoards, currentBoard: newCurrentBoard}
        })
      },
      isSidebarShown:true,
      setIsSidebarShown:(payload) => {
        set((state) => {
          return {...state, isSidebarShown:payload}
        })
      },
      
    boards: [
      {
        id:nanoid(),
        boardName: "board1",
        columns: [
          {
            id: nanoid(),
            columnName: "Column1",
            tasks: [
              {
                taskID: nanoid(),
                taskName: "Task1",
                description: "Task1 description",
                subtasks: [
                  { id: nanoid(), name: "Subtask1", isDone: false },
                  { id: nanoid(), name: "Subtask2", isDone: false },
                  { id: nanoid(), name: "Subtask3", isDone: false },
                ],
              },
              {
                taskID: nanoid(),
                taskName: "Task2",
                description: "Task1 description",
                subtasks: [
                  { id: nanoid(), name: "Subtask1", isDone: false },
                  { id: nanoid(), name: "Subtask2", isDone: false },
                  { id: nanoid(), name: "Subtask3", isDone: false },
                ],
              },
              {
                taskID: nanoid(),
                taskName: "Task3",
                description: "Task1 description",
                subtasks: [
                  { id: nanoid(), name: "Subtask1", isDone: false },
                  { id: nanoid(), name: "Subtask2", isDone: false },
                  { id: nanoid(), name: "Subtask3", isDone: false },
                ],
              },
            ],
          },
          {
            id: nanoid(),
            columnName: "Column2",
            tasks: [
              {
                taskID: nanoid(),
                taskName: "Task12",
                description: "Task12 description",
                subtasks: [
                  { id: nanoid(), name: "Subtask12", isDone: false },
                  { id: nanoid(), name: "Subtask22", isDone: false },
                  { id: nanoid(), name: "Subtask32", isDone: false },
                ],
              },
              {
                taskID: nanoid(),
                taskName: "Task22",
                description: "Task1 description",
                subtasks: [
                  { id: nanoid(), name: "Subtask12", isDone: false },
                  { id: nanoid(), name: "Subtask22", isDone: false },
                  { id: nanoid(), name: "Subtask32", isDone: false },
                ],
              },
              {
                taskID: nanoid(),
                taskName: "Task32",
                description: "Task1 description",
                subtasks: [
                  { id: nanoid(), name: "Subtask12", isDone: false },
                  { id: nanoid(), name: "Subtask22", isDone: false },
                  { id: nanoid(), name: "Subtask32", isDone: false },
                ],
              },
            ],
          },
        ],
      },
      {
        id:nanoid(),
        boardName: "board2",
        columns: [
          {
            id: nanoid(),
            columnName: "Column22",
            tasks: [
              {
                taskID: nanoid(),
                taskName: "Task22",
                description: "Task1 description",
                subtasks: [
                  { id: nanoid(), name: "Subtask1", isDone: false },
                  { id: nanoid(), name: "Subtask2", isDone: false },
                  { id: nanoid(), name: "Subtask3", isDone: false },
                ],
              },
              {
                taskID: nanoid(),
                taskName: "Task22",
                description: "Task1 description",
                subtasks: [
                  { id: nanoid(), name: "Subtask1", isDone: false },
                  { id: nanoid(), name: "Subtask2", isDone: false },
                  { id: nanoid(), name: "Subtask3", isDone: false },
                ],
              },
              {
                taskID: nanoid(),
                taskName: "Task32",
                description: "Task1 description",
                subtasks: [
                  { id: nanoid(), name: "Subtask1", isDone: false },
                  { id: nanoid(), name: "Subtask2", isDone: false },
                  { id: nanoid(), name: "Subtask3", isDone: false },
                ],
              },
            ],
          },
          {
            id: nanoid(),
            columnName: "Column2",
            tasks: [
              {
                taskID: nanoid(),
                taskName: "Task13",
                description: "Task1 description",
                subtasks: [
                  { id: nanoid(), name: "Subtask1", isDone: false },
                  { id: nanoid(), name: "Subtask2", isDone: false },
                  { id: nanoid(), name: "Subtask3", isDone: false },
                ],
              },
              {
                taskID: nanoid(),
                taskName: "Task23",
                description: "Task1 description",
                subtasks: [
                  { id: nanoid(), name: "Subtask1", isDone: false },
                  { id: nanoid(), name: "Subtask2", isDone: false },
                  { id: nanoid(), name: "Subtask3", isDone: false },
                ],
              },
              {
                taskID: nanoid(),
                taskName: "Task33",
                description: "Task1 description",
                subtasks: [
                  { id: nanoid(), name: "Subtask1", isDone: false },
                  { id: nanoid(), name: "Subtask2", isDone: false },
                  { id: nanoid(), name: "Subtask3", isDone: false },
                ],
              },
            ],
          },
        ],
      },
    ],
  }),
  {
    name:'tasksStorage',
    storage: createJSONStorage(() => sessionStorage)
  }
  )

);

export default useTasks;
