
const pool = require('../config/dbConfig');



// get herois 

app.get('/herois', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM herois');
        res.json({
            total: resultado.rowCount,
            herois: resultado.rows,
        });
    } catch (error) {
        console.error('Erro ao obter todos os herois', error);
        res.status(500).send('Erro ao obter os herois');
    }
});









// post herois

app.post('/herois',async (req, res) => {
    try {
        const {nome, poder, nivel, hp} = req.body;
        await pool.query('INSERT INTO herois (nome, poder, nivel, hp) VALUES ($1, $2, $3, $4)', [nome, poder, nivel, hp]);
        res.status(201).send({mensagem: 'Heroi criado com sucesso'});
    } catch (error) {
        console.error('Erro ao criar heroi', error);
        res.status(500).send('Erro ao criar heroi');
    }
});








//delete herois

app.delete('/herois/:id_heroi', async (req, res) => {
    try {
        const { id_heroi } = req.params;
        const resultado = await pool.query('DELETE FROM herois WHERE id_heroi = $1', [id_heroi]);
        res.status(200).send({mensagem: 'heroi deletado com sucesso'})
    } catch (error) {
        console.error('Erro ao apagar heroi', error);
        res.status(500).send('Erro ao apagar o heroi');
    }
});






//put herois

app.put('/herois/:id_heroi', async (req, res) => {
    try {
        const { id_heroi } = req.params;
        const { nome, poder, nivel, hp  } = req.body;
        await pool.query('UPDATE herois SET nome = $1, poder = $2, nivel = $3, hp = $4 WHERE id_heroi = $5', [nome, poder, nivel, hp, id_heroi])
        res.status(200).send({mensagem: 'heroi atualizado com sucesso'})
    } catch (error) {
        console.error('Erro ao atualizar', error);
        res.status(500).send('Erro ao atualizar');
    }
});







// get id herois

app.get('/herois/:id_heroi', async(req, res) => {
    try {
        const { id_heroi } = req. params;
        const resultado = await pool.query('SELECT * FROM herois WHERE id_heroi = $1', [id_heroi])
        if(resultado.rowCount == 0){
            res.status(404).send({mensagem: 'Id não encontrado'});
        }
        res.json({
            herois: resultado.rows[0],
        })
    } catch (error) {
        console.error('Erro ao pegar heroi por ID ', error);
        res.status(500).send('Erro ao pegar heroi por ID');
    }
});