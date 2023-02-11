const { check } = require("express-validator")
const {
    POST_NAME_REQUIRED,
    POST_PRICE_REQUIRED,
    POST_YEAR_REQUIRED,
    POST_IMAGEURL_REQUIRED,
    POST_MANUFACTURER_REQUIRED
} = require("../constants/voziloConstants")

exports.postVoziloValidator = [
    check("name")
        .notEmpty()
        .withMessage(POST_NAME_REQUIRED)
        .bail(),
    check("price")
        .notEmpty()
        .withMessage(POST_PRICE_REQUIRED)
        .bail(),
    check("year")
        .notEmpty()
        .withMessage(POST_YEAR_REQUIRED)
        .bail(),
    check("imageUrl")
        .notEmpty()
        .withMessage(POST_IMAGEURL_REQUIRED)
        .bail(),
    check("manufacturer")
        .notEmpty()
        .withMessage(POST_MANUFACTURER_REQUIRED)
        .bail(),
]