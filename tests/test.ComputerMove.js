import { expect } from 'chai';

import ComputerMove from '../src/ComputerMove'
import { IOconfig, bestMoveAssertionData, gameStateAssertionData } from './data'



describe('ComputeMove', function() {
    const { symbols, difficulty } = IOconfig;
    bestMoveAssertionData.forEach( (IOdata) => {
        it(`ComputerMove(${IOdata.inputBoard}...) expected ${IOdata.outputMove}`, function() {
            expect( ComputerMove(IOdata.inputBoard, symbols, difficulty) ).to.equal(IOdata.outputMove);
        });
    });
});
