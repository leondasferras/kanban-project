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
        const columnToAdd = state.boards.find(board => board.boardName === state.currentBoard).columns.find(column => column.columnName === columnName)
        columnToAdd.tasks.push(newTask)
        return columnToAdd
      })
    },
    
    isEditTask: false,

    editTask: (payload) =>
      set((state) => {
        let currentTask = state.boards
          .find((board) => board.boardName === state.currentBoard)
          .columns.find((column) => column.columnName === state.currentColumn)
          .tasks.find((task) => task.taskID === state.currentTask.taskID);
        currentTask = { ...payload };
        return currentTask;
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

    boards: [
      {
        boardName: "board1",
        columns: [
          {
            columnName: "Column1",
            tasks: [
              {
                taskID: nanoid(),
                taskName: "Task1",
                description: "Task1 description",
                subtasks: [
                  { name: "Subtask1", isDone: false },
                  { name: "Subtask2", isDone: false },
                  { name: "Subtask3", isDone: false },
                ],
              },
              {
                taskID: nanoid(),
                taskName: "Task2",
                description: "Task1 description",
                subtasks: [
                  { name: "Subtask1", isDone: false },
                  { name: "Subtask2", isDone: false },
                  { name: "Subtask3", isDone: false },
                ],
              },
              {
                taskID: nanoid(),
                taskName: "Task3",
                description: "Task1 description",
                subtasks: [
                  { name: "Subtask1", isDone: false },
                  { name: "Subtask2", isDone: false },
                  { name: "Subtask3", isDone: false },
                ],
              },
            ],
          },
          {
            columnName: "Column2",
            tasks: [
              {
                taskID: nanoid(),
                taskName: "Task12",
                description: "Task12 description",
                subtasks: [
                  { name: "Subtask12", isDone: false },
                  { name: "Subtask22", isDone: false },
                  { name: "Subtask32", isDone: false },
                ],
              },
              {
                taskID: nanoid(),
                taskName: "Task22",
                description: "Task1 description",
                subtasks: [
                  { name: "Subtask12", isDone: false },
                  { name: "Subtask22", isDone: false },
                  { name: "Subtask32", isDone: false },
                ],
              },
              {
                taskID: nanoid(),
                taskName: "Task32",
                description: "Task1 description",
                subtasks: [
                  { name: "Subtask12", isDone: false },
                  { name: "Subtask22", isDone: false },
                  { name: "Subtask32", isDone: false },
                ],
              },
            ],
          },
        ],
      },
      {
        boardName: "board2",
        columns: [
          {
            columnName: "Column22",
            tasks: [
              {
                taskID: nanoid(),
                taskName: "Task22",
                description: "Task1 description",
                subtasks: [
                  { name: "Subtask1", isDone: false },
                  { name: "Subtask2", isDone: false },
                  { name: "Subtask3", isDone: false },
                ],
              },
              {
                taskID: nanoid(),
                taskName: "Task22",
                description: "Task1 description",
                subtasks: [
                  { name: "Subtask1", isDone: false },
                  { name: "Subtask2", isDone: false },
                  { name: "Subtask3", isDone: false },
                ],
              },
              {
                taskID: nanoid(),
                taskName: "Task32",
                description: "Task1 description",
                subtasks: [
                  { name: "Subtask1", isDone: false },
                  { name: "Subtask2", isDone: false },
                  { name: "Subtask3", isDone: false },
                ],
              },
            ],
          },
          {
            columnName: "Column2",
            tasks: [
              {
                taskID: nanoid(),
                taskName: "Task13",
                description: "Task1 description",
                subtasks: [
                  { name: "Subtask1", isDone: false },
                  { name: "Subtask2", isDone: false },
                  { name: "Subtask3", isDone: false },
                ],
              },
              {
                taskID: nanoid(),
                taskName: "Task23",
                description: "Task1 description",
                subtasks: [
                  { name: "Subtask1", isDone: false },
                  { name: "Subtask2", isDone: false },
                  { name: "Subtask3", isDone: false },
                ],
              },
              {
                taskID: nanoid(),
                taskName: "Task33",
                description: "Task1 description",
                subtasks: [
                  { name: "Subtask1", isDone: false },
                  { name: "Subtask2", isDone: false },
                  { name: "Subtask3", isDone: false },
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
