declare const utils: {
    getTodayDate: () => Date;
    getDate(showZero?: boolean | undefined, sep?: string | undefined): string;
    getTime(showZero?: boolean | undefined, sep?: string | undefined): string;
    getDateAndTime(showZero?: boolean | undefined, dsep?: string | undefined, tse?: string | undefined): string;
};
export { utils };
