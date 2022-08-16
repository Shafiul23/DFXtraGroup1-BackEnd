import express from 'express'
import Graduate from '../models/gradUser.js';

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
        // res.send(`Getting all todos`);
        Graduate.find((error, Graduate) => {
            error ? res.status(404).send(`Not found`) : res.json(Graduate);
        });
    });

// router.route("/test")
//     .get(async (req, res) => {

//         testSchema.find((error, testInfo) => {
//             error ? res.status(404).send("Not found") : res.json(testInfo)
//         })
//     });

export { router as graduate };