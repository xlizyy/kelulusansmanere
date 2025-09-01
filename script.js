        // --- Mock Student Data ---
        const studentData = {
        "9220": { nama: "Adimas Aji Kuncoro Yekti", kelas: "XII A", gender: "Laki-laki", tempatLahir: "Malang", ttl: "18 Juni 2007", status: "LULUS" },
        "9256": { nama: "Anggelina Putri Anggaeni", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "11 November 2007", status: "LULUS" },
        "9284": { nama: "Aurel Raisya Ramadhany", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "18 September 2008", status: "LULUS" },
        "9291": { nama: "Aziza Caya Zervinda", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "06 September 2008", status: "LULUS" },
        "9319": { nama: "Christian Febriano Osiyo", kelas: "XII A", gender: "Laki-laki", tempatLahir: "Malang", ttl: "19 Februari 2008", status: "LULUS" },
        "9333": { nama: "Danita Aprilia Alfiyana", kelas: "XII A", gender: "Perempuan", tempatLahir: "Surabaya", ttl: "02 April 2008", status: "LULUS" },
        "9341": { nama: "Devina Aurellia Zahra", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "02 Februari 2008", status: "LULUS" },
        "9345": { nama: "Diandra Evan Wiantama", kelas: "XII A", gender: "Laki-laki", tempatLahir: "Bondowoso", ttl: "16 Juli 2007", status: "LULUS" },
        "9359": { nama: "Elen Sofingga Heranda", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "28 April 2008", status: "LULUS" },
        "9360": { nama: "Elma Zahrotul Ulya", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "01 Agustus 2008", status: "LULUS" },
        "9385": { nama: "Fayruz Chayyara Alima", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "06 Februari 2008", status: "LULUS" },
        "9396": { nama: "Grahita Nadhufa Kumala", kelas: "XII A", gender: "Perempuan", tempatLahir: "Jakarta", ttl: "27 September 2007", status: "LULUS" },
        "9406": { nama: "Hexa Diega Inanta", kelas: "XII A", gender: "Laki-laki", tempatLahir: "Malang", ttl: "15 Maret 2008", status: "LULUS" },
        "9414": { nama: "Inez Yandradwita", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "08 Agustus 2008", status: "LULUS" },
        "9420": { nama: "Jafar Makhroby", kelas: "XII A", gender: "Laki-laki", tempatLahir: "Malang", ttl: "25 Januari 2008", status: "LULUS" },
        "9427": { nama: "Jessica Aprillia Anandha", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "30 April 2008", status: "LULUS" },
        "9436": { nama: "Keisya Enggar Hastami", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "01 Agustus 2007", status: "LULUS" },
        "9441": { nama: "Khaylila Widya Tasyakti", kelas: "XII A", gender: "Perempuan", tempatLahir: "Blitar", ttl: "06 Januari 2008", status: "LULUS" },
        "9443": { nama: "Kleri Febiola Anatasya", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "18 Desember 2007", status: "LULUS" },
        "9445": { nama: "Lazuardhi Putra Adhatama", kelas: "XII A", gender: "Laki-laki", tempatLahir: "Malang", ttl: "21 Desember 2007", status: "LULUS" },
        "9468": { nama: "Mayang Natania", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "04 November 2007", status: "LULUS" },
        "9520": { nama: "Nashwa Leilani Putri", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "13 Mei 2008", status: "LULUS" },
        "9523": { nama: "Naya Bawon Trisnawati", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "28 September 2007", status: "LULUS" },
        "9551": { nama: "Rakadenta Aruna Mahardika", kelas: "XII A", gender: "Laki-laki", tempatLahir: "Malang", ttl: "05 Juni 2007", status: "LULUS" },
        "9561": { nama: "Rhido Ervansyah", kelas: "XII A", gender: "Laki-laki", tempatLahir: "Malang", ttl: "28 Juli 2007", status: "LULUS" },
        "9608": { nama: "Tara Anjani", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "04 Oktober 2007", status: "LULUS" },
        "9610": { nama: "Theofilus Rainheart Prasetyo", kelas: "XII A", gender: "Laki-laki", tempatLahir: "Malang", ttl: "20 Maret 2008", status: "LULUS" },
        "9611": { nama: "Thoriq Azizy", kelas: "XII A", gender: "Laki-laki", tempatLahir: "Malang", ttl: "05 Maret 2008", status: "LULUS" },
        "9613": { nama: "Tifanny Adonia Febriyani Kurniawan", kelas: "XII A", gender: "Perempuan", tempatLahir: "Denpasar", ttl: "09 Februari 2008", status: "LULUS" },
        "9618": { nama: "Vellanie Feyruz Khalisa", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "28 Agustus 2007", status: "LULUS" },
        "9621": { nama: "Vicky Arma Bella", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "09 September 2007", status: "LULUS" },
        "9627": { nama: "Wilda Bulan Okta", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "14 Oktober 2007", status: "LULUS" },
        "9641": { nama: "Yusuf Ibnu Arrayyan", kelas: "XII A", gender: "Laki-laki", tempatLahir: "Malang", ttl: "02 Mei 2008", status: "LULUS" },
        "9642": { nama: "Zafira Cahya Ayu Ristantia", kelas: "XII A", gender: "Perempuan", tempatLahir: "Malang", ttl: "28 Juli 2007", status: "LULUS" },
        "9218": { nama: "Abel Citra Cahyanti", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "31 Oktober 2007", status: "LULUS" },
        "9223": { nama: "Adinda Naraysha", kelas: "XII B", gender: "Perempuan", tempatLahir: "Depok", ttl: "14 Februari 2008", status: "LULUS" },
        "9232": { nama: "Aisyah Azzura Azzahra", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "24 Maret 2008", status: "LULUS" },
        "9243": { nama: "Alya Anindya Ramadani", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "29 September 2007", status: "LULUS" },
        "9252": { nama: "Angelica Jasmine", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "25 April 2008", status: "LULUS" },
        "9308": { nama: "Carissa Faiqotul Hima", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "19 April 2008", status: "LULUS" },
        "9320": { nama: "Cincin Galuh Mustika", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "02 Juni 2008", status: "LULUS" },
        "9322": { nama: "Claodya Celcia Salsabela", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "05 September 2007", status: "LULUS" },
        "9332": { nama: "Daniel Bagus Husada Palbudi", kelas: "XII B", gender: "Laki-laki", tempatLahir: "Madiun", ttl: "23 Juli 2007", status: "LULUS" },
        "9335": { nama: "Davis Abiyyu Azhar", kelas: "XII B", gender: "Laki-laki", tempatLahir: "Malang", ttl: "21 Juli 2007", status: "LULUS" },
        "9347": { nama: "Dikky Subiyanto", kelas: "XII B", gender: "Laki-laki", tempatLahir: "Malang", ttl: "03 Maret 2008", status: "LULUS" },
        "9353": { nama: "Disty Ananda Putri Wardani", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "26 Desember 2007", status: "LULUS" },
        "9371": { nama: "Esti Nuralia Rigustin", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "19 April 2008", status: "LULUS" },
        "9375": { nama: "Fajar Fanky Pradana", kelas: "XII B", gender: "Laki-laki", tempatLahir: "Malang", ttl: "04 Mei 2008", status: "LULUS" },
        "9376": { nama: "Fanny Nadyta Shafira", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "19 Juni 2008", status: "LULUS" },
        "9381": { nama: "Faridah Alya Fauziyyah", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "10 April 2007", status: "LULUS" },
        "9399": { nama: "Hafidh Aqil Ramadhan", kelas: "XII B", gender: "Laki-laki", tempatLahir: "Malang", ttl: "21 September 2008", status: "LULUS" },
        "9412": { nama: "Indah Cahya Maulidiyah", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "25 Maret 2008", status: "LULUS" },
        "9417": { nama: "Intan Puspita Sari", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "26 November 2007", status: "LULUS" },
        "9429": { nama: "Juana Azmi Elvaretta", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "31 Agustus 2007", status: "LULUS" },
        "9475": { nama: "Moch Azam Bachtiar", kelas: "XII B", gender: "Laki-laki", tempatLahir: "Malang", ttl: "18 Februari 2008", status: "LULUS" },
        "9489": { nama: "Muhamad Iqbal Maulana", kelas: "XII B", gender: "Laki-laki", tempatLahir: "Malang", ttl: "05 Maret 2008", status: "LULUS" },
        "9495": { nama: "Muhammad Bahrudin", kelas: "XII B", gender: "Laki-laki", tempatLahir: "Malang", ttl: "15 Juni 2007", status: "LULUS" },
        "9503": { nama: "Muhammad Raafi Zain Al Alifi", kelas: "XII B", gender: "Laki-laki", tempatLahir: "Malang", ttl: "28 Oktober 2007", status: "LULUS" },
        "9544": { nama: "Radhin Amelia Santosa", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "21 Februari 2008", status: "LULUS" },
        "9548": { nama: "Rahmad Doni Prasetyo", kelas: "XII B", gender: "Laki-laki", tempatLahir: "Malang", ttl: "15 September 2007", status: "LULUS" },
        "9558": { nama: "Reyza Putri Masayu", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "27 Oktober 2007", status: "LULUS" },
        "9564": { nama: "Riyan Maulana Firmansyah", kelas: "XII B", gender: "Laki-laki", tempatLahir: "Malang", ttl: "10 Oktober 2007", status: "LULUS" },
        "9571": { nama: "Romy Setyawan", kelas: "XII B", gender: "Laki-laki", tempatLahir: "Malang", ttl: "18 Juni 2007", status: "LULUS" },
        "9575": { nama: "Safana Zaida Hafidz", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "01 Oktober 2007", status: "LULUS" },
        "9589": { nama: "Selly Margah Rista", kelas: "XII B", gender: "Perempuan", tempatLahir: "Jember", ttl: "15 November 2007", status: "LULUS" },
        "9592": { nama: "Shaila Aisyah Azzahra", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "06 Agustus 2008", status: "LULUS" },
        "9600": { nama: "Steiven Savallent Firmansyah", kelas: "XII B", gender: "Laki-laki", tempatLahir: "Malang", ttl: "23 Februari 2008", status: "LULUS" },
        "9628": { nama: "Windha Wamirillah A R", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "22 September 2007", status: "LULUS" },
        "9631": { nama: "Yasmin Cynthia Ramadhani", kelas: "XII B", gender: "Perempuan", tempatLahir: "Malang", ttl: "06 September 2008", status: "LULUS" },
        "9640": { nama: "Yusuf", kelas: "XII B", gender: "Laki-laki", tempatLahir: "Malang", ttl: "06 Oktober 2007", status: "LULUS" },
        "9240": { nama: "Almira Eva Ramadhani", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "29 Agustus 2008", status: "LULUS" },
        "9244": { nama: "Amalia Sahara", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "05 Oktober 2007", status: "LULUS" },
        "9250": { nama: "Andika Nando Angga Pratama", kelas: "XII C", gender: "Laki-laki", tempatLahir: "Malang", ttl: "24 Februari 2008", status: "LULUS" },
        "9257": { nama: "Anggun Setya Vallentina", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "15 Februari 2008", status: "LULUS" },
        "9269": { nama: "Arundati Putri Maheswari", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "9/23/2007", status: "LULUS" },
        "9273": { nama: "Ashila Melani Apsari Lestiaskori", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "22 April 2008", status: "LULUS" },
        "9296": { nama: "Bella Virnasya Citra", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "25 September 2007", status: "LULUS" },
        "9299": { nama: "Binar Nastiti Larasati", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "16 Oktober 2007", status: "LULUS" },
        "9315": { nama: "Cheisya Putri Novischa", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "29 Februari 2008", status: "LULUS" },
        "9316": { nama: "Chelina Ivanovic", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "19 Mei 2008", status: "LULUS" },
        "9325": { nama: "Clorinda Elvaretta Rosyadi", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "31 Oktober 2007", status: "LULUS" },
        "9357": { nama: "Eddo Febriansyah", kelas: "XII C", gender: "Laki-laki", tempatLahir: "Malang", ttl: "13 Oktober 2007", status: "LULUS" },
        "9372": { nama: "Fadiyah Putri Suharminangsih", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "02 Agustus 2008", status: "LULUS" },
        "9379": { nama: "Farel Mei Pratama", kelas: "XII C", gender: "Laki-laki", tempatLahir: "Malang", ttl: "19 Mei 2008", status: "LULUS" },
        "9405": { nama: "Helena Puteri Hidayat", kelas: "XII C", gender: "Perempuan", tempatLahir: "Ponorogo", ttl: "26 Maret 2008", status: "LULUS" },
        "9428": { nama: "Jessica Khatarine Octavia Ananta", kelas: "XII C", gender: "Perempuan", tempatLahir: "Samarinda", ttl: "06 Oktober 2006", status: "LULUS" },
        "9458": { nama: "M. Riyan Ramadani", kelas: "XII C", gender: "Laki-laki", tempatLahir: "Malang", ttl: "24 September 2007", status: "LULUS" },
        "9480": { nama: "Mochammad Ezra Alief Aqila", kelas: "XII C", gender: "Laki-laki", tempatLahir: "Malang", ttl: "24 Januari 2008", status: "LULUS" },
        "9481": { nama: "Moh. Akhmal Rusli", kelas: "XII C", gender: "Laki-laki", tempatLahir: "Malang", ttl: "22 Februari 2008", status: "LULUS" },
        "9484": { nama: "Mohamad Adi Jaya Kusuma", kelas: "XII C", gender: "Laki-laki", tempatLahir: "Malang", ttl: "14 September 2007", status: "LULUS" },
        "9490": { nama: "Muhamad Rassyah Firmansyah", kelas: "XII C", gender: "Laki-laki", tempatLahir: "Jambi", ttl: "23 Oktober 2007", status: "LULUS" },
        "9508": { nama: "Mukhamad Ardio Rehansyah", kelas: "XII C", gender: "Laki-laki", tempatLahir: "Malang", ttl: "10 Februari 2007", status: "LULUS" },
        "9517": { nama: "Nalaysila Zahra", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "31 Oktober 2007", status: "LULUS" },
        "9534": { nama: "Novina Magareta", kelas: "XII C", gender: "Perempuan", tempatLahir: "Sidoarjo", ttl: "15 November 2007", status: "LULUS" },
        "9553": { nama: "Ratna Anindya Puspita", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "04 Desember 2007", status: "LULUS" },
        "9565": { nama: "Rizal Aditya Ramadhani", kelas: "XII C", gender: "Laki-laki", tempatLahir: "Malang", ttl: "27 Februari 2008", status: "LULUS" },
        "9581": { nama: "Salwa Zahira Sutrisno", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "15 April 2008", status: "LULUS" },
        "9585": { nama: "Satria Sangkalelana", kelas: "XII C", gender: "Laki-laki", tempatLahir: "Malang", ttl: "31 Desember 2007", status: "LULUS" },
        "9596": { nama: "Sindy Amelia Shazwani", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "07 November 2007", status: "LULUS" },
        "9598": { nama: "Siti Haura Salma Abdillah", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "28 Agustus 2007", status: "LULUS" },
        "9607": { nama: "Tania Aulia Putri Suatmaji", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "02 November 2007", status: "LULUS" },
        "9630": { nama: "Wreda Laili Masruroh", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "17 Juni 2007", status: "LULUS" },
        "9632": { nama: "Yesti Grace Christanty", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "05 Juli 2007", status: "LULUS" },
        "9646": { nama: "Zefanya Youan Septy Anggieta", kelas: "XII C", gender: "Perempuan", tempatLahir: "Malang", ttl: "22 September 2007", status: "LULUS" },
        "9222": { nama: "Adinda Essy Putri Wardhani", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "13 Mei 2008", status: "LULUS" },
        "9237": { nama: "Alisya Radya Nugroho", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "28 September 2008", status: "LULUS" },
        "9278": { nama: "Audya Dhiar Rahma", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "24 Juli 2008", status: "LULUS" },
        "9287": { nama: "Ayatullah Rahullah Khamanei Al Mabrur", kelas: "XII D", gender: "Laki-laki", tempatLahir: "Malang", ttl: "20 Juli 2007", status: "LULUS" },
        "9295": { nama: "Bagas Eka Maulana", kelas: "XII D", gender: "Laki-laki", tempatLahir: "Malang", ttl: "18 Maret 2008", status: "LULUS" },
        "9303": { nama: "Brilian Egye Putri Saiful", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "25 April 2007", status: "LULUS" },
        "9309": { nama: "Carissa Nathania Baharrizky", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "12 Agustus 2008", status: "LULUS" },
        "9334": { nama: "Darista Nova Erdiana", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "10 Februari 2008", status: "LULUS" },
        "9336": { nama: "Delia Ipo Iyurita", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "22 Januari 2008", status: "LULUS" },
        "9354": { nama: "Diyah Rizki Dwi Auliya", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "19 April 2007", status: "LULUS" },
        "9364": { nama: "Elsa Felisa Putri", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "22 Agustus 2007", status: "LULUS" },
        "9370": { nama: "Essha Rayhan Mahardhika", kelas: "XII D", gender: "Laki-laki", tempatLahir: "Malang", ttl: "16 Mei 2007", status: "LULUS" },
        "9388": { nama: "Fellin Lovelina Thirdsta Sari", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "07 Juli 2007", status: "LULUS" },
        "9400": { nama: "Halima Nur Azizah", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "15 Februari 2008", status: "LULUS" },
        "9402": { nama: "Hanna Setia Ardhana", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "31 Maret 2008", status: "LULUS" },
        "9403": { nama: "Harmonique Gracia Almayda", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "03 Juli 2007", status: "LULUS" },
        "9419": { nama: "Jacquellin Raisha Fathoni", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "21 Maret 2008", status: "LULUS" },
        "9421": { nama: "Jasmine Kristiriyadi Islami", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "02 Januari 2008", status: "LULUS" },
        "9423": { nama: "Jenish Dwi Wulan Ramanda", kelas: "XII D", gender: "Perempuan", tempatLahir: "Jember", ttl: "04 Oktober 2007", status: "LULUS" },
        "9433": { nama: "Kareina Aurelia Octavia", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "21 Oktober 2007", status: "LULUS" },
        "9435": { nama: "Kayla Bilkis Bilbina", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "26 Oktober 2007", status: "LULUS" },
        "9449": { nama: "Lintang Rahmawati", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "03 Mei 2008", status: "LULUS" },
        "9453": { nama: "M. Abbas Thabrany", kelas: "XII D", gender: "Laki-laki", tempatLahir: "Malang", ttl: "08 September 2007", status: "LULUS" },
        "9456": { nama: "M. Raditya Ramadhan", kelas: "XII D", gender: "Laki-laki", tempatLahir: "Malang", ttl: "05 Oktober 2007", status: "LULUS" },
        "9476": { nama: "Moch Septian Ramadhan", kelas: "XII D", gender: "Laki-laki", tempatLahir: "Malang", ttl: "20 September 2007", status: "LULUS" },
        "9483": { nama: "Moh. Regal Sambordam", kelas: "XII D", gender: "Laki-laki", tempatLahir: "Malang", ttl: "03 Agustus 2007", status: "LULUS" },
        "9487": { nama: "Mohammad Seno Nugroho", kelas: "XII D", gender: "Laki-laki", tempatLahir: "Malang", ttl: "18 Juni 2007", status: "LULUS" },
        "9498": { nama: "Muhammad Farrel Raditya Orvala", kelas: "XII D", gender: "Laki-laki", tempatLahir: "Sidoarjo", ttl: "09 Juni 2007", status: "LULUS" },
        "9499": { nama: "Muhammad Fawwaz Aqmalludin Al Fatihah", kelas: "XII D", gender: "Laki-laki", tempatLahir: "Malang", ttl: "18 Juni 2007", status: "LULUS" },
        "9501": { nama: "Muhammad Nawar Abysyarief", kelas: "XII D", gender: "Laki-laki", tempatLahir: "Malang", ttl: "11 Juli 2008", status: "LULUS" },
        "9511": { nama: "Nabilla Dharma Febriana", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "04 Februari 2008", status: "LULUS" },
        "9547": { nama: "Rahma Putri Wulandari", kelas: "XII D", gender: "Perempuan", tempatLahir: "Sidoarjo", ttl: "03 Juni 2008", status: "LULUS" },
        "9552": { nama: "Rasti Fitri Allina", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "15 Oktober 2007", status: "LULUS" },
        "9557": { nama: "Revita Dwi Nurhikmah", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "17 Maret 2008", status: "LULUS" },
        "9572": { nama: "Rossa Rieswandatiar Bekti", kelas: "XII D", gender: "Perempuan", tempatLahir: "Malang", ttl: "06 April 2008", status: "LULUS" },
        "9216": { nama: "Abdur Rohman", kelas: "XII E", gender: "Laki-laki", tempatLahir: "Malang", ttl: "17 November 2007", status: "LULUS" },
        "9224": { nama: "Adzra Zahirah Qussyi Cyrilla", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "29 November 2008", status: "LULUS" },
        "9226": { nama: "Ahmad Bagus Rafi Choiril M", kelas: "XII E", gender: "Laki-laki", tempatLahir: "Malang", ttl: "27 November 2007", status: "LULUS" },
        "9231": { nama: "Ainur Rafii Firdaus", kelas: "XII E", gender: "Laki-laki", tempatLahir: "Malang", ttl: "10 Januari 2008", status: "LULUS" },
        "9233": { nama: "Akbar Nur Aziz", kelas: "XII E", gender: "Laki-laki", tempatLahir: "Malang", ttl: "23 Januari 2008", status: "LULUS" },
        "9241": { nama: "Altaf Haqqi Herius Nuzayh", kelas: "XII E", gender: "Laki-laki", tempatLahir: "Malang", ttl: "05 November 2007", status: "LULUS" },
        "9265": { nama: "Arga Tri Saputra", kelas: "XII E", gender: "Laki-laki", tempatLahir: "Malang", ttl: "09 April 2008", status: "LULUS" },
        "9281": { nama: "Aulia Dwi Rahmasari", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "29 Juli 2007", status: "LULUS" },
        "9311": { nama: "Celsy Olivia", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "09 Agustus 2008", status: "LULUS" },
        "9324": { nama: "Cleo Valexsia H Chelsea Nia Shafa", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "10 Mei 2007", status: "LULUS" },
        "9338": { nama: "Denisa Eka Rahmawati", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "19 Mei 2008", status: "LULUS" },
        "9340": { nama: "Devan Damai Nugiansyah", kelas: "XII E", gender: "Laki-laki", tempatLahir: "Malang", ttl: "28 Januari 2008", status: "LULUS" },
        "9348": { nama: "Dilani Aprilia", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "29 April 2008", status: "LULUS" },
        "9350": { nama: "Dimas Eka Prasetyo", kelas: "XII E", gender: "Laki-laki", tempatLahir: "Malang", ttl: "14 Mei 2007", status: "LULUS" },
        "9368": { nama: "Erlinda Artichasary Frida Putri", kelas: "XII E", gender: "Perempuan", tempatLahir: "Sidoarjo", ttl: "01 Juni 2007", status: "LULUS" },
        "9378": { nama: "Farah Riskia Putri Atiqah", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "10 November 2007", status: "LULUS" },
        "9380": { nama: "Farid Naufal Alfiansyah", kelas: "XII E", gender: "Laki-laki", tempatLahir: "Jember", ttl: "12 Juli 2008", status: "LULUS" },
        "9382": { nama: "Fasha Az Zahra Rahm Anianza", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "08 September 2007", status: "LULUS" },
        "9401": { nama: "Hanifah Zahrotul Aulia", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "22 Mei 2008", status: "LULUS" },
        "9413": { nama: "Indra Fajrul Fallah", kelas: "XII E", gender: "Laki-laki", tempatLahir: "Malang", ttl: "18 Juli 2007", status: "LULUS" },
        "9416": { nama: "Intan Inika Sri Wulandari", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "05 April 2008", status: "LULUS" },
        "9422": { nama: "Jazila Zakiya Salma", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "03 Mei 2007", status: "LULUS" },
        "9462": { nama: "Marsha Indah Yunita", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "01 Maret 2008", status: "LULUS" },
        "9466": { nama: "May Reva Husada", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "28 Mei 2008", status: "LULUS" },
        "9470": { nama: "Michell Serren Laras Sari Dewi", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "21 Januari 2008", status: "LULUS" },
        "9494": { nama: "Muhammad Alif Cahyo Purnomo", kelas: "XII E", gender: "Laki-laki", tempatLahir: "Malang", ttl: "24 November 2007", status: "LULUS" },
        "9512": { nama: "Nadia Khotrunnada", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "11 September 2007", status: "LULUS" },
        "9545": { nama: "Raditya Rizqy Adhi", kelas: "XII E", gender: "Laki-laki", tempatLahir: "Malang", ttl: "09 Januari 2008", status: "LULUS" },
        "9546": { nama: "Raffiansyah Ramadhana Putra Aji", kelas: "XII E", gender: "Laki-laki", tempatLahir: "Malang", ttl: "06 Oktober 2007", status: "LULUS" },
        "9573": { nama: "Ruth Delina Vanecia Pang", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "23 Mei 2007", status: "LULUS" },
        "9576": { nama: "Safira Fitria Awwanis", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "08 Juni 2007", status: "LULUS" },
        "9579": { nama: "Salsabila Ameliana Setyono", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "24 Maret 2008", status: "LULUS" },
        "9594": { nama: "Sherine Febri Anastasya", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "26 Februari 2008", status: "LULUS" },
        "9616": { nama: "Vannesya Flowra Faradista", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "03 Maret 2008", status: "LULUS" },
        "9624": { nama: "Vita Bintang Natasyah", kelas: "XII E", gender: "Perempuan", tempatLahir: "Malang", ttl: "07 April 2008", status: "LULUS" },
        "9625": { nama: "Wahyu Han Fauzan", kelas: "XII E", gender: "Laki-laki", tempatLahir: "Malang", ttl: "03 Januari 2008", status: "LULUS" },
        "9221": { nama: "Adinda Dwi Kristiana", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "04 Juni 2008", status: "LULUS" },
        "9225": { nama: "Agus Cahyono", kelas: "XII F", gender: "Laki-laki", tempatLahir: "Malang", ttl: "12 Juli 2007", status: "LULUS" },
        "9227": { nama: "Ahmad Dava Nur Rifki", kelas: "XII F", gender: "Laki-laki", tempatLahir: "Malang", ttl: "23 Agustus 2007", status: "LULUS" },
        "9261": { nama: "Annelis Yukha Maharani", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "26 Juni 2007", status: "LULUS" },
        "9268": { nama: "Arnanthania Maura Pananggung", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "20 Maret 2008", status: "LULUS" },
        "9280": { nama: "Aulia Azahra", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "01 Februari 2008", status: "LULUS" },
        "9283": { nama: "Aullya Ikhsani", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "11 November 2007", status: "LULUS" },
        "9307": { nama: "Cantika Natasya Imarga Putri", kelas: "XII F", gender: "Perempuan", tempatLahir: "Lumajang", ttl: "21 September 2007", status: "LULUS" },
        "9312": { nama: "Charissa Putri Ramadhani", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "20 Agustus 2008", status: "LULUS" },
        "9327": { nama: "Cyandra Jihan Shabrina", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "08 April 2008", status: "LULUS" },
        "9337": { nama: "Delyana Rahmadhita", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "03 Februari 2008", status: "LULUS" },
        "9352": { nama: "Dioxvel Sharapova Priyantoyo", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "06 November 2008", status: "LULUS" },
        "9355": { nama: "Dwi Annisa Ayu Maulydia", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "09 Maret 2008", status: "LULUS" },
        "9365": { nama: "Elsha Sofia Istianti", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "10 Maret 2008", status: "LULUS" },
        "9389": { nama: "Feriansyah Adi Saputra", kelas: "XII F", gender: "Laki-laki", tempatLahir: "Malang", ttl: "06 Agustus 2007", status: "LULUS" },
        "9397": { nama: "Griselda Zivaline Agdhanella", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "23 November 2007", status: "LULUS" },
        "9410": { nama: "Imanuella Lintang Mahardhika", kelas: "XII F", gender: "Laki-laki", tempatLahir: "Malang", ttl: "11 Agustus 2007", status: "LULUS" },
        "9425": { nama: "Jeovani Anastasha Putri", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "09 September 2008", status: "LULUS" },
        "9440": { nama: "Khaila Maisya Fatihah", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "04 Juni 2007", status: "LULUS" },
        "9447": { nama: "Lidia Puspita Sari", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "18 September 2007", status: "LULUS" },
        "9448": { nama: "Ligar Abdi Januar", kelas: "XII F", gender: "Laki-laki", tempatLahir: "Malang", ttl: "28 Januari 2008", status: "LULUS" },
        "9479": { nama: "Mochamad Hanif Lintang Alit", kelas: "XII F", gender: "Laki-laki", tempatLahir: "Malang", ttl: "12 Februari 2008", status: "LULUS" },
        "9485": { nama: "Mohammad Arif Firmansyah", kelas: "XII F", gender: "Laki-laki", tempatLahir: "Gresik", ttl: "21 Februari 2008", status: "LULUS" },
        "9457": { nama: "Muhamad Rifqi Aziz", kelas: "XII F", gender: "Laki-laki", tempatLahir: "Malang", ttl: "08 Oktober 2007", status: "LULUS" },
        "9492": { nama: "Muhammad Al Gozali", kelas: "XII F", gender: "Laki-laki", tempatLahir: "Malang", ttl: "5/9/2008", status: "LULUS" },
        "9504": { nama: "Muhammad Revaldo Irfan Sudrajat", kelas: "XII F", gender: "Laki-laki", tempatLahir: "Malang", ttl: "01 Mei 2008", status: "LULUS" },
        "9516": { nama: "Naira Nahiza Nur", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "15 Januari 2008", status: "LULUS" },
        "9526": { nama: "Nelvida Lana Elvariski", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "12 April 2008", status: "LULUS" },
        "9533": { nama: "Novia Aisa Karima", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "23 November 2007", status: "LULUS" },
        "9540": { nama: "Pramesti Ayu Krishna Ningtyas", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "14 Agustus 2007", status: "LULUS" },
        "9550": { nama: "Raka Agung Pratama", kelas: "XII F", gender: "Laki-laki", tempatLahir: "Malang", ttl: "10 April 2008", status: "LULUS" },
        "9556": { nama: "Reno Juliandra Anggoro", kelas: "XII F", gender: "Laki-laki", tempatLahir: "Malang", ttl: "08 Juli 2007", status: "LULUS" },
        "9577": { nama: "Safira Ramadani", kelas: "XII F", gender: "Perempuan", tempatLahir: "Malang", ttl: "20 September 2007", status: "LULUS" },
        "9584": { nama: "Sastra Maeka", kelas: "XII F", gender: "Laki-laki", tempatLahir: "Malang", ttl: "04 Agustus 2007", status: "LULUS" },
        "9609": { nama: "Teguh Mada Leonardivo", kelas: "XII F", gender: "Laki-laki", tempatLahir: "Malang", ttl: "26 Februari 2008", status: "LULUS" },
        "9634": { nama: "Yudha Lingga Surya Wijaya", kelas: "XII F", gender: "Laki-laki", tempatLahir: "Malang", ttl: "12 Februari 2008", status: "LULUS" },
        "9246": { nama: "Amanda Dwi Agustia Wardani", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "31 Agustus 2007", status: "LULUS" },
        "9253": { nama: "Angelika Kireina Wijaya", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "25 Oktober 2007", status: "LULUS" },
        "9259": { nama: "Anindya Galuh Maheswari", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "29 Oktober 2007", status: "LULUS" },
        "9267": { nama: "Arifatana Wijaya Dewa Putra", kelas: "XII G", gender: "Laki-laki", tempatLahir: "Malang", ttl: "03 Oktober 2007", status: "LULUS" },
        "9270": { nama: "Arya Andhika Prawira Sasongko", kelas: "XII G", gender: "Laki-laki", tempatLahir: "Malang", ttl: "21 Oktober 2007", status: "LULUS" },
        "9292": { nama: "Azriel Arafi Putra", kelas: "XII G", gender: "Laki-laki", tempatLahir: "Blitar", ttl: "18 November 2007", status: "LULUS" },
        "9294": { nama: "Azwar Zidni Aimanullah", kelas: "XII G", gender: "Laki-laki", tempatLahir: "Puunaaha", ttl: "31 Juli 2008", status: "LULUS" },
        "9318": { nama: "Chiquita Maurisa Amanda", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "31 Oktober 2007", status: "LULUS" },
        "9326": { nama: "Conan Firas Amareyno Sadif", kelas: "XII G", gender: "Laki-laki", tempatLahir: "Malang", ttl: "17 Desember 2007", status: "LULUS" },
        "9330": { nama: "Dafina Nafaisunnisa", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "15 Maret 2008", status: "LULUS" },
        "9361": { nama: "Elmo Valerian Junior", kelas: "XII G", gender: "Laki-laki", tempatLahir: "Kediri", ttl: "20 Juni 2008", status: "LULUS" },
        "9362": { nama: "Elsa Anindiya", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "09 Juni 2007", status: "LULUS" },
        "9367": { nama: "Eric Aqil Fauzan", kelas: "XII G", gender: "Laki-laki", tempatLahir: "Malang", ttl: "01 Desember 2007", status: "LULUS" },
        "9394": { nama: "Ghabrilla Belgiz Angelica", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "22 Juli 2007", status: "LULUS" },
        "9432": { nama: "Juwita Vitriani", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "06 November 2007", status: "LULUS" },
        "9438": { nama: "Keysia Fredella Sasmita", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "24 Mei 2008", status: "LULUS" },
        "9452": { nama: "M. Hanif Syafrian", kelas: "XII G", gender: "Laki-laki", tempatLahir: "Malang", ttl: "04 November 2008", status: "LULUS" },
        "9461": { nama: "Maia Anisa Arindhira", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "03 Juni 2007", status: "LULUS" },
        "9524": { nama: "Nayla Salsabila", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "05 Maret 2008", status: "LULUS" },
        "9531": { nama: "Niswa Ilma Zakia", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "23 April 2008", status: "LULUS" },
        "9536": { nama: "Nur Ima Rahayu", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malanh", ttl: "18 Oktober 2007", status: "LULUS" },
        "9542": { nama: "Queena Azzah An Nuru", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "25 Maret 2008", status: "LULUS" },
        "9555": { nama: "Reiprila Maharani", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "15 April 2008", status: "LULUS" },
        "9559": { nama: "Reyza Robbiyul Alfian", kelas: "XII G", gender: "Laki-laki", tempatLahir: "Malang", ttl: "25 Mei 2008", status: "LULUS" },
        "9560": { nama: "Reza Ardiansyah", kelas: "XII G", gender: "Laki-laki", tempatLahir: "Malang", ttl: "04 November 2006", status: "LULUS" },
        "9566": { nama: "Rizal Maulana", kelas: "XII G", gender: "Laki-laki", tempatLahir: "Malang", ttl: "27 Januari 2007", status: "LULUS" },
        "9583": { nama: "Sarahbella Ramadhani", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "25 September 2008", status: "LULUS" },
        "9587": { nama: "Sekar Hayuning Qolbu", kelas: "XII G", gender: "Perempuan", tempatLahir: "Madiun", ttl: "24 Juni 2007", status: "LULUS" },
        "9595": { nama: "Shifa Indira Reva Nurwanti", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "06 Januari 2008", status: "LULUS" },
        "9599": { nama: "Siti Nur Azizah", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "24 November 2007", status: "LULUS" },
        "9604": { nama: "Syakirah Fauziyyah", kelas: "XII G", gender: "Perempuan", tempatLahir: "Jakarta Barat", ttl: "03 Agustus 2008", status: "LULUS" },
        "9614": { nama: "Tifara Athaaya Fadia Malik", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "22 Juli 2008", status: "LULUS" },
        "9622": { nama: "Viollence Valencia Putri Yohana Gabriel", kelas: "XII G", gender: "Perempuan", tempatLahir: "Surabaya", ttl: "29 Desember 2007", status: "LULUS" },
        "9644": { nama: "Zahroh Yasfi Putri Arfina Dinata", kelas: "XII G", gender: "Perempuan", tempatLahir: "Malang", ttl: "04 Februari 2008", status: "LULUS" },
        "9239": { nama: "Almer Gibran Rosenda", kelas: "XII H", gender: "Laki-laki", tempatLahir: "Malang", ttl: "06 Juli 2008", status: "LULUS" },
        "9255": { nama: "Angeline Firdausiana Imandika", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "15 Juli 2007", status: "LULUS" },
        "9275": { nama: "Asyla Naila Alifah", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "30 Desember 2008", status: "LULUS" },
        "9277": { nama: "Atika Sholiha", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "27 Mei 2008", status: "LULUS" },
        "9282": { nama: "Aulia Rahma Khoirunnisa", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "07 November 2007", status: "LULUS" },
        "9285": { nama: "Aurelia Qirotul Aini", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "21 Agustus 2008", status: "LULUS" },
        "9288": { nama: "Ayu Putri Kinesih", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "10 Juli 2008", status: "LULUS" },
        "9289": { nama: "Az Zahra Nazhifa Putri", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "12 November 2007", status: "LULUS" },
        "9300": { nama: "Bintang Candra Ferdiansyah", kelas: "XII H", gender: "Laki-laki", tempatLahir: "Malang", ttl: "16 Maret 2008", status: "LULUS" },
        "9305": { nama: "Camelia Nimatus Azizah", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "23 Oktober 2007", status: "LULUS" },
        "9313": { nama: "Charista Eva Celiana", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "26 November 2007", status: "LULUS" },
        "9343": { nama: "Dhabitah Zahra Ramadhan", kelas: "XII H", gender: "Perempuan", tempatLahir: "Mojokerto", ttl: "02 Oktober 2007", status: "LULUS" },
        "9344": { nama: "Diana Aprilia", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "08 April 2008", status: "LULUS" },
        "9346": { nama: "Dicka Adit Mahendra", kelas: "XII H", gender: "Laki-laki", tempatLahir: "Malang", ttl: "03 Juli 2008", status: "LULUS" },
        "9387": { nama: "Fellaura Venusha Risdiaputri", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "18 November 2007", status: "LULUS" },
        "9390": { nama: "Fernando Stefanus Edwinson", kelas: "XII H", gender: "Laki-laki", tempatLahir: "Malang", ttl: "22 Januari 2008", status: "LULUS" },
        "9392": { nama: "Galang Boeing Satria Pratama", kelas: "XII H", gender: "Laki-laki", tempatLahir: "Malang", ttl: "14 Mei 2008", status: "LULUS" },
        "9395": { nama: "Gilang Herlambang", kelas: "XII H", gender: "Laki-laki", tempatLahir: "Ngawi", ttl: "01 Februari 2007", status: "LULUS" },
        "9398": { nama: "Guntur Hamka Prayogo", kelas: "XII H", gender: "Laki-laki", tempatLahir: "Malang", ttl: "18 November 2007", status: "LULUS" },
        "9407": { nama: "Hilda Aulia Rahmawati", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "03 Maret 2008", status: "LULUS" },
        "9450": { nama: "Lionell Vincent Fabiano", kelas: "XII H", gender: "Laki-laki", tempatLahir: "Malang", ttl: "23 Maret 2008", status: "LULUS" },
        "9467": { nama: "Maya Putri Rizqi Erviana", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "17 Juni 2008", status: "LULUS" },
        "9471": { nama: "Mikhael Estevan Cornelis", kelas: "XII H", gender: "Laki-laki", tempatLahir: "Malang", ttl: "22 September 2007", status: "LULUS" },
        "9510": { nama: "Nabila Nur Azizah", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "31 Januari 2008", status: "LULUS" },
        "9521": { nama: "Naufal Anggara Putra", kelas: "XII H", gender: "Laki-laki", tempatLahir: "Malang", ttl: "08 Mei 2008", status: "LULUS" },
        "9532": { nama: "Novi Anggun Khoirun Nissa", kelas: "XII H", gender: "Perempuan", tempatLahir: "Probolinggo", ttl: "09 November 2008", status: "LULUS" },
        "9562": { nama: "Risky Aldi Wijaya", kelas: "XII H", gender: "Laki-laki", tempatLahir: "Malang", ttl: "08 Februari 2008", status: "LULUS" },
        "9586": { nama: "Sausan Denia Sofa", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "08 Desember 2007", status: "LULUS" },
        "9588": { nama: "Selfia Salsabila Srihenia", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "04 Juni 2008", status: "LULUS" },
        "9593": { nama: "Shella Devi Lestari", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "13 Maret 2008", status: "LULUS" },
        "9601": { nama: "Sulthon Febrian Hutama", kelas: "XII H", gender: "Laki-laki", tempatLahir: "Tulungagung", ttl: "02 Februari 2008", status: "LULUS" },
        "9603": { nama: "Syahratu Elia Agatha", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "23 Mei 2008", status: "LULUS" },
        "9606": { nama: "Syifa Shafira Aulia", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "07 Februari 2009", status: "LULUS" },
        "9615": { nama: "Titia Zahroh As Salam", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "01 Januari 2008", status: "LULUS" },
        "9638": { nama: "Yusifa Qiroatul Maghfiroh", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "02 April 2008", status: "LULUS" },
        "9643": { nama: "Zahra Aulia Maghfiroh", kelas: "XII H", gender: "Perempuan", tempatLahir: "Malang", ttl: "22 Juni 2008", status: "LULUS" },
        "9217": { nama: "Abel Athalia Widayat", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "01 Juli 2008", status: "LULUS" },
        "9238": { nama: "Almaida Ainun Wardah", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "08 Februari 2008", status: "LULUS" },
        "9248": { nama: "Amanda Vera Nirwasita", kelas: "XII I", gender: "Perempuan", tempatLahir: "Pekanbaru", ttl: "20 April 2008", status: "LULUS" },
        "9251": { nama: "Andrea Diva Kirana", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "15 Desember 2007", status: "LULUS" },
        "9258": { nama: "Anindita Maharani", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "14 April 2008", status: "LULUS" },
        "9266": { nama: "Arhla Meylani", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "20 Mei 2008", status: "LULUS" },
        "9290": { nama: "Azhyla Naura Mecca", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "26 April 2008", status: "LULUS" },
        "9298": { nama: "Bimantara Putrantyo Abdi", kelas: "XII I", gender: "Laki-laki", tempatLahir: "Malang", ttl: "27 Oktober 2007", status: "LULUS" },
        "9302": { nama: "Brian Adam Chrisdianto", kelas: "XII I", gender: "Laki-laki", tempatLahir: "Malang", ttl: "12 April 2008", status: "LULUS" },
        "9331": { nama: "Dana Adi Kurniawan", kelas: "XII I", gender: "Laki-laki", tempatLahir: "Malang", ttl: "29 November 2007", status: "LULUS" },
        "9351": { nama: "Dinda Attira Daffa Kuswara", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "07 Maret 2008", status: "LULUS" },
        "9366": { nama: "Elvira Vindya Marsha", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "04 Maret 2008", status: "LULUS" },
        "9373": { nama: "Fahri Sena Nugraha Cahya Dewa", kelas: "XII I", gender: "Laki-laki", tempatLahir: "Malang", ttl: "29 Juli 2008", status: "LULUS" },
        "9384": { nama: "Fauziah Priska Aggita Wati", kelas: "XII I", gender: "Perempuan", tempatLahir: "Kulonprogo", ttl: "10 Juli 2008", status: "LULUS" },
        "9408": { nama: "Icha Maynur Fadillah", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "30 Mei 2008", status: "LULUS" },
        "9409": { nama: "Ilham Saputra", kelas: "XII I", gender: "Laki-laki", tempatLahir: "Malang", ttl: "14 Februari 2008", status: "LULUS" },
        "9430": { nama: "Julia Citra Laksmi Anisya Putru", kelas: "XII I", gender: "Perempuan", tempatLahir: "Yogyakarta", ttl: "03 Juli 2008", status: "LULUS" },
        "9439": { nama: "Kezia Cristinnita Supranto", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "22 Juni 2007", status: "LULUS" },
        "9442": { nama: "Kirana Marvelina Tristyansyah", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "13 Maret 2008", status: "LULUS" },
        "9464": { nama: "Maulana Satrio Utomo", kelas: "XII I", gender: "Laki-laki", tempatLahir: "Malang", ttl: "17 Februari 2008", status: "LULUS" },
        "9506": { nama: "Muhammad Risky Romadloni", kelas: "XII I", gender: "Laki-laki", tempatLahir: "Malang", ttl: "29 September 2007", status: "LULUS" },
        "9515": { nama: "Nailatul Ilmi", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "23 Juni 2008", status: "LULUS" },
        "9522": { nama: "Naufal Dian Fauzan", kelas: "XII I", gender: "Laki-laki", tempatLahir: "Malang", ttl: "26 Desember 2007", status: "LULUS" },
        "9530": { nama: "Nisrina Qutrunnada", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "08 Februari 2009", status: "LULUS" },
        "9539": { nama: "Pipit Ayu Pratiwi", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "13 April 2008", status: "LULUS" },
        "9567": { nama: "Rizka Aulya Nur Izza", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "03 Agustus 2007", status: "LULUS" },
        "9578": { nama: "Salsa Amelia Kusuma Nur Azizah", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "18 Januari 2008", status: "LULUS" },
        "9582": { nama: "Sandy Firmansyah", kelas: "XII I", gender: "Laki-laki", tempatLahir: "Malang", ttl: "02 November 2007", status: "LULUS" },
        "9602": { nama: "Sunarman", kelas: "XII I", gender: "Laki-laki", tempatLahir: "Malang", ttl: "08 April 2008", status: "LULUS" },
        "9620": { nama: "Via Febri Anantasya", kelas: "XII I", gender: "Perempuan", tempatLahir: "Lumajang", ttl: "24 Februari 2008", status: "LULUS" },
        "9626": { nama: "Weles Ramadhan", kelas: "XII I", gender: "Laki-laki", tempatLahir: "Malang", ttl: "07 Oktober 2007", status: "LULUS" },
        "9633": { nama: "Yovy Aulia Sari", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "14 Agustus 2008", status: "LULUS" },
        "9635": { nama: "Yuliana", kelas: "XII I", gender: "Perempuan", tempatLahir: "Jeddah", ttl: "13 Juni 2007", status: "LULUS" },
        "9645": { nama: "Zahrotul Mukarromah", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "15 Maret 2008", status: "LULUS" },
        "9647": { nama: "Zhelma Cecillia Azzara", kelas: "XII I", gender: "Perempuan", tempatLahir: "Malang", ttl: "24 April 2008", status: "LULUS" },
        "9229": { nama: "Ahmad Farel Fahrezi", kelas: "XII J", gender: "Laki-laki", tempatLahir: "Malang", ttl: "29 April 2007", status: "LULUS" },
        "9235": { nama: "Al Auwalu Annovi Sulistya", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "09 November 2008", status: "LULUS" },
        "9242": { nama: "Alvian Cofi Lubis", kelas: "XII J", gender: "Laki-laki", tempatLahir: "Malang", ttl: "07 Desember 2006", status: "LULUS" },
        "9245": { nama: "Amanda Alia Putri", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "04 Februari 2008", status: "LULUS" },
        "9260": { nama: "Annafi Zahra Candra Rusmana", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "17 Oktober 2007", status: "LULUS" },
        "9262": { nama: "Annisa Zahra Aprilia", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "22 April 2008", status: "LULUS" },
        "9272": { nama: "Arya Wicaksana Putra", kelas: "XII J", gender: "Laki-laki", tempatLahir: "Malang", ttl: "10 September 2007", status: "LULUS" },
        "9293": { nama: "Azril Abi Nur Hidayat", kelas: "XII J", gender: "Laki-laki", tempatLahir: "Malang", ttl: "25 Mei 2007", status: "LULUS" },
        "9304": { nama: "Bunga Oktavia Rahmadhani", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "01 Oktober 2007", status: "LULUS" },
        "9323": { nama: "Clarissa Unique Nur Azizah", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "13 Oktober 2008", status: "LULUS" },
        "9328": { nama: "Daehana Yoja Agasi", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "05 Mei 2008", status: "LULUS" },
        "9356": { nama: "Dystha Putri Nuryanti", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "15 Desember 2007", status: "LULUS" },
        "9377": { nama: "Farah Aulia Hasiba", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "30 Mei 2007", status: "LULUS" },
        "9391": { nama: "Ferrari Aza Pradana", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "09 Mei 2007", status: "LULUS" },
        "9404": { nama: "Helen Ramadhani", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "13 September 2007", status: "LULUS" },
        "9418": { nama: "Ishran Alif Abdillah", kelas: "XII J", gender: "Laki-laki", tempatLahir: "Malang", ttl: "26 November 2008", status: "LULUS" },
        "9454": { nama: "M. Andi Hendrawan Al Khulqy", kelas: "XII J", gender: "Laki-laki", tempatLahir: "Malang", ttl: "28 Februari 2008", status: "LULUS" },
        "9465": { nama: "Maulidya Marchenle", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "24 Maret 2008", status: "LULUS" },
        "9482": { nama: "Moh. Nadilf Al Fikri", kelas: "XII J", gender: "Laki-laki", tempatLahir: "Malang", ttl: "02 November 2007", status: "LULUS" },
        "9486": { nama: "Mohammad Salman Al Farizi", kelas: "XII J", gender: "Laki-laki", tempatLahir: "Malang", ttl: "22 Mei 2008", status: "LULUS" },
        "9493": { nama: "Muhammad Alfathir Wafie Syahdan", kelas: "XII J", gender: "Laki-laki", tempatLahir: "Malang", ttl: "05 April 2008", status: "LULUS" },
        "9509": { nama: "Mukhammad Azam Miqdad", kelas: "XII J", gender: "Laki-laki", tempatLahir: "Malang", ttl: "12 Februari 2008", status: "LULUS" },
        "9513": { nama: "Nadine Adindra Almayra", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "04 Oktober 2008", status: "LULUS" },
        "9518": { nama: "Nalika Fasha Fitrianti", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "13 Oktober 2007", status: "LULUS" },
        "9525": { nama: "Naylla Audy Ulaya", kelas: "XII J", gender: "Perempuan", tempatLahir: "Berau", ttl: "02 Februari 2007", status: "LULUS" },
        "9528": { nama: "Ninda Aprillia Putri", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "28 April 2007", status: "LULUS" },
        "9529": { nama: "Nisfi Laily", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "26 Juli 2007", status: "LULUS" },
        "9535": { nama: "Nur Azlina Aulia Rohmah", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "19 Mei 2008", status: "LULUS" },
        "9538": { nama: "Oktavia Putri Ramadani", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "05 Oktober 2007", status: "LULUS" },
        "9543": { nama: "Rachel Sakya Pandita", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "17 Oktober 2007", status: "LULUS" },
        "9549": { nama: "Rahmah Tiar Fanissah", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "24 Juni 2007", status: "LULUS" },
        "9570": { nama: "Rochma Ariesta Dewi", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "12 Januari 2008", status: "LULUS" },
        "9591": { nama: "Septia Fika Ramadani", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "25 September 2008", status: "LULUS" },
        "9597": { nama: "Sintia Fadzila", kelas: "XII J", gender: "Perempuan", tempatLahir: "Malang", ttl: "30 November 2007", status: "LULUS" },
        "9228": { nama: "Ahmad Faiq Azam Noto Negoro", kelas: "XII K", gender: "Laki-laki", tempatLahir: "Gresik", ttl: "08 April 2008", status: "LULUS" },
        "9234": { nama: "Akhdan Ikbar Athobarani", kelas: "XII K", gender: "Laki-laki", tempatLahir: "Malang", ttl: "27 Oktober 2007", status: "LULUS" },
        "9279": { nama: "Aulia Az Zahra", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "05 Maret 2008", status: "LULUS" },
        "9286": { nama: "Aurelia Yessi Octavia", kelas: "XII K", gender: "Perempuan", tempatLahir: "Pacitan", ttl: "18 Oktober 2007", status: "LULUS" },
        "9297": { nama: "Bilqis Rabbani Setyawan Putri", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "08 Februari 2008", status: "LULUS" },
        "9306": { nama: "Candra Hadi Kusuma", kelas: "XII K", gender: "Laki-laki", tempatLahir: "Malang", ttl: "04 Februari 2025", status: "LULUS" },
        "9321": { nama: "Cindy Calysta Sarasvaty Zahralexia Fueranasoff", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "21 Februari 2008", status: "LULUS" },
        "9342": { nama: "Dewa Arta Saputra", kelas: "XII K", gender: "Laki-laki", tempatLahir: "Malang", ttl: "15 Mei 2008", status: "LULUS" },
        "9349": { nama: "Dimas Aji Raga Siwi", kelas: "XII K", gender: "Laki-laki", tempatLahir: "Malang", ttl: "17 April 2008", status: "LULUS" },
        "9358": { nama: "Eka Bela Karisma", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "05 Juli 2008", status: "LULUS" },
        "9363": { nama: "Elsa Aulia Anggraini", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "06 November 2007", status: "LULUS" },
        "9369": { nama: "Eryna Vabella Putri Sukoco", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "30 Juni 2008", status: "LULUS" },
        "9386": { nama: "Felicia Renanta Maharani", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "29 Mei 2008", status: "LULUS" },
        "9411": { nama: "Imelda Nur Aviani", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "16 Maret 2008", status: "LULUS" },
        "9415": { nama: "Inge Iasya Daryanti", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "22 Mei 2007", status: "LULUS" },
        "9424": { nama: "Jenniver Friskila Anggresia", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "07 Juni 2008", status: "LULUS" },
        "9426": { nama: "Jesica Natasyah Putri", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "05 Desember 2007", status: "LULUS" },
        "9434": { nama: "Karina Az Zahra", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "03 Juli 2007", status: "LULUS" },
        "9446": { nama: "Leonardo Da Vinci", kelas: "XII K", gender: "Laki-laki", tempatLahir: "Malang", ttl: "06 Agustus 2008", status: "LULUS" },
        "9451": { nama: "Lovegea Frissha Werdhadinata", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "30 September 2008", status: "LULUS" },
        "9459": { nama: "M. Rizky Maulidio", kelas: "XII K", gender: "Laki-laki", tempatLahir: "Malang", ttl: "17 April 2008", status: "LULUS" },
        "9469": { nama: "Melania Carolina", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "29 Desember 2007", status: "LULUS" },
        "9472": { nama: "Mikhail Dimitri Alaydrus", kelas: "XII K", gender: "Laki-laki", tempatLahir: "Malang", ttl: "22 Maret 2008", status: "LULUS" },
        "9473": { nama: "Milania Rahmadhani", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "15 September 2007", status: "LULUS" },
        "9474": { nama: "Milla Dewi Utari", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "17 Maret 2008", status: "LULUS" },
        "9497": { nama: "Muhammad Fajar Hidayatulloh", kelas: "XII K", gender: "Laki-laki", tempatLahir: "Malang", ttl: "16 Oktober 2007", status: "LULUS" },
        "9505": { nama: "Muhammad Rifky Ramadlona", kelas: "XII K", gender: "Laki-laki", tempatLahir: "Malang", ttl: "29 September 2007", status: "LULUS" },
        "9519": { nama: "Nanda Putri Sofiansyah", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "01 November 2007", status: "LULUS" },
        "9541": { nama: "Purvaga Abhiseka Sidhi", kelas: "XII K", gender: "Laki-laki", tempatLahir: "Malang", ttl: "06 Agustus 2007", status: "LULUS" },
        "9554": { nama: "Refa Novia Risma", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "12 November 2007", status: "LULUS" },
        "9563": { nama: "Rista Trie Milla", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "17 Juli 2007", status: "LULUS" },
        "9568": { nama: "Rizky Gusty Akbar", kelas: "XII K", gender: "Laki-laki", tempatLahir: "Malang", ttl: "25 Juli 2007", status: "LULUS" },
        "9612": { nama: "Tiara Fairus Nashwa", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "26 April 2007", status: "LULUS" },
        "9623": { nama: "Viona Akta Maulidia", kelas: "XII K", gender: "Perempuan", tempatLahir: "Malang", ttl: "20 Maret 2008", status: "LULUS" },
        "9636": { nama: "Yunisa Putri Agil", kelas: "XII K", gender: "Perempuan", tempatLahir: "Tulungagung", ttl: "03 Juni 2007", status: "LULUS" },
        "9219": { nama: "Achmad Khomsan Romadhoni", kelas: "XII L", gender: "Laki-laki", tempatLahir: "Malang", ttl: "13 September 2007", status: "LULUS" },
        "9230": { nama: "Ahmadan Rif'At Lazuardi Alfazano", kelas: "XII L", gender: "Laki-laki", tempatLahir: "Malang", ttl: "19 Desember 2007", status: "LULUS" },
        "9236": { nama: "Al Zahra Kaylana Fatikha", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "15 April 2008", status: "LULUS" },
        "9649": { nama: "Alisha Rahma Shabrina", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "29 Januari 2007", status: "LULUS" },
        "9247": { nama: "Amanda Kirana Suhaidi", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "04 Maret 2007", status: "LULUS" },
        "9249": { nama: "Ananda Rasya Hapsari", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "01 Maret 2007", status: "LULUS" },
        "9263": { nama: "Anzalna Rahma Hendrawan Putri", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "17 Juni 2008", status: "LULUS" },
        "9264": { nama: "Ardian Fahriza", kelas: "XII L", gender: "Laki-laki", tempatLahir: "Malang", ttl: "03 Mei 2007", status: "LULUS" },
        "9648": { nama: "Asrul Sani Nuraiman", kelas: "XII L", gender: "Laki-laki", tempatLahir: "Malang", ttl: "27 Oktober 2006", status: "LULUS" },
        "9274": { nama: "Astrid Aprillia Renata", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "26 April 2008", status: "LULUS" },
        "9276": { nama: "Athaya Iffatar Alnabil", kelas: "XII L", gender: "Laki-laki", tempatLahir: "Malang", ttl: "04 Juli 2008", status: "LULUS" },
        "9314": { nama: "Checilya Hana Laura Sitio", kelas: "XII L", gender: "Perempuan", tempatLahir: "Medan", ttl: "17 September 2007", status: "LULUS" },
        "9317": { nama: "Chelsea Ghea Rahma Ayu", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "16 Januari 2008", status: "LULUS" },
        "9339": { nama: "Detta Novi Andini", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "21 November 2007", status: "LULUS" },
        "9374": { nama: "Fairus Kencono Ayu C D M S", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "02 April 2008", status: "LULUS" },
        "9383": { nama: "Fauziah Alma Arsinta", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "24 Desember 2007", status: "LULUS" },
        "9393": { nama: "Gemah Muhammad Fikr Indonesianto", kelas: "XII L", gender: "Laki-laki", tempatLahir: "Malang", ttl: "20 April 2007", status: "LULUS" },
        "9431": { nama: "Jumakya Dwi Lestari", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "22 Juni 2007", status: "LULUS" },
        "9437": { nama: "Keisya Zahiah Ramadhani", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "23 September 2007", status: "LULUS" },
        "9444": { nama: "Labib Bachir Agaminata", kelas: "XII L", gender: "Laki-laki", tempatLahir: "Malang", ttl: "27 Mei 2008", status: "LULUS" },
        "9460": { nama: "M. Wildan Arif Muchtar", kelas: "XII L", gender: "Laki-laki", tempatLahir: "Malang", ttl: "17 Desember 2008", status: "LULUS" },
        "9463": { nama: "Maulana Ahmad Fahrezi", kelas: "XII L", gender: "Laki-laki", tempatLahir: "Malang", ttl: "14 Agustus 2007", status: "LULUS" },
        "9477": { nama: "Moch Yovie Satya Priadi", kelas: "XII L", gender: "Laki-laki", tempatLahir: "Malang", ttl: "09 September 2007", status: "LULUS" },
        "9478": { nama: "Moch. Najammuzakki", kelas: "XII L", gender: "Laki-laki", tempatLahir: "Malang", ttl: "22 November 2007", status: "LULUS" },
        "9491": { nama: "Muhammad Abdur Rozaq", kelas: "XII L", gender: "Laki-laki", tempatLahir: "Malang", ttl: "18 Juli 2007", status: "LULUS" },
        "9502": { nama: "Muhammad Nazril Ilham", kelas: "XII L", gender: "Laki-laki", tempatLahir: "Malang", ttl: "07 September 2007", status: "LULUS" },
        "9507": { nama: "Muhammad Zidane Prayudha", kelas: "XII L", gender: "Laki-laki", tempatLahir: "Malang", ttl: "01 Februari 2007", status: "LULUS" },
        "9514": { nama: "Nadiya Nur Jannah", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "12 November 2007", status: "LULUS" },
        "9537": { nama: "Nuraqilah Taqiyyah Wardani", kelas: "XII L", gender: "Perempuan", tempatLahir: "Balikpapan", ttl: "13 September 2008", status: "LULUS" },
        "9574": { nama: "Sabrina Shenna Sari", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "18 April 2008", status: "LULUS" },
        "9580": { nama: "Salwa Naura Faradiba", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "31 Maret 2008", status: "LULUS" },
        "9605": { nama: "Syarafina Aaqila Handayani", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "29 September 2007", status: "LULUS" },
        "9617": { nama: "Vebiola Oky Lidiawati", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "18 Februari 2008", status: "LULUS" },
        "9619": { nama: "Verren Azaria Dewi", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "27 Maret 2008", status: "LULUS" },
        "9637": { nama: "Yurin Ludya Risma", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "25 Maret 2007", status: "LULUS" },
        "9639": { nama: "Yusri Gati Dwi Lestari", kelas: "XII L", gender: "Perempuan", tempatLahir: "Malang", ttl: "20 Juni 2007", status: "LULUS" },
        };

        // --- DOM Elements (Main Page) ---
        const nisForm = document.getElementById('nis-form');
        const nisInput = document.getElementById('nis');
        const submitButton = document.getElementById('submit-button');
        const buttonText = document.getElementById('button-text');
        const loadingSpinner = document.getElementById('loading-spinner');
        const errorMessage = document.getElementById('error-message');
        const formSection = document.getElementById('form-section');
        const resultSection = document.getElementById('result-section');
        const checkAgainButton = document.getElementById('check-again-button');
        const resultNama = document.getElementById('result-nama');
        const resultKelas = document.getElementById('result-kelas');
        const resultGender = document.getElementById('result-gender');
        const resultTempatLahir = document.getElementById('result-tempat-lahir');
        const resultTtl = document.getElementById('result-ttl');
        const resultStatus = document.getElementById('result-status');
        const detailsToggle = document.getElementById('details-toggle');
        const detailsContent = document.getElementById('details-content');
        const detailsArrow = document.getElementById('details-arrow');

        // --- Event Listener for Form Submission ---
        nisForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nisValue = nisInput.value.trim();
            buttonText.classList.add('hidden');
            loadingSpinner.classList.remove('hidden');
            submitButton.disabled = true;
            errorMessage.classList.add('hidden');
            resultSection.classList.remove('fade-in-up');

            setTimeout(() => {
                const student = studentData[nisValue];
                buttonText.classList.remove('hidden');
                loadingSpinner.classList.add('hidden');
                submitButton.disabled = false;

                if (student) {
                    resultNama.textContent = student.nama;
                    resultKelas.textContent = student.kelas;
                    resultGender.textContent = student.gender;
                    resultTempatLahir.textContent = student.tempatLahir;
                    resultTtl.textContent = student.ttl;
                    resultStatus.textContent = student.status;
                    formSection.classList.add('hidden');
                    resultSection.classList.remove('hidden');
                    resultSection.classList.add('fade-in-up');
                    detailsArrow.classList.remove('-rotate-180');
                    setTimeout(() => {
                        detailsContent.style.maxHeight = detailsContent.scrollHeight + 'px';
                    }, 10);
                } else {
                    errorMessage.textContent = 'NIS tidak ditemukan. Silakan periksa kembali.';
                    errorMessage.classList.remove('hidden');
                }
            }, 1000);
        });

        // --- Event Listener for "Check Again" Button ---
        checkAgainButton.addEventListener('click', function() {
            resultSection.classList.add('hidden');
            formSection.classList.remove('hidden');
            nisInput.value = '';
            errorMessage.classList.add('hidden');
            nisInput.focus();
        });

        // --- Event Listener for Toggling Details Visibility ---
        detailsToggle.addEventListener('click', () => {
            if (detailsContent.style.maxHeight && detailsContent.style.maxHeight !== '0px') {
                detailsContent.style.maxHeight = '0px';
                detailsArrow.classList.add('-rotate-180');
            } else {
                detailsContent.style.maxHeight = detailsContent.scrollHeight + 'px';
                detailsArrow.classList.remove('-rotate-180');
            }
        });

        // --- CHATBOT LOGIC ---
        const chatToggleButton = document.getElementById('chat-toggle-button');
        const chatCloseButton = document.getElementById('chat-close-button');
        const chatContainer = document.getElementById('chat-container');
        const chatMessages = document.getElementById('chat-messages');
        const chatForm = document.getElementById('chat-form');
        const chatInput = document.getElementById('chat-input');

        const toggleChat = () => {
            const isHidden = chatContainer.classList.contains('hidden');
            if(isHidden) {
                chatContainer.classList.remove('hidden');
                setTimeout(() => {
                    chatContainer.classList.remove('opacity-0', 'translate-y-4');
                }, 10);
            } else {
                chatContainer.classList.add('opacity-0', 'translate-y-4');
                setTimeout(() => {
                    chatContainer.classList.add('hidden');
                }, 300);
            }
        };

        chatToggleButton.addEventListener('click', toggleChat);
        chatCloseButton.addEventListener('click', toggleChat);

        const addMessage = (text, sender) => {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('mb-3', 'max-w-[80%]');
            
            if (sender === 'user') {
                messageDiv.classList.add('bg-blue-600', 'text-white', 'rounded-xl', 'rounded-br-none', 'p-3', 'ml-auto');
            } else {
                messageDiv.classList.add('bg-slate-200', 'text-slate-800', 'rounded-xl', 'rounded-bl-none', 'p-3', 'mr-auto');
            }
            
            messageDiv.textContent = text;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        };
        
        const generateAiResponse = (userInput) => {
            const lowerCaseInput = userInput.toLowerCase();
            let response = "Maaf, saya tidak mengerti pertanyaan Anda. Anda bisa bertanya tentang 'info kelulusan', 'pendaftaran', atau 'ijazah'.";

            if (lowerCaseInput.includes('lulus')) {
                response = "Untuk mengetahui status kelulusan, silakan masukkan NIS Anda pada kolom yang tersedia di halaman utama.";
            } else if (lowerCaseInput.includes('kapan')) {
                response = "Pengumuman kelulusan resmi diumumkan sesuai dengan jadwal yang tertera di surat edaran sekolah.";
            } else if (lowerCaseInput.includes('info')) {
                response = "Ini adalah portal resmi pengumuman kelulusan SMAN 1 Turen. Informasi lebih lanjut dapat dilihat di website resmi sekolah.";
            } else if (lowerCaseInput.includes('daftar') || lowerCaseInput.includes('pendaftaran')) {
                response = "Informasi pendaftaran untuk jenjang selanjutnya (kuliah/kerja) dapat dikonsultasikan dengan guru BK Anda.";
            } else if (lowerCaseInput.includes('ijazah')) {
                response = "Semua informasi mengenai dokumen resmi seperti ijazah bisa diambil di sekolah sesuai edaran resmi.";
            } else if (lowerCaseInput.includes('terima kasih')) {
                response = "Sama-sama! Senang bisa membantu.";
            } else if (lowerCaseInput.includes('halo') || lowerCaseInput.includes('hai')) {
                response = "Halo! Ada yang bisa saya bantu? Silakan ajukan pertanyaan Anda mengenai kelulusan.";
            }

            setTimeout(() => {
                addMessage(response, 'ai');
            }, 1000);
        };

        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userInput = chatInput.value.trim();
            if (!userInput) return;

            addMessage(userInput, 'user');
            chatInput.value = '';
            generateAiResponse(userInput);
        });

        // Initial AI message
        addMessage("Halo! Selamat datang di Bot Mieprans. Kamu bisa bertanya mengenai info kelulusan, pendaftaran, atau ijazah. Apa yang bisa saya bantu?", "ai");