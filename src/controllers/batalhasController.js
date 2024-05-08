
const pool = require('../config/dbConfig');



//get batalhas

app.get('/batalhas/:heroi1_id/:heroi2_id', async (req, res) => {
    
    
    
    try {
        const { heroi1_id, heroi2_id } = req. params;
        const vencedor_id = await vencedorCal(heroi1_id, heroi2_id)


        await pool.query('INSERT INTO batalhas ( heroi1_id, heroi2_id, vencedor_id ) VALUES ($1, $2, $3)', [ heroi1_id, heroi2_id, vencedor_id])
        const { rows } = await pool.query('SELECT * FROM herois WHERE id_heroi = $1', [vencedor_id]);
        
        res.json({
            batalha: rows[0], message: 'batalha criada com sucesso'
        })

    } catch (error) {
        console.error('Erro ao obter todos as batalhas!!!', error);
        res.status(500).send('Erro ao obter as batalhas!');
    }
});

//function
async function vencedorCal(heroi01_id, heroi02_id) {
    const heroi01 = await pool.query('SELECT * FROM  herois WHERE id_heroi = $1', [heroi01_id]);
    const heroi02 = await pool.query('SELECT * FROM  herois WHERE id_heroi = $1', [heroi02_id]);

    if (heroi01.rows[0].nivel > heroi02.rows[0].nivel) {
        return heroi01_id;
    } else if (heroi01.rows[0].nivel < heroi02.rows[0].nivel){
        return heroi02_id;
    } else {
        
        if (heroi01.rows[0].hp > heroi02.rows[0].hp) {
            return heroi01_id;
        } else if (heroi01.rows[0].hp < heroi02.rows[0].hp){
            return heroi02_id;
        }else {
            return heroi01_id;
        }
    }
}




app.get('/batalhas', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM batalhas');
        res.json({
            total: resultado.rowCount,
            herois: resultado.rows,
        });
    } catch (error) {
        console.error('Erro ao obter todos os herois', error);
        res.status(500).send('Erro ao obter os herois');
    }
});




