const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');
const { response } = require('express');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
let user = models.User;
let tracking = models.Tracking;
let product = models.Product;

app.post('/login', async (req, res) => {
    let response = await user.findOne({
        where: {
            name: req.body.name,
            password: req.body.password
        }
    });
    if (response === null) {
        res.send(JSON.stringify('[error]!!'));
    } else {
        res.send(response);
    }
});
let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Servidor Rodando');
    
});
/*
app.get('/update', async (req, res) => {
    let update = await user.findByPk(4).then((aux) => {
        aux.name = 'Matheus';
        aux.password = 'Matheuzinho123';
        aux.save();
    })
});

app.get('/update', async (req, res) => {
    let update = await user.findByPk(4).then((aux) => {
        aux.name: 'Matheus',
        aux.password: 'Matheuzinho123'
        aux.save()
    })
});


app.get('/create', async (req, res) => {
    let create = await user.create({
        name: 'Rodrigo',
        password: 'Rodrigo123',
        createdAt: new Date(),
        createdAt: new Date()
    });
    res.send('Usuário criado com sucesso!');
});

app.get('/update', async (req, res) => {
    let update = await user.update( {name: 'Gabriel'}, {
        where: {
            name: 'Jorje'
        }
    })
    console.log('Atualizado com sucesso!!');
});*/


/*
//Criar Usuário
app.get('/create', async (req, res) => {
    let create = await user.create({
        name: "Vinicius",
        password: "311020",
        createdAt: new Date(),
        createdAt: new Date(),
    });
    res.send('Usuário criado com sucesso!!');
});

//Lendo dados do BD
app.get('/read', async (req, res) => {
    let read = users = await user.findAll({
        raw: true        
    });
    console.log(read);
});

//Atualizando dados do BD
app.get('/update', async (req, res) => {
    let update = user.findByPk(1, {include:[{all:true}]}).then((response) => {
        response.Trackings[0].local='New City';
        response.Trackings[0].save();
    })
})

//Deletar dado da tabela
app.get('/delete', async (req, res) => {
    user.destroy ({
        where: {
            id: 1
        }
    });
})

app.get('/update', async (req, res) => {
    let update = await user.findByPk(4, {include:[{ all:true }]}).then((resposta) => {
        resposta.Trackings[0].code = 'Este é código hehe';
        resposta.Trackings[0].local = 'São Paulo';
        resposta.Trackings[0].save();
    });
    console.log('Tracking atualizado com sucesso!')
    res.send('Tracking atualizado com sucesso!!');
})
*/

//Criar

/*
Criando
----------------------------------------
app.get('/create', async (req, res) => {
    let create = await user.create({
        name: 'Vinicius',
        password: 'Vinicius12345'
        createAt: Date(),
        updateAt: Date()
    })
    console.log('Usuário criado com sucesso!');
});

Mostrando
----------------------------------------
app.get('/read', async (req, res) => {
    let read = await user.findAll({
        attributes: ['name', 'password']
    }
    console.log(read);
    res.send(read);
});

Atualizando
----------------------------------------
app.get('/update', async (req, res) => {
    let update = await user.update({name: 'Alexandre', password: 'Alexandre12345'}, {
        name: 'Vinicius',
        password: 'Vinicius12345'
    })
    console.log('Update realizado com sucesso!');
});

Removendo
----------------------------------------
app.get('/destroy', async (req, res) => {
    let destroy = await user.destroy({
        where: {
            name: 'Vinicius'
        }
    })
})
*/