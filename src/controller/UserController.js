const connection = require("../database/connection");

class UserController {
    static async all(request, response) {
        try {
            let data = await connection("user")
                .select("*")
                .orderBy("name", "asc");

            return response.json({ error: false, data });
        } catch (error) {
            return response.json({ error: true, data: [] });
        }
    }

    static async create(request, response) {
        try {
            let { name } = request.body;

            if (!name) {
                return response.json({ error: true, msg: "Nome obrigatório" });
            }

            await connection("user").insert({ name });

            return response.json({ error: false, msg: "Usuário cadastrado com sucesso" });
        } catch (error) {
            console.log(error)
            return response.json({ error: true, msg: error });
        }
    }

    static async update(request, response) {
        try {
            let { id, name } = request.body;

            if (!id) {
                return response.json({ error: true, msg: "Usuário não encontrado" });
            }

            if (!name) {
                return response.json({ error: true, msg: "Nome obrigatório" });
            }

            await connection("user").where({ id }).update({ name });

            return response.json({ error: false, msg: "Usuário alterado com sucesso" });
        } catch (error) {
            return response.json({ error: true, msg: error });
        }
    }

    static async delete(request, response) {
        try {
            let { id } = request.body;

            if (!id) {
                return response.json({ error: true, msg: "Usuário não encontrado" });
            }

            await connection("user").where({ id }).delete();

            return response.json({ error: false, msg: "Usuário deletado com sucesso" });
        } catch (error) {
            return response.json({ error: true, msg: error });
        }
    }
}

module.exports = UserController;