import {create} from 'zustand';
import { v4 as uuidv4 } from 'uuid';

interface User {
  id: string;
  name: string;
  color: string;
  position: string;
}

interface UserState {
  users: User[];
  addUser: (name: string, position: string) => void;
  removeUser: (id: string) => void;
  updateUserPosition: (id: string, position: string) => void;
  getUserById: (id: string) => User | undefined;
}

const getRandomColor = () => {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

export const useUserStore = create<UserState>((set, get) => ({
  users: [ 
    { id: '1', name: 'Aakash Bhardwaj', color: '#DB4437', position: 'Attorney' },
    { id: '2', name: 'Anab Akhtar', color: '#4285F4', position: 'Paralegal' },
    { id: '3', name: 'Shivansh Sachdeva', color: '#F4B400', position: 'Legal Assistant' },
    { id: '4', name: 'Prajjwal Sharma', color: '#0F9D58', position: 'Legal Secretary' },
    { id: '5', name: 'Kritagya Aggrawal', color: '#AB47BC', position: 'Litigation Support Specialist' },
    { id: '6', name: 'Yash Gupta', color: '#00ACC1', position: 'Legal Researcher' },
    { id: '7', name: 'Abhishek', color: '#FF7043', position: 'Contract Manager' },
    { id: '8', name: 'Aditya', color: '#9E9D24', position: 'Compliance Officer' },
    { id: '9', name: 'Pranesh Modi', color: '#5C6BC0', position: 'HR Manager' },
    { id: '10', name: 'Mridul Sharma', color: '#F06292', position: 'IT Specialist' }
  ],
  addUser: (name: string, position: string) => set((state) => ({
    users: [...state.users, {
      id: uuidv4(),
      name,
      color: getRandomColor(),
      position,
    }],
  })),
  removeUser: (id: string) => set((state) => ({
    users: state.users.filter(user => user.id !== id),
  })),
  updateUserPosition: (id: string, position: string) => set((state) => ({
    users: state.users.map(user => 
      user.id === id ? { ...user, position } : user
    ),
  })),
  getUserById: (id: string) => {
    return get().users.find(user => user.id === id);
  },
}));
