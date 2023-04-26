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

test('check that isStraightFlush returns 0 if not straight', () => {
  let hand = new Hand('♥4', '♦5', '♣7', '♥8', '♦2');
  expect(CompareHands.isStraightFlush(hand)).toBe(0);
});

test('returns highest score for the strongest straight flush hand', () => {
  let hand1 = new Hand('♥T', '♥J', '♥Q', '♥K', '♥A');
  let hand2 = new Hand('♣4', '♣5', '♣7', '♣8', '♣2');
  expect(CompareHands.isStraightFlush(hand1) > CompareHands.isStraightFlush(hand2)).toBeTruthy();
});