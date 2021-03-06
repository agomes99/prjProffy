const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
    ]
    
    const weekdays = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
    ]    
    // functions
    function getSubject(subjectNumber){
        const position = +subjectNumber - 1
        return subjects [position]
    }

    //convertendo horas e minutos
    function convertHoursToMinutes(time){
        const [hour, minutes] = time.split(":") // convertendo horas em minutos
        return Number((hour * 60) + minutes)
    }

    module.exports = {
        subjects,
        weekdays,
        getSubject,
        convertHoursToMinutes
    }