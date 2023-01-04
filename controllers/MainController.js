class MainController {
    

    async index(req, res) {
        const lecturers = await Service.index();

        res.status(200).json(lecturers);
    }

    async store(req, res) {
        const lecturer = await Service.store(req.body);

        res.status(200).json(lecturer);
    }

    async show(req, res) {
        const lecturer = await Service.getById(req.params.id, res);

        res.status(200).json(lecturer);
    }

    async update(req, res) {
        const result = await Service.update(req.params.id, req.body);

        res.status(200).json(result);
    }

    async destroy(req, res) {
        const result = await Service.destroy(req.params.id);

        res.status(200).json(result);
    }
}

module.exports = new MainController();