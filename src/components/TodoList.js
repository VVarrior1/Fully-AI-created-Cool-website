import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useTodoList from "./useTodoList";

const TodoList = () => {
  const { tasks, setTasks, addTask, deleteTask, toggleCompletion } =
    useTodoList();
  const [newTask, setNewTask] = useState("");

  // Function to handle drag and drop
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const newTasks = [...tasks];
    const [removed] = newTasks.splice(source.index, 1);
    newTasks.splice(destination.index, 0, removed);
    setTasks(newTasks);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ id: Date.now().toString(), content: newTask, completed: false });
    setNewTask("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
          className="bg-gray-200 p-2 rounded-lg w-full mr-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="bg-gray-600 p-4 rounded-lg"
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="bg-gray-200 p-4 rounded-lg mb-4 flex justify-between"
                    >
                      <span
                        className={`${
                          task.completed ? "line-through" : ""
                        } text-lg text-gray-800`}
                      >
                        {task.content}
                      </span>
                      <div>
                        <button
                          onClick={() => toggleCompletion(task.id)}
                          className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 mr-2"
                        >
                          {task.completed ? "Undo" : "Done"}
                        </button>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoList;
