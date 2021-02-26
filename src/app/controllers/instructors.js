const Instructor = require('../models/Instructor')
const { age, date } = require("../../lib/utils")

module.exports = {
    index(req, res) {
        let {filter, page, limit} = req.query

        page = page || 1
        limit = limit || 2
        let offset = limit * (page-1)

        const params = {
            filter,
            page, 
            limit,
            offset,
            callback(instructors) {
                const pagination = {
                    total: Math.ceil(instructors[0].total/limit),
                    page
                }
                return res.render("instructors/index", {instructors,pagination, filter})
                }
        }

        Instructor.paginate(params)

       
    },
    
    // ========= CRUD INSTRUCTORS ==============
    
    //mostrar instrutor pelo id
    show(req, res) {
        Instructor.find(req.params.id, function(instructor) {
            if(!instructor) return res.send('Instrutor não encontrado!')

            instructor.age = age(instructor.birth)
            instructor.services = instructor.services.split(",")
            instructor.created_at = date(instructor.created_at).format
            
            return res.render("instructors/show", {instructor})
        })
        
    },
    // criar novo instrutor -Acesso a pagina
    create(req, res) {
        return res.render("instructors/create")
    },
    // criar novo instrutor - envio de dados através do POST
    post(req, res) {
        const keys = Object.keys(req.body)
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Todos os campos são obrigatorios")
            }
        }

        Instructor.create(req.body, function (instructor) {
            return res.redirect(`/instructors/${instructor.id}`)
        })

    },
    
    // editar dados do instrutor
    edit(req, res) { 
        Instructor.find(req.params.id, function(instructor) {
            if(!instructor) return res.send('Instrutor não encontrado!')

            instructor.birth = date(instructor.birth).iso
            
            
            return res.render("instructors/edit", {instructor})
        })

    },
    //Atualizar dados
    put(req, res) {
        const keys = Object.keys(req.body)
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Todos os campos são obrigatorios")
            }
        }


        Instructor.update(req.body, function () {
            return res.redirect(`/instructors/${req.body.id}`)
        })
    
    },
    //Deletar 
    delete(req, res) {
        Instructor.delete(req.body.id, function () {
            return res.redirect(`/instructors`)
        })
    }
}


// exports.index = function (req, res) {
//     return res.render("instructors/index", {instructors: data.instructors})
// }

// // ========= CRUD INSTRUCTORS ==============

// //mostrar instrutor pelo id
// exports.show = function(req, res) {
//     const { id } = req.params

//     // localizar instrutor pelo ID
//     const foundInstructor = data.instructors.find(instructor => {
//         return instructor.id == id
//     } )

//     // caso não localize instrutor
//     if (!foundInstructor) return res.send('Instrutor não encontrado!')

//     // ajustando os valores para enviar ao FRONT
//     const instructor = {
//         ...foundInstructor,
//         age: age(foundInstructor.birth),
//         services: foundInstructor.services.split(","),
//         created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at)
//     }

//     return res.render("instructors/show", {instructor : instructor})
// }
// // criar novo instrutor -Acesso a pagina
// exports.create = function(req, res) {
//     return res.render("instructors/create")
// }
// // criar novo instrutor - envio de dados através do POST
// exports.post = function(req, res) {

//     const keys = Object.keys(req.body)
// // // req body é um objeto com as propriedade e valores enviados pelo form{
// // "avatar_url": "http://dadada.com",
// // "name": "dadad",
// // "birth": "2021-02-17",
// // "gender": "M"
// // }
// // keys são as propriedades avatar-url, name, birth, gender .. enviadas pelo form
//     for (key of keys) {
//         if (req.body[key] == "") {
//             return res.send("Todos os campos são obrigatorios")
//         }
//     }

//     let {avatar_url, birth, gender, services, name} = req.body

//     birth = Date.parse(birth)

//     const created_at = Date.now()
    
//     const lastInstructor = data.instructors[data.instructors.length-1]
//     let id = 1
//     if (lastInstructor) {
//         id = Number(lastInstructor.id+1)
//     }

//     data.instructors.push({
//         avatar_url,
//         birth,
//         gender,
//         services,
//         name,
//         created_at,
//         id
//     })

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
//         if (err) {
//             return res.send("Write file error!")
//         }
//         return res.redirect('/instructors')
//     }
//     )

//     // return res.send(req.body)
// }
// // editar dados do instrutor
// exports.edit = function(req, res) {
//     const { id } = req.params

//     // localizar instrutor pelo ID
//     const foundInstructor = data.instructors.find(instructor => {
//         return instructor.id == id
//     } )

//     // caso não localize instrutor
//     if (!foundInstructor) return res.send('Instrutor não encontrado!')

//     const instructor = {
//         ...foundInstructor,
//         // Convertendo o birth para um formato que o HTML leia usando função do utils.js
//         birth: date(foundInstructor.birth).iso
//     }
    
    

//     return res.render("instructors/edit", {instructor: instructor})
// }
// //Atualizar dados
// exports.put = function (req, res) {
//     const { id } = req.body

//     // localizar instrutor pelo ID
//     const foundInstructor = data.instructors.find(instructor => {
//         return instructor.id == id
//     } )

//     // caso não localize instrutor
//     if (!foundInstructor) return res.send('Instrutor não encontrado!')

//     const instructor = {
//         ...foundInstructor,
//         ...req.body,
//         birth: Date.parse(req.body.birth),
//         id:Number(req.body.id)
//     }

//     data.instructors[data.instructors.indexOf(foundInstructor)] = instructor

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
//         if (err) {
//             return res.send("Write file error!")
//         }
//         return res.redirect(`/instructors/${id}`)
//     })
// }
// //Deletar 
// exports.delete = function (req, res) {
//     const { id } = req.body

//     // localizar instrutor pelo ID
//     const foundInstructor = data.instructors.find(instructor => {
//         return instructor.id == id
//     } )

//     // caso não localize instrutor
//     if (!foundInstructor) return res.send('Instrutor não encontrado!')

//     data.instructors = data.instructors.filter(instructor => id != instructor.id)

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
//         if (err) {
//             return res.send("Write file error!")
//         }
//         return res.redirect(`/instructors`)
//     })
// }

