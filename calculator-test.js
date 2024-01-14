
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 50000,
    years: 4,
    rate: 6.8
  }
  expect(calculateMonthlyPayment(values)).toEqual('1192.68')
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});
