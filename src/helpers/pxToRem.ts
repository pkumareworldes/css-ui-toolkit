/**
 * Converts a pixel value to rem.
 * @param px - The pixel value to convert.
 * @param baseFontSize - The base font size in pixels (default is 16px).
 * @returns The equivalent value in rem as a string.
 * @throws Error if the input values are not valid positive numbers.
 */
export default function pxToRem(px: number, baseFontSize: number = 16): string {
    if (typeof px !== "number" || typeof baseFontSize !== "number" || baseFontSize <= 0) {
        throw new Error("Both px and baseFontSize must be positive numbers.");
    }
    const remValue = px / baseFontSize;
    return `${remValue}rem`;
}
