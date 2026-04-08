const Game = require('../models/Game');

class GameController {
    static async create(req, res) {
        try {
            const { name, genero, valor, friendId } = req.body;
            if (!name || !genero || !valor) {
                return res.status(400).json({ message: "Dados inválidos." });
            }

            const GameData = {
                name,
                genero,
                valor,
                friendId
            };
            const newGame = await Game.create(GameData);
            return res.status(201).json({ message: 'Game criada com sucesso', data: newGame });

        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar Game', error: error.message });
        }
    }


    static async getAll(req, res) {
        try {
            const { genero, valor } = req.query;
            let filtro = { isActive: true };
            if (genero) { filtro.genero = genero;}
            if (valor) { filtro.valor = valor;}
            const games = await Game.find(filtro);
            return res.status(200).json({ data: games });
        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao encontrar Game',
                error: error.message
            });
        }
    }


    static async getById(req, res) {
        try {
            const { id } = req.params;

            const game = await Game.findById(id);

            if (!game) {
                return res.status(404).json({ message: 'Game não encontrada' });
            }

            return res.status(200).json({ data: game });

        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar o Game', error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { name, genero, valor } = req.body;
            const updatedData = {
                name,
                genero,
                valor
            };
            const updatedGame = await Game.findByIdAndUpdate(id, updatedData, { new: true });
            if (!updatedGame) {
                return res.status(404).json({ message: 'Game não encontrada' });
            }
            return res.status(200).json({ message: 'Game atualizada com sucesso', data: updatedGame });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar o Game', error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedGame = await Game.findByIdAndUpdate(
                id,
                { isActive: false },
                { new: true }
            );
            if (!deletedGame) {
                return res.status(404).json({ message: 'Game não encontrada' });
            }
            return res.status(200).json({ message: 'Game deletada com sucesso' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar o Game', error: error.message });
        }
    }
}

module.exports = GameController;
