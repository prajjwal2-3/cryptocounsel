import React from "react";
import { useTaskStore } from "@/store/taskstore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUserStore } from "@/store/userstore";
interface TaskDialogProps {
  taskId: number;
  children: React.ReactNode;
}

const formatDate = (date: Date | string | null): string => {
  if (!date) return "No deadline";
  if (typeof date === "string") {
    return new Date(date).toDateString();
  }
  return date.toDateString();
};

const TaskDialog: React.FC<TaskDialogProps> = ({ taskId, children }) => {
  const { getUserById } = useUserStore();
  const getTaskById = useTaskStore((state) => state.getTaskById);
  const task = getTaskById(taskId);
  const user = getUserById(task?.assignee!);
  if (!task) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{task.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-2">
          <p className="text-sm text-gray-600">{task.description}</p>
          <div className="text-sm text-gray-600 flex items-center gap-1 mt-2">
            Assignee:
            <div className="flex items-center gap-1">
              {user?.name}
              <div
                style={{ backgroundColor: user?.color }}
                className="w-4 h-4 rounded-full flex justify-center text-center text-xs text-white items-center mr-2"
              >
                {user?.name.charAt(0)}
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Deadline: {formatDate(task.deadline)}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Priority:{" "}
            <span
              className={`px-2 py-1 rounded-full ${
                task.priority === "LOW"
                  ? "bg-blue-100 text-blue-800"
                  : task.priority === "MEDIUM"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {task.priority}
            </span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDialog;
