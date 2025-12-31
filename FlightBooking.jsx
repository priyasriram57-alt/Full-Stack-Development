import React from "react";
export function FlightBooking() {

    alert("✈️ Welcome to AirFly Ticket Booking");

    let name = prompt("Enter Passenger Name:");
    if (name === null || name.trim() === "") {
        alert("Booking cancelled: Name is required.");
        return;
    }

    let source = prompt("Enter Source City:");
    if (source === null || source.trim() === "") {
        alert("Booking cancelled: Source is required.");
        return;
    }

    let destination = prompt("Enter Destination City:");
    if (destination === null || destination.trim() === "") {
        alert("Booking cancelled: Destination is required.");
        return;
    }

    let tickets = prompt("Enter Number of Tickets:");
    if (tickets === null || tickets <= 0) {
        alert("Booking cancelled: Invalid number of tickets.");
        return;
    }

    let pricePerTicket = 5000;
    let totalAmount = tickets * pricePerTicket;

    let confirmBooking = confirm(
        "Passenger Name: " + name +
        "\nFrom: " + source +
        "\nTo: " + destination +
        "\nTickets: " + tickets +
        "\nTotal Amount: ₹" + totalAmount +
        "\n\nDo you want to confirm booking?"
    );

    if (confirmBooking) {
        alert(
            "✅ Booking Successful!\n\n" +
            "Passenger: " + name +
            "\nRoute: " + source + " → " + destination +
            "\nTickets: " + tickets +
            "\nAmount Paid: ₹" + totalAmount +
            "\n\nThank you for choosing AirFly!"
        );
    } else {
        alert("❌ Booking Cancelled.");
    }
}
