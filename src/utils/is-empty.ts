export function isEmpty(
    value: any[] | { [key: string]: any } | string, // eslint-disable-line @typescript-eslint/no-explicit-any
): boolean {
    if (Array.isArray(value)) {
        return value.length === 0;
    } else if (value && typeof value === "object") {
        return Object.keys(value).length === 0;
    }

    return value === "";
}
