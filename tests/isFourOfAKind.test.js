const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that FourOfAKind returns truthy if four of a kind', () => {
  let hand = new Hand('♥7', '♦7', '♣7', '♠3', '♠7');
  expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});

test('Test that FourOfAKind returns falsy if not four of a kind', () => {
  let hand = new Hand('♥9', '♦7', '♣3', '♠3', '♠7');
  expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});
test('check that isFourOfAKind returns 0 if not four of a kind', () => {
  let hand = new Hand('♣4', '♣5', '♥5', '♣5', '♣7');
  expect(CompareHands.isFourOfAKind(hand)).toBe(0);
});

test('check that isFourOfAKind returns a highest score for the strongest hand', () => {
  let hand1 = new Hand('♣5', '♣5', '♥5', '♣5', '♣7');
  let hand2 = new Hand('♣8', '♣8', '♥8', '♣8', '♣4');
  let score = CompareHands.isFourOfAKind(hand1);
  let score2 = CompareHands.isFourOfAKind(hand2);
  expect(score2).toBeGreaterThan(score)

});