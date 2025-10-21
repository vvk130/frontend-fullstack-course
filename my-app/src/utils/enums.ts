export const Color = {
  Chestnut: 0,
  Bay: 1,
  Black: 2,
  Gray: 3,
  Palomino: 4,
  Buckskin: 5,
  Roan: 6,
  Dun: 7,
  Cremello: 8,
  Perlino: 9,
  Grullo: 10,
  Pinto: 11,
  Appaloosa: 12,
} as const;

export const Gender = {
  Mare: 0,
  Stallion: 1,
  Gelding: 2,
} as const;

export const Breed = {
  Unknown: 0,
  Arabian: 1,
  Thoroughbred: 2,
  QuarterHorse: 3,
  Andalusian: 4,
  Appaloosa: 5,
  Mustang: 6,
  Friesian: 7,
  Hanoverian: 8,
  Clydesdale: 9,
  Shire: 10,
  Belgian: 11,
  Percheron: 12,
  Paint: 13,
  ShetlandPony: 14,
  WelshPony: 15,
  Icelandic: 16,
  Fjord: 17,
  AkhalTeke: 18,
  Lusitano: 19,
  Finnhorse: 20,
} as const;

export const ColorLabels: Record<Color, string> = {
  [Color.Chestnut]: 'Chestnut',
  [Color.Bay]: 'Bay',
  [Color.Black]: 'Black',
  [Color.Gray]: 'Gray',
  [Color.Palomino]: 'Palomino',
  [Color.Buckskin]: 'Buckskin',
  [Color.Roan]: 'Roan',
  [Color.Dun]: 'Dun',
  [Color.Cremello]: 'Cremello',
  [Color.Perlino]: 'Perlino',
  [Color.Grullo]: 'Grullo',
  [Color.Pinto]: 'Pinto',
  [Color.Appaloosa]: 'Appaloosa',
};

export const GenderLabels: Record<Gender, string> = {
  [Gender.Mare]: 'Mare',
  [Gender.Stallion]: 'Stallion',
  [Gender.Gelding]: 'Gelding',
};

export const BreedLabels: Record<Breed, string> = {
  [Breed.Unknown]: 'Unknown',
  [Breed.Arabian]: 'Arabian',
  [Breed.Thoroughbred]: 'Thoroughbred',
  [Breed.QuarterHorse]: 'Quarter Horse',
  [Breed.Andalusian]: 'Andalusian',
  [Breed.Appaloosa]: 'Appaloosa',
  [Breed.Mustang]: 'Mustang',
  [Breed.Friesian]: 'Friesian',
  [Breed.Hanoverian]: 'Hanoverian',
  [Breed.Clydesdale]: 'Clydesdale',
  [Breed.Shire]: 'Shire',
  [Breed.Belgian]: 'Belgian',
  [Breed.Percheron]: 'Percheron',
  [Breed.Paint]: 'Paint',
  [Breed.ShetlandPony]: 'Shetland Pony',
  [Breed.WelshPony]: 'Welsh Pony',
  [Breed.Icelandic]: 'Icelandic',
  [Breed.Fjord]: 'Fjord',
  [Breed.AkhalTeke]: 'Akhal-Teke',
  [Breed.Lusitano]: 'Lusitano',
  [Breed.Finnhorse]: 'Finnhorse',
};


export type Breed = typeof Breed[keyof typeof Breed];

export type Gender = typeof Gender[keyof typeof Gender];

export type Color = typeof Color[keyof typeof Color];