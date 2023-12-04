import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
// referenced from https://youtu.be/ucX2zXAZ1I0 
// clsx is a utility function that addresses
// merging conflict 

export function cn(...inputs: ClassValue[]) {
  // twMerge is a tailwind utility function that
  // merges padding ex: px-5 py-5 => p-5
  return twMerge(clsx(inputs))
}
