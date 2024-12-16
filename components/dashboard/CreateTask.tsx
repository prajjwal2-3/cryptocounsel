'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from 'date-fns';
import { CalendarIcon, User } from 'lucide-react';
import { useUserStore } from '@/store/userstore';
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"
import { useTaskStore } from '@/store/taskstore';
type Priority = 'LOW' | 'MEDIUM' | 'HIGH';

interface Task {
  title: string;
  description: string;
  deadline: Date | null;
  assignee: string | null;
  priority: Priority;
}

const AddTaskDialog: React.FC = () => {
    const users = useUserStore().users
    const { toast } = useToast()
  const [task, setTask] = useState<Task>({
    title: '',
    description: '',
    deadline: null,
    assignee: null,
    priority: 'MEDIUM',
  });
const {addTask}=useTaskStore()
  const handleSubmit = () => {
    addTask(task)
    toast({
      title: "Task added",
      description: `Deadline: ${task.deadline?.toString().slice(0,15)}`,
    })
    setTask({
      title: '',
      description: '',
      deadline: null,
      assignee: null,
      priority: 'MEDIUM',
    })
  };
 
  return (
    <Dialog>
      <DialogTrigger asChild>
      <div className="w-fit border-2 border-foreground/70 flex justify-center cursor-pointer items-center rounded-[8px] p-1">
            <span className="material-symbols-rounded text-foreground/70">add</span>
          </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={task.description}
              onChange={(e) => setTask({ ...task, description: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label>Deadline</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`w-full justify-start text-left font-normal ${!task.deadline && "text-muted-foreground"}`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {task.deadline ? format(task.deadline, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                //   @ts-ignore
                  selected={task.deadline}
                  onSelect={(date) => setTask({ ...task, 
                    // @ts-ignore
                    deadline: date })}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid gap-2">
            <Label>Assignee</Label>
            <Select onValueChange={(value) => setTask({ ...task, assignee: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select a user" />
              </SelectTrigger>
              <SelectContent>
                {users.map((user) => (
                  <SelectItem key={user.id} value={user.id.toString()}>
                    <div className="flex items-center">
                      <div style={{backgroundColor:user.color}} className="w-6 h-6 rounded-full flex justify-center text-center text-white items-center mr-2">
                        {user.name.charAt(0)}
                      </div>
                      {user.name}
                 
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>Priority</Label>
            <RadioGroup
              defaultValue="medium"
              onValueChange={(value: Priority) => setTask({ ...task, priority: value })}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low" id="low" />
                <Label htmlFor="low">Low</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="high" />
                <Label htmlFor="high">High</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
        <DialogClose asChild>
            <Button type="button" variant="destructive">
              Close
            </Button>
          </DialogClose>
        <Button onClick={handleSubmit} className="" variant='conqr'>Add Task</Button>
        </div>
       
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskDialog;
