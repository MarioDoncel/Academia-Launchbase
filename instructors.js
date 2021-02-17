const fs = require("fs")
const data = require("./data.json")
const { age, date } = require("./utils")
// ========= CREATE ==============


//mostrar instrutor pelo id
exports.show = function(req, res) {
    const { id } = req.params

    // localizar instrutor pelo ID
    const foundInstructor = data.instructors.find(instructor => {
        return instructor.id == id
    } )

    // caso não localize instrutor
    if (!foundInstructor) return res.send('Instrutor não encontrado!')

    // ajustando os valores para enviar ao FRONT
    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at)
    }

    return res.render("instructors/show", {instructor : instructor})
}


// criar novo instrutor
exports.post = function(req, res) {

    const keys = Object.keys(req.body)
// // req body é um objeto com as propriedade e valores enviados pelo form{
// "avatar_url": "http://dadada.com",
// "name": "dadad",
// "birth": "2021-02-17",
// "gender": "M"
// }
// keys são as propriedades avatar-url, name, birth, gender .. enviadas pelo form
    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Todos os campos são obrigatorios")
        }
    }

    let {avatar_url, birth, gender, services, name} = req.body

    birth = Date.parse(birth)

    const created_at = Date.now()
    const id = Number(data.instructors.length+1)

    data.instructors.push({
        avatar_url,
        birth,
        gender,
        services,
        name,
        created_at,
        id
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
        if (err) {
            return res.send("Write file error!")
        }
        return res.redirect('/instructors')
    }
    )

    // return res.send(req.body)
}

// editar dados do instrutor
exports.edit = function(req, res) {
    const { id } = req.params

    // localizar instrutor pelo ID
    const foundInstructor = data.instructors.find(instructor => {
        return instructor.id == id
    } )

    // caso não localize instrutor
    if (!foundInstructor) return res.send('Instrutor não encontrado!')

    const instructor = {
        ...foundInstructor,
        // Convertendo o birth para um formato que o HTML leia usando função do utils.js
        birth: date(foundInstructor.birth)
    }
    
    

    return res.render("instructors/edit", {instructor: instructor})
}