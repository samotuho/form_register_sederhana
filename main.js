function jalankanFungsi() {
  const inputUsername = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;
  const inputConfirmPassword =
    document.getElementById("confirm_password").value;

  if (
    inputUsername === "" ||
    inputPassword === "" ||
    inputConfirmPassword === ""
  ) {
    document.getElementById("hasil").innerHTML = "Tidak boleh kosong!";
    return;
  } else if (inputPassword !== inputConfirmPassword) {
    document.getElementById("hasil").innerHTML =
      "Password & Confirm Password tidak sama!";
    return;
  } else {
    document.getElementById("hasil").innerHTML =
      "Selamat, kamu berhasil register!";
  }
}
