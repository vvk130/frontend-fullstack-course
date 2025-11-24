import { apiUrl, apiUrlWithoutApiWord } from '@/apiUrl';
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
      title="Login"
      disabledFields={[]}
      onSubmit={async (data) => {
        try {
          const res = await fetch(`${apiUrlWithoutApiWord}login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          const responseData = await res.json().catch(() => null);

        if (res.ok){
          fetch(`${apiUrl}user/wallet-by-username?username=${encodeURIComponent(data.email)}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          })
          .then((res) => res.json())
          .then((data) => {
            const userId = data.ownerId;    
            const walletId = data.id;      

            localStorage.setItem('horseappinfo.userId', userId ?? '');
            localStorage.setItem('horseappinfo.walletId', walletId ?? '');
          })
          .catch(() => {})

        }
        if (!res.ok) {
        if (responseData?.errors) {
            const allErrors = Object.entries(responseData.errors)
            .map(([field, messages]) => {
                const fieldName = field || 'Error'; 
                return `${fieldName}: ${(messages as string[]).join(', ')}`;
            })
            .join('\n');

            alert(`${responseData.title}\n${allErrors}`);
        } else {
            alert(responseData?.title || 'An unknown error occurred');
        }
          return;
        }
          alert('Login Successful!');
        } catch (err) {
          alert('Unexpected error occurred.');
          console.error(err);
        }
      }}
    />
  );
}
