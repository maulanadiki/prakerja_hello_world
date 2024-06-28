## Daftar Hook UseState
1. idCOunt
2. countDelete
3. showAlert
4. data
5. lgShow
6. isSubmitted
7. hasError

## Daftar Function component
8. handleChange
9. handleSubmit
10. handleReset
11. handleKeyup
12. handleDelete
13. useEffect

## Penjelasan setiap Komponen
1. digunakan untuk membuat id yang akan di simpan pada data dengan default angka 0 sebelum di gunakan, dan ketika di submit, akan bertambah 1
2. digunakan untuk menghitung jumlah data yang di hapus dengan default angka 0
3. untuk menampilkan alert berhasil disimpan dengan nilai boolean dan default dengan false
4. komponen untuk menyimpan data yang berhasil di submit
5. digunakan untuk menampilkan modal bootstrap dengan nilai boolean dan default false
7. digunakan untuk menampilkan alert error atau gagal di simpan
8. digunakan untuk menampilkan data yang sedang di pilih dalam inputan dan di tampilkan di area preview
9. digunakan untuk menyimpan data ke component data, terdapat validator form untuk menampilkan alert yang sesuai
10. digunakan untuk menghapus inputan yang ada
11. digunakan untuk menampilkan data yang sedang di input dan di tampilkan di area preview
12. untuk menghapus data yang telah di submit di bagian modal
13. useEffect ini di gunakan untuk memastikan apakah sudah di submit atau belum, dan jika ada alert yang muncul, akan hilang secara otomatis dalam waktu 2 detik