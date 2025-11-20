import GenericPaginatedList from '@/components/GenericPaginatedList';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/images')({
  component: Images,
})

function Images() {
return (
    <>
    <h1>Images Page</h1>
    <p>Here is a list of images:</p>
    <ImageFetch/>
  </>
);
};

export interface ImageDto {
  imgUrl: string;
}

function ImageFetch() {
  return (
    <GenericPaginatedList<ImageDto>
      url="api/stockImgs/paginated?"
      queryKey="images"
      renderItem={(horse: ImageDto) => (
        <div key={horse.imgUrl} className="horse-row">
          {horse.imgUrl ? (
            <img src={horse.imgUrl} className="horse-image" />
          ) : (
            <div className="no-image">No Image</div>
          )} {horse.imgUrl}
        </div>
      )}
    />
  );
}
