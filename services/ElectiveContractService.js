const ElectiveContract = require("../models/ElectiveContract");

class ElectiveContractService {
    async index () {
        return ElectiveContract.find();
    }

    async store (elective) {
        return ElectiveContract.create(elective);
    }

    async getById (id) {
        const electiveContract = await ElectiveContract.findById(id);

        if (!electiveContract) {
            throw new Error("Document not found");
        }

        return electiveContract;
    }

    async update (id, requestBody) {
        const electiveContract = await ElectiveContract.findById(id);

        if (!electiveContract) {
            throw new Error("Document not found");
        }

        await electiveContract.copy(requestBody);

        return ElectiveContract.replaceOne({ _id: id }, electiveContract);
    }

    async destroy (id) {
        const result = await ElectiveContract.deleteOne({ _id: id });

        if (!result) {
            throw new Error("Document not found");
        }

        return result;
    }
}

module.exports = new ElectiveContractService();