export function dateStringToDate(dateString: string): Date {
    // 28/10/2020 => ['28', '10', '2020']
    const dateParts = dateString.split('/').map((value: string): number => {
        return parseInt(value);
    });

    // Year, Month (0-based so - 1), Day
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}
