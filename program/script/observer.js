// Клас для спостерігача
class Observer {
    update(message) {
        console.log(`Отримано оновлення: ${message}`);
    }
}

// Суб'єкт (об'єкт, який можна спостерігати)
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(message) {
        for (const observer of this.observers) {
            observer.update(message);
        }
    }
}

// Експортуємо класи
// module.exports = { Observer, Subject };
