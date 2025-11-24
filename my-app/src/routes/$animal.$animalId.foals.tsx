import { createFileRoute, Link } from '@tanstack/react-router'
import { fetchItemById } from '@/fetch'
import type { AnimalDto, AnimalDtoMap, AnimalType } from '@/utils/dtos'
import { useLoaderData } from '@tanstack/react-router'
import GenericPaginatedList from '@/components/GenericPaginatedList'
import { Gender } from '@/utils/enums'

export const Route = createFileRoute('/$animal/$animalId/foals')({
  loader: async ({ params }) => {
    const { animal, animalId } = params

    const endpoint = `api/${animal}s/`
    const data = await fetchItemById(endpoint, animalId)

    console.log(endpoint);
    console.log(animalId);

    return { animal, data }
  },
  component: RouteComponent,
})

function getParentRole(gender: string | Gender): "Sire" | "Dam" {
  let numericGender: Gender

  if (typeof gender === "string") {
    numericGender = Gender[gender as keyof typeof Gender] 
  } else {
    numericGender = gender
  }

  switch (numericGender) {
    case Gender.Mare:
      return "Dam"
    default:
      return "Sire"
  }
}

function RouteComponent() {
  const loaderData = useLoaderData({ from: '/$animal/$animalId' })
  const { animal, data } = loaderData as {
    animal: AnimalType
    data: AnimalDtoMap[AnimalType]
  }

  const parentRole = getParentRole(data.gender as Gender)

return (
    <>
    <GenericPaginatedList<AnimalDto>
      url={`api/${animal}s/search?Filter.${parentRole}Id=${data.id}`}
      queryKey={`foals-${data.id}`}
      renderItem={(horse: AnimalDto) => (
        <div key={horse.id} className="horse-row">
          {horse.imgUrl ? (
            <img src={horse.imgUrl} alt={horse.name} className="horse-image" />
          ) : (
            <div className="no-image">No Image</div>
          )}
          <div className="horse-info">
          <Link
          to="/$animal/$animalId/info"
          params={{ animal, animalId: horse.id }}
        >
          {horse.id}
        </Link>
        — {horse.gender} 
          </div>
          <button className="btn" id="updateButton" type="button">
          <Link
          to="/$animal/$animalId/update"
          params={{ animal, animalId: horse.id }}
          >
            Update
            </Link>
          </button>
          <button className="btn" id="deleteButton" type="button">
          <Link
          to="/$animal/$animalId/delete"
          params={{ animal, animalId: horse.id }}
          >
            Delete
            </Link>
          </button>
        </div>
      )}
    />
    </>
  );
}

