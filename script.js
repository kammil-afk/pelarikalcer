function hitungRekomendasi() {
  const jarak = parseInt(document.getElementById("jarak").value);
  const kecepatan = parseInt(document.getElementById("kecepatan").value);
  const kali = parseInt(document.getElementById("intensitas").value);

  if (isNaN(jarak) || isNaN(kecepatan) || isNaN(kali)) {
    alert("Silakan isi semua pilihan terlebih dahulu!");
    return;
  }

  let bobotIntensitas = kali <= 2 ? 1 : (kali <= 4 ? 2 : 3);
  let total = jarak + kecepatan + bobotIntensitas;

  let sepatu, alasan;
  if (total <= 4) {
    sepatu = "Sepatu Netral (Daily Trainer)";
    alasan = "Cocok untuk pelari santai dengan jarak dan intensitas ringan.";
  } else if (total <= 6) {
    sepatu = "Sepatu Serbaguna (Hybrid Trainer)";
    alasan = "Pas untuk latihan rutin dan jarak sedang.";
  } else if (total <= 8) {
    sepatu = "Sepatu Performa (Racing/Premium)";
    alasan = "Ideal untuk pelari cepat yang sering berlatih.";
  } else {
    sepatu = "Sepatu Tahan Lama (High Cushion)";
    alasan = "Diperuntukkan bagi pelari jarak jauh dan intensitas tinggi.";
  }

  document.getElementById("hasil").style.display = "block";
  document.getElementById("rekomendasi").textContent = "Rekomendasi: " + sepatu;
  document.getElementById("alasan").textContent = "Alasan: " + alasan;
}

function resetForm() {
  document.getElementById("formSepatu").reset();
  document.getElementById("hasil").style.display = "none";
}
