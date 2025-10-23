
import type { HorseListResponse } from './utils/dtos'

export const API_URL = "http://localhost:5263"

export async function getHorses(): Promise<HorseListResponse> {
  const res = await fetch('http://localhost:5263/api/Horses/paginated?PageNumber=10');

  if (!res.ok) {
    throw new Error('Failed to fetch horses');
  }

  return res.json();
}
