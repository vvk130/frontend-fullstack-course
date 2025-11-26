export default function LogoutForm({walletId}: {walletId: string | null}) {
    function logout() {
        localStorage.removeItem("horseappinfo.userId");
        localStorage.removeItem("horseappinfo.walletId");
        window.location.href = "/";
    }

  return (
    <button onClick={logout}>
      Logout
    </button>
  );
}