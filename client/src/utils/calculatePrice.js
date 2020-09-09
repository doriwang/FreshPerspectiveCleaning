export function calculatePrice(bath, frequency) {
    const hourlyRate = 75
    let time = bath * 1
    let softTotal = hourlyRate * time
   
    if (frequency === "One Time") {
        return softTotal
    } else if (frequency === "Every 4 Weeks") {
        return softTotal - softTotal * 0.10
    } else if (frequency === "Every 3 Weeks") {
        return softTotal - softTotal * 0.15
    } else if (frequency === "Every 2 Weeks") {
        return softTotal - softTotal * 0.25
    } else if (frequency === "Every Week") {
        return softTotal - softTotal * 0.30
    }
}