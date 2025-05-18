/**
 * Formats a date range in Portuguese
 * @param startDate - The start date
 * @param endDate - The end date
 * @returns Formatted date range string
 */
export function formatDateRange(startDate: Date, endDate: Date): string {
    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    const startMonth = startDate.toLocaleString('pt-BR', {month: 'long'});
    const endMonth = endDate.toLocaleString('pt-BR', {month: 'long'});
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();

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
 * @param date - The date to format
 * @returns ISO date string
 */
export function formatISODate(date: Date): string {
    return date.toISOString();
}
