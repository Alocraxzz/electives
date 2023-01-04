const errorHandler = (error, req, res, next) => {
    console.log(error.message);
    return res.status(500).json(error.message);
}

module.exports = errorHandler;