# YoguYogu Website - PRD Revisi

**Versi 1.1 | 27 Oktober 2026 | Status: fondasi implementasi**

## Ringkasan keputusan

YoguYogu adalah brand *dry yogurt bowl* untuk anak muda urban usia 18-28 tahun di Tangerang Selatan. Situs versi 1 adalah landing page satu halaman yang membangun selera dan kepercayaan, lalu mengarahkan pengunjung untuk melakukan pemesanan di WhatsApp. Situs ini bukan sistem checkout.

**Janji merek:** creamy, fresh, dan bisa dibuat sesuai mood pelanggan.

**Nada visual:** playful yang rapi - editorial, hangat, dan percaya diri; bukan anak-anak dan bukan meniru referensi National Geographic atau Apple.

## Sasaran rilis v1

1. Pengunjung memahami produk dalam kurang dari satu menit.
2. Pengunjung melihat harga awal dan tiga rasa produk.
3. Pengunjung dapat memulai chat pemesanan dalam maksimal dua interaksi setelah melihat menu.
4. Situs nyaman digunakan dari layar ponsel dan tetap ringan.

## Pengguna inti

Anisa, 23 tahun, mahasiswa atau pekerja muda di BSD/Tangerang Selatan. Ia terbiasa menemukan makanan dari Instagram/WhatsApp, ingin camilan yang terasa lebih baik dari dessert biasa, dan mengutamakan kemudahan pesan lewat ponsel.

## Ruang lingkup publik

| Bagian | Isi yang disetujui untuk publik | Tindakan pengguna |
| --- | --- | --- |
| Hero | Janji merek, visual produk, CTA menu/order | Scroll atau order |
| Cerita | Idea, opportunity, solution | Memahami pembeda |
| Menu | Honey Cloud, Berry Swirl, Oreo Crush; mulai Rp45.000 | Memilih rasa |
| Kualitas | Tekstur creamy, topping segar, pilihan personal | Membangun percaya |
| Proses | Source, Produce, Assemble, Deliver | Membangun percaya |
| Order | WhatsApp dan cakupan area | Mulai chat pesanan |

Konten bisnis internal - BMC, hasil evaluasi pemasok, proyeksi penjualan, risiko operasional, dan data tim - tidak dipublikasikan pada v1.

## Sistem desain

- **Biru langit → hijau pucat** `#BFE4F4 → #EAF4E8`: latar yang segar.
- **Navy** `#174B95`: struktur, heading, bingkai, dan CTA utama.
- **Krem** `#FAF7EF`: ruang bernapas dan kartu konten.
- **Merah** `#C74237`: aksen aksi dan penekanan.
- **Kuning** `#F2C230`: aksen kecil yang hangat.
- **Tipografi:** Paytone One untuk judul berkarakter, Nunito Sans untuk keterbacaan, dan DM Mono untuk label kecil.

Layout menggunakan ritme editorial: visual produk besar, frame warna, blok informasi bertumpuk, serta pergantian warna antarseksi. Interaksi terbatas pada reveal saat scroll, parallax ringan, dan feedback pilihan menu. Semua elemen harus tetap dapat dibaca tanpa animasi.

## Konten produk yang tervalidasi

| Varian | Deskripsi singkat pada website | Harga |
| --- | --- | --- |
| Honey Cloud | Yogurt creamy dengan golden honey | Mulai Rp45.000 |
| Berry Swirl | Yogurt creamy dengan berry sauce | Mulai Rp45.000 |
| Oreo Crush | Yogurt creamy dengan cookie crunch | Mulai Rp45.000 |

## Kriteria penerimaan

- Navigasi anchor: Cerita, Menu, Kualitas, dan Order.
- CTA WhatsApp berisi pesan awal; ketika rasa dipilih, pesan menyebut rasa tersebut.
- Tampilan responsif mulai dari 320px, dengan menu mobile yang mudah dijangkau.
- Gambar memiliki teks alternatif dan dimuat secara lazy di bawah hero.
- Animasi memakai `opacity` dan `transform`, serta menghormati `prefers-reduced-motion`.
- Tidak ada klaim kesehatan, angka penjualan, alamat, jam operasional, atau tautan marketplace yang belum dikonfirmasi.

## Data yang masih perlu diisi sebelum peluncuran

1. Nomor WhatsApp bisnis resmi (saat ini CTA membuka WhatsApp dengan pesan, tanpa nomor tujuan).
2. Tautan GoFood, ShopeeFood, dan akun media sosial resmi.
3. Titik booth/alamat dan jam operasional.
4. Daftar topping serta harga add-on yang telah disetujui.
5. Konfirmasi bahwa harga Rp45.000 tetap berlaku saat go-live.

## Implementasi dan pengukuran

Situs statis, tanpa akun dan tanpa pembayaran terintegrasi. Event yang disarankan setelah analytics ditambahkan: klik CTA order, pilihan varian, dan kedalaman scroll. Target teknis: LCP cepat pada koneksi seluler, kontras memadai, serta kompatibel dengan dua versi terbaru Chrome, Safari, Firefox, dan Edge.
