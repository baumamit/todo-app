import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Priority, TodoType } from "./types/todo";

const playWithReact: TodoType = {
    title: "Play with react all day",
    creationDate: new Date(),
    expiryDate: new Date("2024-10-08"),
    isDone: false,
    priority: Priority.HIGH
}

console.log(`${playWithReact.title} creato il ${playWithReact.creationDate.toLocaleDateString()}`);
console.log(`With priority ${playWithReact.priority}`);

if (!playWithReact.isDone) {
    console.log("To be done");
    
}

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
