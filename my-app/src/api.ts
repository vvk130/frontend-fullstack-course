
import type { HorseListResponse } from './utils/dtos'

export const API_URL = "http://localhost:5263"

export async function getHorses(): Promise<HorseListResponse> {
  const res = await fetch('http://localhost:5263/api/Horses/search?Pagination.PageNumber=1&Pagination.PageSize=10&Filter.OwnerId=f47ac10b-58cc-4372-a567-0e02b2c3d479');

  if (!res.ok) {
    throw new Error('Failed to fetch horses');
  }

  return res.json();
}

export async function fetchItems<T>(url: string): Promise<T[]> {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
