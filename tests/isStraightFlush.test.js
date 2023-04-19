const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('test that isStraightFlush returns truthy if straightflush', () => {
  let hand = new Hand('♥9', '♥8', '♥7', '♥5', '♥6');
  expect(CompareHands.isStraightFlush(hand)).toBeTruthy();
});

test('test that isStraightFlush returns falsy if not straightflush', () => {
  let hand = new Hand('♥A', '♥8', '♥7', '♥5', '♥6');
  expect(CompareHands.isStraightFlush(hand)).toBeFalsy();
});