const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that TwoPair returns truthy if Two pairs match', () => {
  let hand = new Hand('♥3', '♦3', '♣7', '♠J', '♠7');
  expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});

test('Test that TwoPair returns falsy if not Two pairs match', () => {
  let hand = new Hand('♥A', '♦3', '♣9', '♠J', '♠7');
  expect(CompareHands.isTwoPair(hand)).toBeFalsy();
});