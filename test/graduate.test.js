import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import server from '../server.js';
import graduateSchema from '../src/models/graduate.model.js'

import graduateTest from './graduate-user-test.json' assert {type: "json"};
import Graduate from '../src/models/graduate.model.js';

// const testData = require('./graduate-user-test.json');

chai.use(chaiHttp);

const graduateData = graduateTest.graduateUser

describe(`Tests`, () => {
    beforeEach(async () => {
        await graduateSchema.deleteMany()
            .then(() => console.log(`Database cleared`))
            .catch(error => {
                console.log(`Error clearing`)
                throw new Error();
            });
        await graduateSchema.insertMany(graduateData)
            .then(() => console.log(`Database populated with graduate test data`))
            .catch(error => {
                console.log(`Error inserting`);
                throw new Error();
            });
    })
})




