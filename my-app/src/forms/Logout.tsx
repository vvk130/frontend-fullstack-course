export default function LogoutForm() {
  function logout() {
    localStorage.removeItem("horseappinfo.userId");
    localStorage.removeItem("horseappinfo.walletId");

    alert("Logout successful!");
  }

  return (
    <button onClick={logout}>
      Logout
    </button>
  );
}
