const GenerateUniqueId = require('../../src/utils/GeneratorUniqueId');
describe('Generate Unique ID', () =>{
    it('should generate an unique ID',()=>{
        const id = GenerateUniqueId();
        expect(id).toHaveLength(8);
    });
});