const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that OnePair returns truthy if one pair', () => {
  let hand = new Hand('♥J', '♦A', '♣J', '♠3', '♠7');
  expect(CompareHands.isOnePair(hand)).toBeTruthy();
});

test('Test that OnePair returns falsy if no pair exists', () => {
  let hand = new Hand('♥A', '♦9', '♣J', '♠3', '♠7');
  expect(CompareHands.isOnePair(hand)).toBeFalsy();
});

test('check that isOnePair returns highest score for the strongest one pair hand', () => {
  let hand1 = new Hand('♥9', '♦9', '♣7', '♠5', '♣6');
  let hand2 = new Hand('♥Q', '♦Q', '♣7', '♠5', '♣6');
  let scoreHand1 = CompareHands.isOnePair(hand1);
  let scoreHand2 = CompareHands.isOnePair(hand2);
  expect(scoreHand2).toBeGreaterThan(scoreHand1);
});