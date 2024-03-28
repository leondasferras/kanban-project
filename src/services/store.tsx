import { create } from "zustand";
import { devtools } from "zustand/middleware";
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
  devtools((set) => ({
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


    editTask: (payload) =>
      set((state) => {
      let newTask = {...state.currentTask, ...payload}

        return newTask;
      }),

    replaceTask: (newColumnName) =>
      set((state) => {
        const currentColumn = state.boards
          .find((board) => board.boardName === state.currentBoard)
          .columns.find((column) => column.columnName === state.currentColumn);

        const newColumn = state.boards
          .find((board) => board.boardName === state.currentBoard)
          .columns.find((column) => column.columnName == newColumnName);
        const filteredTasks = currentColumn.tasks.filter(
          (task) => task.taskID !== state.currentTask.taskID
        );
        currentColumn.tasks = filteredTasks;
        if (
          !newColumn.tasks.find(
            (task) => task.taskID == state.currentTask.taskID
          )
        )
          newColumn.tasks.push(state.currentTask);
        return state;
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
          const newCurrentBoard = '1321'
          return {...state, boards: newBoards, currentBoard:newCurrentBoard}
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
  }))
);

export default useTasks;
