const { age, date } = require("../../lib/utils")
const Member = require('../models/Member')

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
                callback(members) {
                    if(members[0]){
                        const pagination = {
                            total: Math.ceil(members[0].total/limit),
                            page
                        }
                        return res.render("members/index", {members,pagination, filter})
                    }
                    return res.render("members/index", {members, filter})
                    }
            }
            Member.paginate(params)
    },
    
    // ========= CRUD INSTRUCTORS ==============
    
    //mostrar membro pelo id
    show(req, res) {
        Member.find(req.params.id, function (member) {
            if(!member) return res.send('Membro não encontrado!')

            member.birthDay=date(member.birth).birthDay
            member.blood=member.blood.replace("0", "-").replace("1", "+")

            return res.render("members/show", {member})
        })
        
    },
    // criar novo membro -Acesso a pagina
    create(req, res) {

        Member.instructorsSelectOption(function (instructorOptions) {
            return res.render("members/create", {instructorOptions})
        })
        
    },
    // criar novo membro - envio de dados através do POST
    post(req, res) {
        const keys = Object.keys(req.body)
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Todos os campos são obrigatorios")
            }
        }

        Member.create(req.body, function () {
            return res.redirect(`/members`)
        })

        
    },
    // editar dados do membro
    edit(req, res) { 
        Member.find(req.params.id, function (member){
        if(!member) return res.send('Membro não encontrado!')

        member.birth=date(member.birth).iso

        Member.instructorsSelectOption(function (instructorOptions) {
            return res.render("members/edit", {instructorOptions, member})
        })
           
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

        Member.update(req.body, function () {
            return res.redirect(`/members/${req.body.id}`)
        })
    
       
    },
    //Deletar 
    delete(req, res) {
        Member.delete(req.body.id, function () {
            return res.redirect(`/members`)
        })
        
    }
}






// exports.index = function (req, res) {
//     return res.render("members/index", {members: data.members})
// }

// // ========= CRUD MEMBERS ==============

// //mostrar membro pelo id
// exports.show = function(req, res) {
//     const { id } = req.params

//     // localizar membro pelo ID
//     const foundMember = data.members.find(member => {
        
//         return member.id == id
        
//     } )

//     // caso não localize membro
//     if (!foundMember) return res.send('Membro não encontrado!')

//     // ajustando os valores para enviar ao FRONT
    
//     const member = {
//         ...foundMember,
//         birthDay: date(foundMember.birth).birthDay,
//         blood: foundMember.blood.replace("0","-").replace("1","+")
//     }

//     return res.render("members/show", {member : member})
// }
// // criar novo membro -Acesso a pagina
// exports.create = function(req, res) {
//     return res.render("members/create")
// }
// // criar novo membro - envio de dados através do POST
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

//     let {avatar_url, birth, gender, name, height, weight, email, blood} = req.body

//     birth = Date.parse(birth)

//     const lastMember = data.members[data.members.length-1]
//     let id = 1
//     if (lastMember) {
//         id = Number(lastMember.id+1)
//     }


//     data.members.push({
//         avatar_url, 
//         birth, 
//         gender, 
//         name, 
//         height, 
//         weight, 
//         email, 
//         blood,
//         id
//     })

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
//         if (err) {
//             return res.send("Write file error!")
//         }
//         return res.redirect('/members')
//     }
//     )

//     // return res.send(req.body)
// }
// // editar dados do membro
// exports.edit = function(req, res) {
//     const { id } = req.params

//     // localizar membro pelo ID
//     const foundMember = data.members.find(member => {
//         return member.id == id
//     } )

//     // caso não localize membro
//     if (!foundMember) return res.send('Instrutor não encontrado!')

//     const member = {
//         ...foundMember,
//         // Convertendo o birth para um formato que o HTML leia usando função do utils.js
//         birth: date(foundMember.birth).iso
//     }
    
    

//     return res.render("members/edit", {member: member})
// }
// //Atualizar dados
// exports.put = function (req, res) {
//     const { id } = req.body

//     // localizar membro pelo ID
//     const foundMember = data.members.find(member => {
//         return member.id == id
//     } )

//     // caso não localize membro
//     if (!foundMember) return res.send('Membro não encontrado!')

//     const member = {
//         ...foundMember,
//         ...req.body,
//         birth: Date.parse(req.body.birth),
//         id:Number(req.body.id)
//     }

//     data.members[data.members.indexOf(foundMember)] = member

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
//         if (err) {
//             return res.send("Write file error!")
//         }
//         return res.redirect(`/members/${id}`)
//     })
// }
// //Deletar 
// exports.delete = function (req, res) {
//     const { id } = req.body

//     // localizar membro pelo ID
//     const foundMember = data.members.find(member => {
//         return member.id == id
//     } )

//     // caso não localize membro
//     if (!foundMember) 
//         return res.send('Instrutor não encontrado!')

//     data.members = data.members.filter(member => id != member.id)

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
//         if (err) {
//             return res.send("Write file error!")
//         }
//         return res.redirect(`/members`)
//     })
// }
