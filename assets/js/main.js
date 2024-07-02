document.addEventListener('DOMContentLoaded', () => {
    // Display current time in UTC
    const updateTime = () => {
        const now = new Date();
        const timeString = now.toUTCString().split(' ')[4];
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = timeString;
    };
    
    // Display current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayString = daysOfWeek[today.getUTCDay()];
    document.querySelector('[data-testid="currentDay"]').textContent = dayString;

    // Update the time every second
    setInterval(updateTime, 1000);
    updateTime();
});
