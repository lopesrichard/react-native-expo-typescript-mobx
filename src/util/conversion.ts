export const percToInt = (perc: string): number => parseInt(perc.replace('%', ''), 10) / 100;
