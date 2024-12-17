import { isEmpty } from "./is-empty";

export function isNotEmpty(
    value: any[] | { [key: string]: any } | string, // eslint-disable-line @typescript-eslint/no-explicit-any
): boolean {
    return !isEmpty(value);
}
