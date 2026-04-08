const Game = require('../models/Game');

class GameController {    
    static async create(req, res) {
        try {
            const { name, Genero, valor } = req.body;
            if (!name || !Genero || !valor) {
                return res.status(400).json({ message: "Dados inválidos." });
            }
            
            const GameData = {
                name,
                Genero,
                valor
            };
            const newGame = await Game.create(GameData);
            return res.status(201).json({ message: 'Game criada com sucesso', data: newGame });

        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar o Game', error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const people = await Game.find();
            return res.status(200).json({ data: people });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar o Game', error: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const Game = await Game.findById(id);
            if (!Game) {
                return res.status(404).json({ message: 'Game não encontrada' });
            }
            return res.status(200).json({ data: Game });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar o Game', error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { name, Genero, valor } = req.body;
            const updatedData = {
                name,
                Genero,
                valor
            };
            const updatedGame = await Game.findByIdAndUpdate(id, updatedData, { new: true });
            if (!updatedGame) {
                return res.status(404).json({ message: 'Game não encontrada' });
            }
            return res.status(200).json({ message: 'Game atualizada com sucesso', data: updatedGame});
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar o Game', error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedGame = await Game.findByIdAndDelete(id);
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
