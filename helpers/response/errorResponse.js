const successResponse = (res, statusCode, message, error, meta={}) => {
    res.status(statusCode).json({
        data: null,
        message,
        error,
        meta
    })
}

export default successResponse