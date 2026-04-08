const Friend = require('../models/Friend');

class FriendController {    
    static async create(req, res) {
        try {
            const { name, age } = req.body;

            const newFriend = await Friend.create({
                name,
                age
            });

            return res.status(201).json({
                message: 'Friend criado com sucesso',
                data: newFriend
            });

        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao criar o Friend',
                error: error.message
            });
        }
    }

    static async getAll(req, res) {
        try {
            const friends = await Friend.find({ isActive: true });

            return res.status(200).json({ data: friends });

        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao encontrar os Friends',
                error: error.message
            });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;

            const friend = await Friend.findById(id);

            if (!friend) {
                return res.status(404).json({
                    message: 'Friend não encontrado'
                });
            }

            return res.status(200).json({ data: friend });

        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao encontrar o Friend',
                error: error.message
            });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { name, age } = req.body;

            const updatedData = {
                name,
                age
            };

            const updatedFriend = await Friend.findByIdAndUpdate(
                id,
                updatedData,
                { new: true }
            );

            if (!updatedFriend) {
                return res.status(404).json({
                    message: 'Friend não encontrado'
                });
            }

            return res.status(200).json({
                message: 'Friend atualizado com sucesso',
                data: updatedFriend
            });

        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao atualizar o Friend',
                error: error.message
            });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;

            const deletedFriend = await Friend.findByIdAndUpdate(
                id,
                { isActive: false },
                { new: true }
            );

            if (!deletedFriend) {
                return res.status(404).json({
                    message: 'Friend não encontrado'
                });
            }

            return res.status(200).json({
                message: 'Friend deletado com sucesso'
            });

        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao deletar o Friend',
                error: error.message
            });
        }
    }
}

module.exports = FriendController;