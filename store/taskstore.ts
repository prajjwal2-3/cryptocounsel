import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Priority = 'LOW' | 'MEDIUM' | 'HIGH';

interface Task {
  id: number;
  title: string;
  description: string;
  deadline: Date | null;
  assignee: string | null;
  priority: Priority;
}

interface TaskState {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTask: (id: number, updatedTask: Partial<Task>) => void;
  deleteTask: (id: number) => void;
  getTaskById: (id: number) => Task | undefined;
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Review Johnson Contract",
    description: "Carefully review and annotate the Johnson merger contract",
    deadline: new Date("2024-09-15"),
    assignee: '1',
    priority: "HIGH"
  },
  {
    id: 2,
    title: "Prepare for Smith v. Jones Hearing",
    description: "Draft opening statement and organize evidence for the upcoming hearing",
    deadline: new Date("2024-09-10"),
    assignee: '2',
    priority: "HIGH"
  },
  {
    id: 3,
    title: "Client Intake: New Corporate Client",
    description: "Conduct initial meeting and complete paperwork for new tech startup client",
    deadline: new Date("2024-09-05"),
    assignee: '3',
    priority: "MEDIUM"
  },
  {
    id: 4,
    title: "Update Case Management Software",
    description: "Ensure all recent cases are properly entered into the system",
    deadline: new Date("2024-09-20"),
    assignee: '4',
    priority: "LOW"
  },
  {
    id: 5,
    title: "Legal Research: Copyright Law Updates",
    description: "Research recent changes in copyright law affecting our media clients",
    deadline: new Date("2024-09-25"),
    assignee: '5',
    priority: "MEDIUM"
  }
];

export const useTaskStore = create<TaskState>()(
  
    (set, get) => ({
      tasks: initialTasks,
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, { ...task, id: Date.now() }],
        })),
      updateTask: (id, updatedTask) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      getTaskById: (id) => get().tasks.find((task) => task.id === id),
    })
    
  )
