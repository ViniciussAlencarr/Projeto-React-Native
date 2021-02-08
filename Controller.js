const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');
const { response } = require('express');
const QRCode = require('qrcode');

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

app.post('/verifyPass', async (req, res) => {
    let response = await user.findOne({
        where: {
            /*Id do banco de dados*/id: req.body.id,//Id digitado na aplicação
            /*valor da senha inserido no banco de dados*/password: req.body.senhaAntiga //valor digitado na aplicação no campo "senha antiga"
        }
    })
    if (response === null) {
        res.send(JSON.stringify('Senha antiga não confere'));
    } else {
        if (req.body.novaSenha === req.body.confNovaSenha) {
            response.password = req.body.novaSenha;
            response.save();
            res.send(JSON.stringify('Senha atualizada com sucesso!!'));
        } else {
            res.send(JSON.stringify('As senhas não conferem'));
        }
    }
});

//Criação do produto no banco
app.post('/create', async (req, res) => {
    let trackingId = '';
    await tracking.create({
        userId: req.body.userId,
        code: req.body.code,
        local: req.body.local
    }).then((response) => {
        trackingId += response.id;
    });

    await product.create({
        trackingId: trackingId,
        name: req.body.product
    });
    QRCode.toDataURL(req.body.code).then(url => {
        QRCode.toFile (
            './assets/code.jpg',
            req.body.code
        );
        res.send(JSON.stringify(url));
    })
});

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Servidor Rodando');
    
});
/*  
app.get('/update', async (req, res) => {
    try {
        let update = await user.findByPk(4).then((response) => {
            response.name = 'User01'
            response.password = '123'
            response.save();
        })
        console.log(update);
    } catch(error) {
        console.log('Deu erro aqui', error);
    }
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