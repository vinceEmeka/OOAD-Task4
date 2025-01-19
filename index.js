class User {
  constructor(userId, password) {
    this.userId = userId;
    this.password = password;
  }

  //static method to login
  static verifyLogin() {
    if (User.userId && User.password === User) {
      console.log("Login Success!!");
    }
  }
}

// Customer

class Customer {
  constructor(customerName, customerEmail, customerNumber) {
    this.customerName = customerName;
    this.customerEmail = customerEmail;
    this.customerNumber = customerNumber;
  }

  register() {
    console.log("Enter your details");
  }
  subcribe() {
    console.log("Pay here!!");
  }
}

// activeSubsciption class

class activeSubsciption {
  static(planName, planCost) {
    this.planName = planName;
    this.planCost = planCost;
  }

  subcribe() {
    console.log("Pay here!!");
  }

  renewSubscription() {
    subcribe(activeSubsciption.planName);
  }

  static expirationReminder() {
    console.log("You have 7 days before your plan expires");
  }
}

// subcriptionPlans Class

class subcriptionPlans {
  static(planName, planDuration, planCost) {
    this.planName = planName;
    this.planDuration = planDuration;
    this.planCost = planCost;
  }

  static subcribe() {
    console.log("Pay here!!");
  }
}

// Administrator class

class Administrator {
  constructor(adminName, email) {
    this.adminName = adminName;
    this.email = email;
  }

  static updateSubscriptionPlans() {}
  static updateActiveSubscription() {
    if (Customer.subcribe()) {
      console.log("new subscription alert");
    }
  }
}
