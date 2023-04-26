const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that checkDuplicate returns truthy if does not contain duplicate cards', () => {
let hand1 = new Hand('♥4', '♦4', '♣3', '♠7', '♠8');
let hand2 = new Hand('♥6', '♦6', '♥2', '♣T', '♣K');
expect(CompareHands.checkIfNotDuplicate(hand1, hand2)).toBeTruthy();

});

test('check that checkDuplicate returns falsy if does contain duplicate cards', () => {
  let hand1 = new Hand('♠5', '♦5', '♥9', '♣7', '♥3');
  let hand2 = new Hand('♠6', '♦6', '♥6', '♣K', '♥9');
  expect(CompareHands.checkIfNotDuplicate(hand1, hand2)).toBeFalsy();

});

test('check that checkDuplicate returns falsy if does contain duplicate cards', () => {
  let hand1 = new Hand('♠5', '♦5', '♥9', '♣7', '♥9');
  expect(CompareHands.checkIfNotDuplicate(hand1)).toBeFalsy();

});