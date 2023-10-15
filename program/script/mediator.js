// Клас для посередника
class Mediator {
    constructor() {
        this.colleagues = [];
    }

    addColleague(colleague) {
        this.colleagues.push(colleague);
        colleague.setMediator(this);
    }

    send(message, colleague) {
        for (const c of this.colleagues) {
            if (c !== colleague) {
                c.receive(message);
            }
        }
    }
}

// Клас для колеги
class Colleague {
    constructor(name) {
        this.name = name;
        this.mediator = null;
    }

    setMediator(mediator) {
        this.mediator = mediator;
    }

    send(message) {
        this.mediator.send(message, this);
    }

    receive(message) {
        console.log(`${this.name} отримав повідомлення: ${message}`);
    }
}

// Експортуємо класи
// module.exports = { Mediator, Colleague };
