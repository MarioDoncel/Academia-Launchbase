const fs = require("fs")
const data = require("../data.json")
const { age, date } = require("../utils")


exports.index = function (req, res) {
    return res.render("members/index", {members: data.members})
}

// ========= CRUD MEMBERS ==============

//mostrar membro pelo id
exports.show = function(req, res) {
    const { id } = req.params

    // localizar membro pelo ID
    const foundMember = data.members.find(member => {
        return member.id == id
    } )

    // caso não localize membro
    if (!foundMember) return res.send('Instrutor não encontrado!')

    // ajustando os valores para enviar ao FRONT
    const member = {
        ...foundMember,
        age: age(foundMember.birth),
        services: foundMember.services.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundMember.created_at)
    }

    return res.render("members/show", {member : member})
}
// criar novo membro -Acesso a pagina
exports.create = function(req, res) {
    return res.render("members/create")
}
// criar novo membro - envio de dados através do POST
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
    const id = Number(data.members.length+1)

    data.members.push({
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
        return res.redirect('/members')
    }
    )

    // return res.send(req.body)
}
// editar dados do membro
exports.edit = function(req, res) {
    const { id } = req.params

    // localizar membro pelo ID
    const foundMember = data.members.find(member => {
        return member.id == id
    } )

    // caso não localize membro
    if (!foundMember) return res.send('Instrutor não encontrado!')

    const member = {
        ...foundMember,
        // Convertendo o birth para um formato que o HTML leia usando função do utils.js
        birth: date(foundMember.birth)
    }
    
    

    return res.render("members/edit", {member: member})
}
//Atualizar dados
exports.put = function (req, res) {
    const { id } = req.body

    // localizar membro pelo ID
    const foundMember = data.members.find(member => {
        return member.id == id
    } )

    // caso não localize membro
    if (!foundMember) return res.send('Instrutor não encontrado!')

    const member = {
        ...foundMember,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id:Number(req.body.id)
    }

    data.members[id-1] = member

    fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
        if (err) {
            return res.send("Write file error!")
        }
        return res.redirect(`/members/${id}`)
    })
}
//Deletar 
exports.delete = function (req, res) {
    const { id } = req.body

    // localizar membro pelo ID
    const foundMember = data.members.find(member => {
        return member.id == id
    } )

    // caso não localize membro
    if (!found
        ) return res.send('Instrutor não encontrado!')

    data.members = data.members.filter(member => id != member.id)

    fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
        if (err) {
            return res.send("Write file error!")
        }
        return res.redirect(`/members`)
    })
}
