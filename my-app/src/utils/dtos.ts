import {Gender, Breed} from "./enums"

export interface HorseShortDto {
id: string;       
name: string;
imgUrl: string | null;
}

export interface SalesAdCreateDto {
  price: number;
  endDate: string;
  horseId: string; 
  ownerId: string; 
}

export interface WalletCreateDto {
money: number;       
ownerId: string; 
}

// export enum CompetitionType {

// }

// export interface CompetitionDto {
// id: string;
// name: string;
// competitionType: CompetitionType;
// endTime: string;   
// }

export interface FoalHorseRequestDto {
sireId: string;
damId: string;
}

export interface FileUploadRequestDto {
file: File;  
}

export interface HorseFilterDto {
genders?: Gender[];  
breeds?: Breed[];    
minAge?: number;     
maxAge?: number;     
}

export interface ItemCreatedEvent {
itemId: string;
itemName: string;
}

export type HorseListResponse = {
  items: HorseShortDto[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
};



