const Direction = require('../models/Direction');

class DirectionService {
    async index() {
        const directions = await Direction.find();

        return directions;
    }

    async store(direction) {
        const createdDirection = await Direction.create(direction);

        return createdDirection;
    }

    async getById(id) {
        if (!id) {
            throw new Error("DirectionService.getById method did not receive an id");
        }

        const direction = await Direction.findById(id);

        if (!direction) {
            throw new Error("Document not found");
        }

        return direction;
    }

    async update(id, requestBody) {
        const direction = await Direction.findById(id);
        const editedDirection = new Direction(requestBody);
    
        if (!direction) {
            throw new Error("Document not found"); 
        }
    
        await direction.copy(editedDirection);
    
        const result = await Direction.replaceOne({ _id: id }, direction);
    
        return result;
    }

    async destroy(id) {
        if (!id) {
            throw new Error("DirectionService.destroy method did not receive an id");
        }

        const result = await Direction.deleteOne({ _id: id});

        if (!result) {
            throw new Error ("Document not found");
        }

        return result;
    }
}

module.exports = new DirectionService();