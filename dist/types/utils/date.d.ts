declare const date: {
    getDate(showZero?: boolean | undefined, sep?: string | undefined): string;
    getTime(showZero?: boolean | undefined, sep?: string | undefined): string;
    getDateAndTime(showZero?: boolean | undefined, dsep?: string | undefined, tse?: string | undefined): string;
    getWeek(prefix: string): string;
};
export { date };
