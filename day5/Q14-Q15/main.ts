// store freinds name in a array and print a invitation message for tem one by one 
let invitation: string[]=[
    "Ali", "Sara", "Hammid", "Amna"
]
invitation.forEach(invite =>{
    console.log("Hi, "+invite+" Would you  like to come for dinner at 8'o clock..?");
})

// Q15 Answer:
let unableToAttend = "Hammid";
console.log(unableToAttend+ ` can't make it to dinner.`);

// Replace the guest
let newGuest = "Nida";
invitation[invitation.indexOf(unableToAttend)] = newGuest;

// New invitations
invitation.forEach(guest => {
    console.log(`Dear `+invitation+` would you like to join me for dinner?`);
});
console.log(invitation);