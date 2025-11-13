const aiService = require("../services/ai.service")


module.exports.getReview = async (req, res) => {

    const code = req.body.code; // You were checking for `code` but sending `prompt`

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    try {
        const response = await aiService(code);
        res.send(response);
    } catch (error) {
        console.error("Error in AI controller:", error);
        res.status(500).send("Something went wrong on the server.");
    }

}