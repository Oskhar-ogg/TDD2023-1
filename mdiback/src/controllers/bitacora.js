import  {connection} from '../basedd.js';


export const getBitacora = async (req, res) => {
    const db = await connection();
    const [rows] = await db.query('SELECT * FROM bitacora');
    res.json(rows);
};
export const getBitacoras = async (req, res) => {
    const connect = await connection();
    const [rows] = await connect.query('SELECT * FROM bitacora WHERE  bitacora_id =  ?', [req.params.id]);
    console.log(rows);
};
export const getBitacoraCount = async (req, res) => {
    const connect = await connection();
    const [rows] = await connect.query('SELECT COUNT(*) FROM bitacora');
    res.json(rows[0]["COUNT(*)"]);
};
export const saveBitacora = async (req, res) => {
    const connect = await connection();
    const [results] = await connect.query('INSERT INTO bitacora (bitacora_title,  bitacora_description) VALUES (?,?)', [ req.body.bitacora_title, req.body. bitacora_description])
    
    res.json ({ id: results.insertId, 
                        ...req.body,
                    });
};
export const updateBitacora = async (req, res) => {
   const connect = await connection();
   await connect.query('UPDATE bitacora SET bitacora_title = ?, bitacora_description = ? WHERE bitacora_id = ?', [req.body.bitacora_title, req.body.bitacora_description, req.params.id]);
};
export const deleteBitacora = async (req, res) => {
    const connect = await connection();
    const result = await connect.query('DELETE FROM bitacora WHERE id = ?', [req.params.id]);
    res.sendStatus(204);
};