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

export const AlpacaColor = {
  White: 0,
  Beige: 1,
  LightFawn: 2,
  MediumFawn: 3,
  DarkFawn: 4,
  LightBrown: 5,
  MediumBrown: 6,
  DarkBrown: 7,
  BayBlack: 8,
  TrueBlack: 9,
  LightSilverGrey: 10,
  MediumSilverGrey: 11,
  DarkSilverGrey: 12,
  LightRoseGrey: 13,
  MediumRoseGrey: 14,
  DarkRoseGrey: 15,
} as const;

export const AlpacaColorLabels: Record<number, string> = {
  [AlpacaColor.White]: "White",
  [AlpacaColor.Beige]: "Beige",
  [AlpacaColor.LightFawn]: "Light Fawn",
  [AlpacaColor.MediumFawn]: "Medium Fawn",
  [AlpacaColor.DarkFawn]: "Dark Fawn",
  [AlpacaColor.LightBrown]: "Light Brown",
  [AlpacaColor.MediumBrown]: "Medium Brown",
  [AlpacaColor.DarkBrown]: "Dark Brown",
  [AlpacaColor.BayBlack]: "Bay Black",
  [AlpacaColor.TrueBlack]: "True Black",
  [AlpacaColor.LightSilverGrey]: "Light Silver Grey",
  [AlpacaColor.MediumSilverGrey]: "Medium Silver Grey",
  [AlpacaColor.DarkSilverGrey]: "Dark Silver Grey",
  [AlpacaColor.LightRoseGrey]: "Light Rose Grey",
  [AlpacaColor.MediumRoseGrey]: "Medium Rose Grey",
  [AlpacaColor.DarkRoseGrey]: "Dark Rose Grey",
};

export const AlpacaBreed = {
  Unknown: 0,
  Huacaya: 1,
  Suri: 2,
} as const;

export const AlpacaBreedLabels: Record<number, string> = {
  [AlpacaBreed.Huacaya]: "Huacaya",
  [AlpacaBreed.Suri]: "Suri",
};

export type Breed = typeof Breed[keyof typeof Breed];

export type Gender = typeof Gender[keyof typeof Gender];

export type Color = typeof Color[keyof typeof Color];

export type AlpacaColor = typeof AlpacaColor[keyof typeof AlpacaColor];

export type AlpacaBreed = typeof AlpacaBreed[keyof typeof AlpacaBreed];

export enum AdType {
  PaidAd,
  NormalAd,
  Auction
}

export type AdTypeKey = keyof typeof AdType;


