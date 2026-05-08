// skipping RAJA
// swiggy example

// order food
// wait for the food to be prepared
// fining the delivery partner
//out for delivery
// food is delivered

function orderFood(callback) {
  setTimeout(() => {
    console.log("Ordering the food");
    callback();
  }, 6000);
}
function prepareFood(callback) {
  setTimeout(() => {
    console.log("Food is being prepared");
    callback();
  }, 5000);
}
function findDeliveryPartner(callback) {
  setTimeout(() => {
    console.log("Finding the delivery partner");
    callback();
  }, 4000);
}
function outForDelivery(callback) {
  setTimeout(() => {
    console.log("Food is out for delivery");
    callback();
  }, 3000);
}
function foodDelivered() {
  setTimeout(() => {
    console.log("food is delivered");
  }, 2000);
}
// orderFood();
// prepareFood();
// findDeliveryPartner();
// outForDelivery();
// foodDelivered();

orderFood(() => {
  prepareFood(() => {
    findDeliveryPartner(() => {
      outForDelivery(() => {
        foodDelivered();
      });
    });
  });
});
