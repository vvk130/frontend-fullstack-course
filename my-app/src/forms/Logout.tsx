export default function LogoutForm() {
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