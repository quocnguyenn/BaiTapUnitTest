import {isOddNumber} from './main.js'
const expect = chai.expect;

describe('Test hàm kiểm tra phải số lẽ hay không ', () => {
    it('Trả về true nếu nhập 3', () => {
        const result= isOddNumber(3);
        expect(result).to.be.true;
    });
    it('trả về false nếu nhập số 2', () => {
        const result= isOddNumber(2);
        expect(result).to.be.false;
    });
    it('trả về true nếu nhập số 999', () => {
        const result= isOddNumber(999);
        expect(result).to.be.true;
    });
});
