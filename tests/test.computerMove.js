import { expect } from 'chai';

import ComputerMove from '../src/ComputerMove'
import GameStep from '../src/GameStep'
import { IOconfig, bestMoveAssertionData, gameStateAssertionData } from './data'



describe('ComputeMove', function() {
    const { symbols, difficulty } = IOconfig;
    bestMoveAssertionData.forEach( (IOdata) => {
        it('computerMove(...) expected values', function() {
            expect( ComputerMove(IOdata.inputBoard, symbols, difficulty) ).to.equal(IOdata.outputMove);
        });
    });
});


describe('GameStep', function() {
    const { symbols, difficulty } = IOconfig;
    gameStateAssertionData.forEach( (IOdata) => {
        it(`GameStep(${IOdata.inputBoard}...) expected values`, function() {
            expect( GameStep(IOdata.inputBoard, symbols, difficulty) ).to.deep.equal(IOdata.outputMove);
        });
    });
    
        

        
    
});