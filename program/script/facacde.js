// Класи різних компонентів системи
class AudioSystem {
    turnOn() {
        console.log('Аудіосистема увімкнена');
    }

    turnOff() {
        console.log('Аудіосистема вимкнена');
    }

    // ... інші методи ...
}

class VideoProjector {
    turnOn() {
        console.log('Відеопроектор увімкнений');
    }

    turnOff() {
        console.log('Відеопроектор вимкнений');
    }

    // ... інші методи ...
}

class Lights {
    dim() {
        console.log('Світло приглушено');
    }

    turnOff() {
        console.log('Світло вимкнено');
    }

    // ... інші методи ...
}

// Фасад
class HomeTheaterFacade {
    constructor(audioSystem, videoProjector, lights) {
        this.audioSystem = audioSystem;
        this.videoProjector = videoProjector;
        this.lights = lights;
    }

    watchMovie() {
        console.log('Підготовка до перегляду фільму...');
        this.lights.dim();
        this.audioSystem.turnOn();
        this.videoProjector.turnOn();
        console.log('Готово. Приємного перегляду!');
    }

    endMovie() {
        console.log('Вимикання системи домашнього кінотеатру...');
        this.lights.turnOff();
        this.audioSystem.turnOff();
        this.videoProjector.turnOff();
        console.log('Дякуємо за перегляд!');
    }
}

// Використання фасаду
const homeTheater = new HomeTheaterFacade(new AudioSystem(), new VideoProjector(), new Lights());
homeTheater.watchMovie();
// Після фільму
homeTheater.endMovie();

