/**
 * Practice module for polymorphism in JavaScript
 * 
 * [Polymorphism](https://www.educative.io/edpresso/what-is-polymorphism)
 * Polymorphism is an object-oriented programming concept that refers to the 
 * ability of a variable, function or object to take on multiple forms. In a programming 
 * language exhibiting polymorphism, class objects belonging to the same hierarchical tree 
 * (inherited from a common parent class) may have functions with the same name, but with 
 * different behaviors.
 */

class CreditCardCheckout {
    static charge(amount) {
      // Complex code to charge ${amount} to the credit card.
    }
}

class DebitCardCheckout {
    static charge(amount) {
    // Complex code to charge ${amount} to the debit card.
    }
}
class CashCheckout {
    static charge(amount) {
    // Complex code to put ${amount} into the cash drawer.
    }
}

const customers = [
    {
        amount: 75.00,
        paymentMethod: CreditCardCheckout,
    },
    {
        amount: 50.00,
        paymentMethod: DebitCardCheckout,
    },
    {
        amount: 25.00,
        paymentMethod: CashCheckout,
    },
];

customers.forEach(({ amount, paymentMethod}) => {
    paymentMethod.charge(amount);
});