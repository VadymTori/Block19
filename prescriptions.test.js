// Import the necessary functions and variables from the JavaScript file
const {
  totalCost,
  withDiscount,
  withCoupon,
  timmy,
  sarah,
  rocky,
} = require("./prescriptions.js");

// ----------------Testing the totalCost() function----------------
describe("totalCost()", () => {
  // Test if the totalCost() function returns the correct total cost for sarah
  it("returns the correct total cost for sarah", () => {
    expect(totalCost(sarah.pricePerRefill, sarah.refills)).toBe(50);
  });

  // Test if the totalCost() function returns the correct total cost for timmy
  it("returns the correct total cost for timmy", () => {
    expect(totalCost(timmy.pricePerRefill, timmy.refills)).toBe(75);
  });
  // Test if the totalCost() function returns the correct total cost for rocky
  it("returns the correct total cost for rocky", () => {
    expect(totalCost(rocky.pricePerRefill, rocky.refills)).toBe(150);
  });
})


// ----------------Testing the withDiscount() function----------------
describe("withDiscount()", () => {
  // Test if the withDiscount() function returns the correct total cost with subscription discount for sarah
  it("returns the correct total cost with subscription discount for sarah", () => {
    expect(
      withDiscount(
        totalCost(sarah.pricePerRefill, sarah.refills),
        sarah.subscription
      )
    ).toBe(37.5);
  });

})

describe("withDiscount()", () => {
  // Test if the withDiscount() function returns the correct total cost with subscription discount for rocky
  it("returns the correct total cost with subscription discount for rocky", () => {
    expect(
      withDiscount(
        totalCost(rocky.pricePerRefill, rocky.refills),
        rocky.subscription
      )
    ).toBe(112.5);
  });
});

  // ----------------Testing the prescription properties----------------
  describe("Prescription Tests()", () => {
  // Test if rocky has prescription property with value "phenylephrine"
  it("Test if rocky has prescription property with value \"phenylephrine\"", () => {
      expect(rocky["prescription"]).toBe("phenylephrine");
    });
  });

  // ----------------Testing the pricePerRefill properties----------------

  describe("Priceperrefill Tests()", () => {
  // Test if rocky has pricePerRefill property with value 30
  it("Test if rocky has ricePerRefill property with value 30", () => {
    expect(rocky["pricePerRefill"]).toBe(30);
  });
});

  // ----------------Testing the refills properties----------------
describe("refills Tests()", () => {
  // Test if sarah has refills property with value 1
  it("Test if sarah has refills property with value 1", () => {
    expect(sarah["refills"]).toBe(1);
  });

  // Test if rocky has refills property with value 5
  it("Test if sarah has refills property with value 1", () => {
    expect(rocky["refills"]).toBe(5);
  });
});
  // ----------------Testing the subscription properties----------------
  describe("subscription Tests()", () => {
  // Test if timmy has subscription property with value false
  it("Test if timmy has subscription property with value false", () => {
    expect(timmy["subscription"]).toBe(false);
  });
});
  // ----------------Testing the coupon properties----------------
  describe("coupon Tests()", () => {
  // Test if timmy has coupon property with value true
  it("Test if timmy has coupon property with value true", () => {
    expect(timmy["coupon"]).toBe(true);
  });
});
  // ----------------Testing the coupon true properties with the total price----------------
  describe("coupon added Tests()", () => {
    // Test if timmy has a coupon discount 10$ to his total price
    it("Test if timmy has a coupon discount 10 to his total price", () => {
      expect(withCoupon((totalCost(timmy.pricePerRefill, timmy.refills)),timmy.coupon)).toBe(65);
    });
       // Test if sarah has not a coupon discount 10$ to her total price
       it("Test if timmy has a coupon discount 10 to his total price", () => {
        expect(withCoupon((totalCost(sarah.pricePerRefill, sarah.refills)),sarah.coupon)).toBe(50);
      });
  });