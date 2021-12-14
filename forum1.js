// Forum # 1

const canGiveBlood = (donor, receiver) => {
    // Exit if O- because blood type is universal
    if(donor==="O-") return true

    // Conditions for A+
    if((donor === "A+") && (receiver === "A+" || receiver === "AB+")) return true;

    // Conditions for B+
    if((donor === "B+") && (receiver === "B+" || receiver === "AB+")) return true;

    // Conditions for AB+ 
    if((donor === "AB+") && (receiver === "AB+")) return true;

    // Conditions for A-
    if((donor === "A-") && (receiver.charAt(0) === "A")) return true;

    // Conditions for B-
    if((donor === "B-") && ((receiver.charAt(0) === "B") || receiver.substring(0,2) ==="AB")) return true;

    // Conditions for AB-
    if((donor === "AB-") && (receiver.substring(0,2) === "AB")) return true;

    // Default to false if all true conditions fail.
    return false;
}

// Test variables
var donor = "B-";
var receiver = "AB+"

// Results
console.log(`Can ${donor} give blood to ${receiver}? ${canGiveBlood(donor, receiver)}`)

// Test variables
var donor = "A+";
var receiver = "AB+"

// Results
console.log(`Can ${donor} give blood to ${receiver}? ${canGiveBlood(donor, receiver)}`)