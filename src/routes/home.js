import express from 'express'

const router = express.Router();
router.route(`/`)
    .get(async (req, res) => { res.send(`Success`) })
    .post(async (req, res) => {
        console.log(req.body)
        res.send('Received post req')
    })

export { router as home };
// module.exports = router;