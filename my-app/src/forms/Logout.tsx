export default function LogoutForm() {
    function logout() {
        localStorage.removeItem("horseappinfo.userId");
        localStorage.removeItem("horseappinfo.walletId");
        localStorage.removeItem("horseappinfo.accessToken");
        window.location.href = "/";
    }

  return (
    <button onClick={logout}>
      Logout
    </button>
  );
}