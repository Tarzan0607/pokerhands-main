const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that HighestCard returns truthy if there is  no other win condition left', () => {
  let hand = new Hand('♥A', '♦K', '♣J', '♠3', '♠7');
  expect(CompareHands.isHighestCard(hand)).toBeTruthy();
});