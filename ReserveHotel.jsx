export function ReserveHotel() {

    alert("🏨 Welcome to Star Hotel");

    let name = prompt("Enter Guest Name:");
    if (name === null || name.trim() === "") {
        alert("Reservation cancelled: Name required");
        return;
    }

    let roomType = prompt("Enter Room Type (Single / Double / Deluxe):");
    if (roomType === null || roomType.trim() === "") {
        alert("Reservation cancelled: Room type required");
        return;
    }

    // Convert days to number
    let days = Number(prompt("Enter Number of Days:"));
    if (isNaN(days) || days <= 0) {
        alert("Invalid number of days");
        return;
    }

    let pricePerDay;

    if (roomType.toLowerCase() === "single") {
        pricePerDay = 2000;
    } else if (roomType.toLowerCase() === "double") {
        pricePerDay = 3500;
    } else if (roomType.toLowerCase() === "deluxe") {
        pricePerDay = 5000;
    } else {
        alert("Invalid room type");
        return;
    }

    let total = pricePerDay * days;

    let confirmBooking = confirm(
        "Guest: " + name +
        "\nRoom Type: " + roomType +
        "\nDays: " + days +
        "\nTotal Amount: ₹" + total +
        "\n\nConfirm Reservation?"
    );

    if (confirmBooking) {
        alert(
            "✅ Reservation Successful!\n\n" +
            "Guest: " + name +
            "\nRoom: " + roomType +
            "\nDays: " + days +
            "\nAmount Paid: ₹" + total
        );
    } else {
        alert("❌ Reservation Cancelled");
    }
}
