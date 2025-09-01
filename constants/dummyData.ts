import React, { JSX } from "react";
import { MaterialIcons } from "@expo/vector-icons";

interface categoryProps {
    id:number,
    title:string,
    iconName: keyof typeof MaterialIcons.glyphMap;
    color?: string;
}
export const category : categoryProps[]= [
    { id: 1, title: "Work", iconName: "work", color: "blue" },
  { id: 2, title: "Personal", iconName: "person", color: "orange" },
  { id: 3, title: "School", iconName: "school", color: "purple" },
  { id: 4, title: "Health", iconName: "health-and-safety", color: "red"},
  { id: 5, title: "Shopping", iconName: "shopping-cart", color: "green" },

];
interface todoProps {
    compeleted: boolean;
    todo: string;
    category: string;
    time: string;
}
export const todos: todoProps[] = [
    {
        compeleted: false,
        todo: "Get lunch",
        category: "Workk",
        time: "9:00AM"
    },
    {
        compeleted: false,
        todo: "FiniSH Tax Owned Landing Page",
        category: "Work",
        time: "9:00AM"
    },
    {
        compeleted:false,
        todo: "Buy Garri and sugar",
        category: "Shopping",
        time: "6:00PM"
    },
    {
        compeleted: false,
        todo: "Take medications",
        category: "Health",
        time: "12:00PM"
    },
]