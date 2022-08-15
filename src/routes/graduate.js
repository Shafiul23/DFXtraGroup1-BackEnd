import express from 'express'
import Graduate from '../models/gradUser.js';

const router = express.Router();
router.route(`/`)
    .get(async (req, res) => {

        const graduateInfo = await Graduate.find((error, Graduate) => {
            // if (error) {
            //     console.log(error);
            // }
            // error ? res.status(404).send(`Not found`) : res.json(Graduate)
        });
        // res.send(`Success`)
    })

export { router as graduate };