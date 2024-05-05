const successResponse = (res, statusCode=200, data, message, meta={}) => {
    res.status(statusCode).json({
        data,
        message,
        error: null,
        meta
    })
}

export default successResponse