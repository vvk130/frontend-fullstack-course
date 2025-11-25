// import { useQueryClient } from "@tanstack/react-query";

// export default function LogoutForm({walletId}: {walletId: string | null}) {
//     const queryClient = useQueryClient();
//     function logout() {
//         queryClient.invalidateQueries({ queryKey: ['wallet-balance', walletId] });
//         localStorage.removeItem("horseappinfo.userId");
//         localStorage.removeItem("horseappinfo.walletId");
//         alert("Logout successful!");
//     }

//   return (
//     <button onClick={logout}>
//       Logout
//     </button>
//   );
// }
