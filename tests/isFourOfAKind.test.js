const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that FourOfAKind returns truthy if four of a kind', () => {
  let hand = new Hand('♥7', '♦7', '♣7', '♠3', '♠7');
  expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});

test('Test that FourOfAKind returns falsy if not four of a kind', () => {
  let hand = new Hand('♥7', '♦7', '♣3', '♠3', '♠7');
  expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});