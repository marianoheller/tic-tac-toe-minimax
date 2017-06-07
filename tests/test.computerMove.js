import { IOconfig, bestMoveAssertionData } from './io.data'
import { expect } from 'chai';


import ComputerMove from '../src/ComputerMove'



describe('ComputeMove', function() {
    it('computerMove(...) expected values', function() {
        const { symbols, difficulty } = IOconfig;

        bestMoveAssertionData.forEach( (IOdata) => {
            expect( ComputerMove(IOdata.inputBoard, symbols, difficulty) ).to.equal(IOdata.outputMove);
        });
    });
});