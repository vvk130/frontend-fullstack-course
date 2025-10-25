import {Gender, Breed, AdType} from "./enums"

export interface HorseShortDto {
breed: keyof typeof Breed;
gender: keyof typeof Gender;
id: string;       
name: string;
imgUrl: string | null;
}

export interface CompDto {
  id: string; 
  endTime: string; 
}

export interface WalletDto {
  id: string; 
  balance: string; 
}

export interface HorseCompDto {
horseId: string;
totalMoneyWon: number;
averageRanking: number;
bestRanking: number;
compEntriesCount: number;     
}

export interface SalesAdCreateDto {
  price: number;
  endDate: string;
  horseId: string; 
  ownerId: string; 
}

export interface SalesDto {
  id: string;
  type: keyof typeof AdType;
  price: number;
  endDate: string;
  ownerId: string;
  horse: HorseShortDto;  
}

export interface WalletCreateDto {
money: number;       
ownerId: string; 
}

export interface HorseSearchDto {
  genders?: Gender[];      
  breeds?: Breed[];        
  minAge?: number;        
  maxAge?: number;         
  ownerId?: string;        
  sireId?: string;         
  damId?: string;         
}

export interface AdSearchDto extends HorseSearchDto {
  maxPrice?: number;    
  endTimeAfter: Date;       
}

export interface CompetitionSearchDto {    
  endTimeAfter: Date;       
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

export interface QuestionOptionDto {
  text: string;
  isRightAnswer: boolean;
}

export interface QuestionDto {
  id: string;
  questionSentence: string;
  options: QuestionOptionDto[];
  difficulty: number; 
}

export interface HorseShortDto {
  id: string;
  name: string;
  imgUrl: string | null;
  breed: keyof typeof Breed;
  gender: keyof typeof Gender;
}

export interface HorseDto extends HorseShortDto {
  age: number; 
  color: string;
  capacity: number;
  relationship: number;
  energy: number;
  height: number;
  ownerId: string;
  sireId: string | null;
  damId: string | null;
  qualities: {
    strength: number;
    agility: number;
    endurance: number;
    speed: number;
    intelligence: number;
    stamina: number;
    jumpingAbility: number;
  };
  fears: Array<{
    fearItem: string;
    discovered: boolean;
    severity: number;
  }>;
  personalities: Array<{
    personalityTrait: string;
    severity: number;
    discovered: boolean;
  }>;
}

