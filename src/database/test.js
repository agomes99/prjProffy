const Database = require ('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
// inserir dados
    proffyValue = {
        name: "Alessandro Santos",
        avatar:"https://avatars3.githubusercontent.com/u/44215310?s=460&u=18c55d271298ce0bddef80e0709aee88667601d0&v=4", 
        whatsapp: "(13)999999990", 
        bio: "Instrutor de matemática."      
    }

    classValue = {
        subject: 1,
        cost:"20", 
        // o proffy id virá pelo banco de dados
    }


    classScheduleValues = [
            // class id virá pelo banco de dados, após cadastramos o class    
            {                
                weekday: 1,
                time_from: 720,
                time_to: 1220
            },
            {
                weekday: 0,
                time_from: 520,
                time_to: 1220
            }
    ]
     // await createProffy(db, {proffyValue, classValue, classScheduleValues})
        // consultar dados inseridos

        // todos os proffys
        const selectedProffys = await db.all("SELECT * FROM proffys")
       // console.log(selectedProffys)

        // consultar as classes de um professor e trazer todos os dados - FAZENDO UM JOIN
        const selectClassesAndProffys = await db.all(`
            SELECT classes.*, proffys.*
            FROM proffys
            JOIN classes ON (classes.proffy_id = proffys.id)
            WHERE classes.proffy_id = 1;
        `)
        //console.log(selectClassesAndProffys)

      const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"      
      `)

      //console.log(selectClassesSchedules)
})


/*
 
*/