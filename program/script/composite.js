// Клас для компоненту
class Component {
    constructor(name) {
        this.name = name;
    }

    operation() {
        console.log(`Виконується операція в компоненті ${this.name}`);
    }
}

// Клас для композиту
class Composite extends Component {
    constructor(name) {
        super(name);
        this.children = [];
    }

    add(child) {
        this.children.push(child);
    }

    remove(child) {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    operation() {
        console.log(`Виконується операція в композиті ${this.name}`);
        for (const child of this.children) {
            child.operation();
        }
    }
}

// Експортуємо класи
// module.exports = { Component, Composite };
