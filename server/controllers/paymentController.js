const axios = require("axios")

const CHAPA_URL = process.env.CHAPA_URL || "https://api.chapa.co/v1/transaction/initialize"
const CHAPA_AUTH = process.env.CHAPA_AUTH // || register to chapa and get the key

const initializePayment = async (req, res) => {

    const config = {
        headers: {
            Authorization: CHAPA_AUTH
        }
    }

    // Validate amount server-side (client-supplied amount is a CRITICAL vuln)
    const amount = parseFloat(req.body.amount);
    if (!amount || amount !== amount || amount <= 0) {
        return res.status(400).json({ error: 'Invalid payment amount' });
    }

    // chapa redirect you to this url when payment is successful
    const CALLBACK_URL = "http://localhost:3000"

    // a unique reference given to every transaction
    const TEXT_REF = "tx-myecommerce12345-" + Date.now()

    // form data
    const data = {
        amount: amount,
        currency: 'ETB',
        email: 'ato@ekele.com',
        first_name: 'Ato',
        last_name: 'Ekele',
        tx_ref: TEXT_REF,
        callback_url: CALLBACK_URL
    }

    // post request to chapa
    await axios.post(CHAPA_URL, data, config)
        .then((response) => {
            res.send(response.data.data.checkout_url)
            console.log(response.data)
        })
        .catch((err) => console.log(err))

        /* res.json({res: "message", url: CALLBACK_URL}) */
}

const verifyPayment = async (req, res) => {
        await axios.get("https://api.chapa.co/v1/transaction/verify/" + req.params.id, config)
            .then((response) => {
                console.log(response)
                res.json({message: response})
            }) 
            .catch((err) => {
                console.log("Payment can't be verfied", err)
                res.json({error: err})
            })

            res.json({message: "response", param: req.params.id})
}

module.exports = { initializePayment, verifyPayment }