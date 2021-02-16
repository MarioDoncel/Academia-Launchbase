const fs = require("fs")
const data = require("./data.json")
// ========= CREATE ==============

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