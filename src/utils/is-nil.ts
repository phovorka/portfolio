/* eslint-disable @typescript-eslint/no-explicit-any */
export function isNil(value: any): value is null | undefined {
    return value === null || value === undefined;
}
