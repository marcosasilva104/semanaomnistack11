const request = require('supertest');
const generateUniqueId = require('../../utils/generateUniqueId');
const app = require('../../../src/app');

describe('Generate Uniqe ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8); 
    }); 
});