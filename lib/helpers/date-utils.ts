/**
 * Formats a date range in Portuguese
 * @param startDate - The start date (can be Date object or ISO string)
 * @param endDate - The end date (can be Date object or ISO string)
 * @returns Formatted date range string
 */
export function formatDateRange(startDate: Date | string, endDate: Date | string): string {
    // Convert to Date objects if they are strings
    const startDateObj = typeof startDate === 'string' ? new Date(startDate) : startDate;
    const endDateObj = typeof endDate === 'string' ? new Date(endDate) : endDate;

    const startDay = startDateObj.getDate();
    const endDay = endDateObj.getDate();
    const startMonth = startDateObj.toLocaleString('pt-BR', {month: 'long'});
    const endMonth = endDateObj.toLocaleString('pt-BR', {month: 'long'});
    const startYear = startDateObj.getFullYear();
    const endYear = endDateObj.getFullYear();

    if (startYear !== endYear) {
        return `${startDay} de ${startMonth}, ${startYear} - ${endDay} de ${endMonth}, ${endYear}`;
    } else if (startMonth !== endMonth) {
        return `${startDay} de ${startMonth} - ${endDay} de ${endMonth}, ${startYear}`;
    } else if (startDay !== endDay) {
        return `${startDay}-${endDay} de ${startMonth}, ${startYear}`;
    } else {
        return `${startDay} de ${startMonth}, ${startYear}`;
    }
}

/**
 * Creates ISO date string with proper time element formatting
 * @param date - The date to format (can be Date object or ISO string)
 * @returns ISO date string
 */
export function formatISODate(date: Date | string): string {
    if (typeof date === 'string') {
        return date;
    }
    return date.toISOString();
}
