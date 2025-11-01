import type { HorseShortDto } from '@/utils/dtos'
import HorseCreateForm from '@/components/forms/HorseCreateForm'
import HorseEditForm from '@/components/forms/HorseEditForm'
import { AlpacaBreed, AlpacaBreedLabels, Breed, BreedLabels, Gender, GenderLabels } from './enums'

export const modelRegistry = {
  horses: {
    endpoint: 'horses/',
    displayName: 'Horse',
    createFormComponent: HorseCreateForm,
    editFormComponent: HorseEditForm,
    sample: {
      id: '',
      name: '',
      imgUrl: '',
      breed: "Unknown",
      gender: "Mare",
    } as HorseShortDto,
    enums: {
      breed: { values: Breed, labels: BreedLabels },
      gender: { values: Gender, labels: GenderLabels},
    },
  }
}
