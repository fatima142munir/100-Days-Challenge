// Q16: you have got new big table add more frnds i list 
var guests = ["Ali", "Sara", "Mateen", "Laila", "Fiza", "Salma"];
// console.log("I found big table now... lets add more friends.");
// guest.unshift("Urooj");
// guest.splice(2, 0, "Ulfat"); 
// guest.push("Rabica");
// guest.forEach(invite => {
//     console.log("Hi "+invite +" Would you like to come for dinner at 8'o clock..?");
// })
// // Q17: New big table is cancelled remove some frnds in list 
// guest.shift();
// guest.splice(2,2);
// guest.forEach(invite => {
//      console.log("Hi "+invite +" Would you like to come for dinner at 8'o clock..?");
// })
// // Q17: New big table is cancelled remove some frnds in list 
console.log("Shrinking Guest List");
// Selecting only two guests from the list
var selectedGuests = guests.slice(0, 2);
var cancelledGuests = guests.slice(2, 6);
cancelledGuests.forEach(function (canGuest) {
    console.log("Sorry, Dear " + canGuest + " I can't invite you to dinner");
});
// Notifying selected guests
selectedGuests.forEach(function (guest) {
    console.log("Dear " + guest + " , unfortunately, the table won't arrive in time, and we can only invite two guests. You are still invited!");
});
