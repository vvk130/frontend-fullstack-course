
import type { HorseShortDto } from './utils/dtos'

export const API_URL = "http://localhost:5263"

export async function getHorses(): Promise<HorseShortDto[]> {
  const res = await fetch('http://localhost:5263/api/horses');

  if (!res.ok) {
    throw new Error('Failed to fetch horses');
  }

  return res.json();
}
