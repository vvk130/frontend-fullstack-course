import { apiUrlWithoutApiWord } from '@/apiUrl';
import type { UserLoginDto } from '@/utils/dtos';
import BasicForm from './BasicForm';

export default function AuthForm() {
  const initialUser: UserLoginDto = {
    email: 'YourUserName@example.com',
    password: 'ExamplePassword123!',
  };

  return (
    <BasicForm<UserLoginDto>
      model={initialUser}
      title="Register"
      disabledFields={[]}
      onSubmit={async (data) => {
        try {
          const res = await fetch(`${apiUrlWithoutApiWord}register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          const responseData = await res.json().catch(() => null);

          if (!res.ok) {
            if (responseData?.errors) {
              alert(
                `${responseData.title}\n` +
                Object.entries(responseData.errors)
                  .map(([field, messages]) => `${field}: ${(messages as string[]).join(', ')}`)
                  .join('\n')
              );
            } else {
              alert(`Error ${res.status}: ${res.statusText}`);
            }
            return;
          }

          alert('Form submitted!');
        } catch (err) {
          alert('Unexpected error occurred.');
          console.error(err);
        }
      }}
    />
  );
}
