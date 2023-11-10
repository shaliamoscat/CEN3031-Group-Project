import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge" 
export function cn(...inputs: ClassValue[]) {
    // turns horiz padding and vert padding into a single value
    // px-2 py-2 => p-2
    // it merges and handles conflict by merging instead of overwriting
    return twMerge(clsx(inputs))
}
