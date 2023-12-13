
import Utelizadores from '../models/Utelizadores';
import { body, validationResult } from 'express-validator';

export async function filmeTicket(req, res) {
 try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    
    const filme = await Filme.findByPk(req.body.filmeId);
//filme disponivel
    if (filme.lugaresdiponiveis <= 0) {
      return res.status(400).json({ messagem: 'tickets para o filme nao disponivel' });
    }

  

    //salvar na base dados
    await filme.save();

    //mover ticket para utelizador
    const utelizadores = await Utelizadores.findByPk(req.utelizadoresId);
    user.movieTickets.push(filme);

    
    //bd
    await user.save();

    
    res.status(300).json({ filme, utelizadores });

 } catch (error) {
    console.error(error);
    res.status(500).json({ messagem: 'erro ao  solicitacar' });
 }
}