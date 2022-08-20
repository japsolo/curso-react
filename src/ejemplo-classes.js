class Persona {
    constructor(name, surname) {
        this.firstName = name;
        this.lastName = surname;
    }

    saludar() {
        return `¿Hola qué tal?, mi nombre es ${this.firstName} ${this.lastName}`;
    }
}

class Estudiante extends Persona {
    constructor(name, surname, email) {
        super(name, surname);
        this.email = email;
    }

    irAEstudiar(nombreDelCurso) {
        return `Hola, soy ${this.firstName}, estoy yendo al curso de ${nombreDelCurso}`;
    }
}

const javi = new Estudiante("Javi", "Script", "javiscript@gmail.com");
console.log(javi);

