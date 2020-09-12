export function calculatePrice(bath, frequency) {
    const hourlyRate = 75
    let time = bath * 1
    let softTotal = hourlyRate * time

    if (frequency === "One Time") {
        return softTotal.toFixed(0) + ".00"
    } else if (frequency === "Every 4 Weeks") {
        return (softTotal - softTotal * 0.10).toFixed(0) + ".00"
    } else if (frequency === "Every 3 Weeks") {
        return (softTotal - softTotal * 0.15).toFixed(0) + ".00"
    } else if (frequency === "Every 2 Weeks") {
        return (softTotal - softTotal * 0.25).toFixed(0) + ".00"
    } else if (frequency === "Every Week") {
        return (softTotal - softTotal * 0.30).toFixed(0) + ".00"
    }
}