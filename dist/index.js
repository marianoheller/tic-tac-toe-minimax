'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ComputerMove = require('./ComputerMove.js');

var _ComputerMove2 = _interopRequireDefault(_ComputerMove);

var _GameStep = require('./GameStep.js');

var _GameStep2 = _interopRequireDefault(_GameStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exp = {
    ComputerMove: _ComputerMove2.default,
    GameStep: _GameStep2.default
};

exports.default = exp;