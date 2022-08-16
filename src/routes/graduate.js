import express from 'express'
import Graduate from '../models/graduate.model.js';

const router = express.Router();
// router.route(`/`)
//     .get(async (req, res) => {

//         const graduateInfo = Graduate.find((error, Graduate) => {
//             if (error) {
//                 console.log(error);
//             }
//             error ? res.status(404).send(`Not found`) : res.json(Graduate)
//         });
//         // res.send(`Success`)
// })


router.route(`/`)
    .get((req, res) => {
        Graduate.find((error, Graduate) => {
            error ? res.status(404).send(`Not found`) : res.json(Graduate);
        });
    });

router.route("/:uuid")
    .get(async (req, res) => {
        Graduate.where({ uuid: req.params.uuid }).findOne((error, Graduate) => {
            if (error) {
                console.log(error)
            }
            Graduate ? res.json(Graduate) : res.status(404).send(`Not found`);
        });
    });


export { router as graduate };