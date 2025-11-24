import { apiUrl } from '@/apiUrl';
import BasicForm from './BasicForm';
import { useQueryClient } from '@tanstack/react-query';
import { handleApiErrors } from '@/utils/handleApiErrors';

export default function AuthForm() {
    const queryClient = useQueryClient();
    interface ImgDto {
    imgUrl: string;
    }

    const initialUrl: ImgDto = {
        imgUrl: 'add url',
    };

  return (
    <BasicForm<ImgDto>
      model={initialUrl}
      title="Create puzzle from image url (Image needs to exist in cloudinary, choose image url from imgGallery"
      disabledFields={[]}
      onSubmit={async (data) => {
        
        try {
          const res = await fetch(`${apiUrl}puzzle/generate-puzzle`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          const responseData = await res.json().catch(() => null);

          if (!res.ok || (responseData?.validationErrors && Object.keys(responseData.validationErrors).length > 0)) {
            handleApiErrors(responseData, res.status, res.statusText);
            return;
          }

          queryClient.invalidateQueries({ queryKey: ['puzzles'] });
          alert('Creation Successful!');
        } catch (err) {
          alert('Unexpected error occurred.');
          console.error(err);
        }
      }}
    />
  );
}
