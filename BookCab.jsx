// cabBooking.js
export function BookCab() {

    alert("🚖 Welcome to Smart Cab Booking");

    let customerName = prompt("Enter Customer Name:");
    if (customerName === null || customerName.trim() === "") {
        alert("Booking cancelled: Customer name required");
        return;
    }

    let pickupLocation = prompt("Enter Pickup Location:");
    if (pickupLocation === null || pickupLocation.trim() === "") {
        alert("Booking cancelled: Pickup location required");
        return;
    }

    let dropLocation = prompt("Enter Drop Location:");
    if (dropLocation === null || dropLocation.trim() === "") {
        alert("Booking cancelled: Drop location required");
        return;
    }

    // ✅ FIX: handle Cancel separately, then convert to number
    let distanceInput = prompt("Enter Distance (in KM):");
    if (distanceInput === null) {
        alert("Booking cancelled");
        return;
    }

    let distance = Number(distanceInput);
    if (isNaN(distance) || distance <= 0) {
        alert("Invalid distance entered");
        return;
    }

    let ratePerKm = 15;
    let totalFare = distance * ratePerKm;

    let confirmBooking = confirm(
        "Customer Name: " + customerName +
        "\nPickup: " + pickupLocation +
        "\nDrop: " + dropLocation +
        "\nDistance: " + distance + " KM" +
        "\nTotal Fare: ₹" + totalFare +
        "\n\nDo you want to confirm cab booking?"
    );

    if (confirmBooking) {
        alert(
            "✅ Cab Booking Successful!\n\n" +
            "Customer: " + customerName +
            "\nRoute: " + pickupLocation + " → " + dropLocation +
            "\nFare Paid: ₹" + totalFare +
            "\n\nThank you for choosing Smart Cab!"
        );
    } else {
        alert("❌ Cab Booking Cancelled");
    }
}
