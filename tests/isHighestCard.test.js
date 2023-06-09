const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that HighestCard returns truthy if there is  no other win condition left', () => {
  let hand = new Hand('♥A', '♦K', '♣J', '♠3', '♠7');
  expect(CompareHands.isHighestCard(hand)).toBeTruthy();
});
test('check that isHighestCard returns correct point value for compare hands', () => {
  let hand1 = new Hand('♥3', '♦9', '♣7', '♠5', '♣6')
  let hand2 = new Hand('♥3', '♦T', '♣7', '♠5', '♣6')
  let scoreHand1 = CompareHands.isHighestCard(hand1);
  let scoreHand2 = CompareHands.isHighestCard(hand2)
  expect(scoreHand2).toBeGreaterThan(scoreHand1);
});

test('Test that isHighestCard returns highest score for strongest hand', () => {
  let hand1 = new Hand('♥A', '♦K', '♣Q', '♠J', '♠T');
  let hand2 = new Hand('♥A', '♦K', '♣Q', '♠J', '♠9');
  expect(CompareHands.isHighestCard(hand1)).toBeGreaterThan(CompareHands.isHighestCard(hand2));
});