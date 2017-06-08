import { expect } from 'chai';

import GameStep from '../src/GameStep'
import { IOconfig, bestMoveAssertionData, gameStateAssertionData } from './data'



describe('GameStep', function() {
    const { symbols, difficulty } = IOconfig;
    gameStateAssertionData.forEach( (IOdata) => {
        it(`GameStep(${IOdata.inputBoard}...) expected state`, function() {
            expect( GameStep(IOdata.inputBoard, symbols, difficulty) ).to.deep.equal(IOdata.outputMove);
        });
    });
});