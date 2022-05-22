const fs = require("fs");

class Todo {
    constructor() {
        this.todoList = []
    }

    addTodoList(todoText) {
        const id = this.todoList.length + 1
        this.todoList.push({
            id,
            value: todoText
        })
    }

    removeTodoById(id) {
        this.todoList = this.todoList.filter((data) => data?.id !== id)
    }

    toString() {
        return this.todoList
            .map((todo) => `${todo?.id}. ${todo?.value}`)
            .join('\n')
    }
}

class FileManager {
    saveToFile(values, fileName) {
        fs.writeFileSync(fileName, values)
    }
}

// Buat instance todoClass
const myTodo = new Todo();
myTodo.addTodoList('Belajar Design Pattern')
myTodo.addTodoList('Bangun Pagi')
myTodo.addTodoList('Olahraga Pagina')
myTodo.removeTodoById(2)

// Buat instance FileManager class
const fm = new FileManager();
const filePath = 'JavaScript/Bagian1Solid/output';
fm.saveToFile(myTodo.toString(), `${filePath}/todo.txt`)
