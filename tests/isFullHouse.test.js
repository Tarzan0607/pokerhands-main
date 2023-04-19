const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that FullHouse returns truthy if FullHouse, pair + three of a kind', () => {
  let hand = new Hand('♥7', '♦3', '♣7', '♠3', '♠7');
  expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});

test('Test that FullHouse returns falsy if FullHouse is incomplete', () => {
  let hand = new Hand('♥7', '♦3', '♣5', '♠2', '♠7');
  expect(CompareHands.isFullHouse(hand)).toBeFalsy();
});