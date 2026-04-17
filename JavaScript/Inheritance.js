// class Parent {
//     constructor(name) {
//         this.name = name;    
//         this.parentMethod();
//     }
//     parentMethod() {
//         console.log(`my name is ${this.name}`);
//     }
// }
// class Child extends Parent {}
// let child = new Child("David");
// child.parentMethod(); // my name is David


class IPLTicket {
    constructor(name) {
        this.name = name;
    }
    enterStadium() {
        console.log(`${this.name} has entered the stadium 🏟️🏟️`);
    }

    watchMatch() {
        console.log(`${this.name} is watching the match`);
    }
     
}
 // VIP  Ticket
 class VIPTicket extends IPLTicket {
    betterView() {
        console.log(`${this.name} has a better view of the match`);
    }

 }
 // premium Ticket
class PremiumTicket extends IPLTicket {
    betterView() {
        console.log(`${this.name} has VIP access to the match💛`);
    }
    loungeAccess() {
        console.log(`${this.name} has access to the VIP lounge🍻`);
    }
    meetPLayers() {
        console.log(`${this.name} can meet the players after the match 🤝`);
    }
}

const vip = new VIPTicket("Dhanush");
vip.enterStadium(); // Dhanush has entered the stadium 🏟️🏟️
vip.watchMatch(); // Dhanush is watching the match
vip.betterView(); // Dhanush has a better view of the match

console.log("--------------------------------------------------");

const premium = new PremiumTicket("Priya");
premium.enterStadium(); // Priya has entered the stadium 🏟️🏟️
premium.betterView(); // Priya has VIP access to the match💛
premium.loungeAccess(); // Priya has access to the VIP lounge🍻
premium.meetPLayers(); // Priya can meet the players after the match 🤝
premium.watchMatch(); // Priya is watching the match

//child class (Overriding the method of parent class)
class VIPTicket extends IPLTicket {
  betterView() {
    console.log(`${this.name} has a better view of the match`);
  }
}
const vip1 = new VIPTicket("Mahesh");
vip1.betterView();
