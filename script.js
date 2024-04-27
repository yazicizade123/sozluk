// JSON dosyasını dahil etmek için artık gerek yok, verileri doğrudan burada tanımlıyoruz
const wordsData = [
  {
    "word": "apple",
    "partOfSpeech": "noun",
    "phonetic": "ˈæpəl",
    "definition": "a round fruit with red or green skin and a whitish interior",
    "example": "She took a bite of the juicy apple."
  },
  {
    "word": "banana",
    "partOfSpeech": "noun",
    "phonetic": "bəˈnænə",
    "definition": "xxxxxxxx",
    "example": "He ate a banana for breakfast."
  },
  {
    "word": "computer",
    "partOfSpeech": "noun",
    "phonetic": "kəmˈpjuː.tər",
    "definition": "an electronic device for storing and processing data",
    "example": "I use my computer to browse the internet."
  }
];

// Arama butonuna ve giriş kutusuna dinleyiciler ekleyelim
const btn = document.getElementById("search-btn");
const inpWord = document.getElementById("inp-word");

// Arama butonuna dinleyici ekleme
btn.addEventListener("click", searchWord);

// Kelime arama fonksiyonu
function searchWord() {
    let word = inpWord.value.toLowerCase(); 

    const wordData = wordsData.find(item => item.word.toLowerCase() === word);
    
    if (wordData) {
        // Yeni pencereyi açarak HTML dosyasını çağır
        const newPage = window.open('', '_blank');
        newPage.document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word Details</title>
</head>
<style>
    body {
        background-color: #e6e6fa; /* Tüm sayfanın arka plan rengi */
        margin: 0;
        padding: 0;
        min-height: 100vh; /* Sayfa yüksekliğini en az ekran yüksekliği kadar yap */
        display: flex; /* Flexbox kullanarak içerikleri dikey hizalama */
        flex-direction: column; /* İçeriği dikey olarak hizala */
    }

    .container {
        max-width: 100%;
        margin: 0 auto;
        padding: 20px;
        margin-bottom: 50px; /* Footer'ın altında yer alacak boşluk */
        flex: 1; /* Container'ı dikeyde büyüt */
    }

    .word-details {
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 20px;
        margin-bottom: 20px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); /* Added box-shadow property */
    }

    .word-details h1 {
        margin-top: 0;
        font-size: 28px;
    }

    .details {
        margin-bottom: 15px;
    }

    .details p {
        margin: 0;
    }

    .meaning, .example {
        margin-top: 20px;
    }

    .meaning h2, .example h2 {
        margin-top: 0;
    }

    /* Navbar */
    nav {
        background-color: #333;
        padding: 16px 0;
        text-align: left;
        font-family: helvetica;
    }

    nav a {
        color: white;
        text-decoration: none;
        margin: 0 10px;
        font-size: 18px;
    }

    /* Search Box */
    .search-container {
        margin-bottom: 20px;
        display: flex; /* Flexbox kullanarak içerikleri yan yana yerleştirelim */
        align-items: center; /* Dikey hizalamayı ortala */
    }

    .search-container input[type=text] {
        padding: 10px;
        font-size: 17px;
        border: none;
        border-radius: 5px;
        flex: 1; /* Yayılma özelliği ile genişliği doldurmasını sağlayalım */
    }

    .search-container button {
        padding: 10px 15px;
        background: #ddd;
        font-size: 17px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        margin-left: 10px; /* Buton ile input arasındaki boşluğu ayarlayalım */
    }

    .search-container button:hover {
        background: #ccc;
    }

    /* Footer */
    footer {
        background-color: #333;
        color: white;
        text-align: center;
        padding: 20px 0;
        width: 100%;
        position: relative; /* Footer'ı konumlandırmak için */
        bottom: 0;
    }
</style>
<body>
    <nav>
        <a href="#">Ana Sayfa</a>
        <a href="#">Hakkımızda</a>
        <a href="#">İletişim</a>
    </nav>

    <div class="container">
        <!-- Search Box -->
        <div class="search-container">
            <input type="text" placeholder="Search...">
            <button type="submit">Search</button>
        </div>

        <!-- İlk container -->
        <h2>First Word</h2>
        <div class="word-details">
            <h1>${word}</h1>
            <div class="details">
                <p><strong>Part of Speech:</strong> ${wordData.partOfSpeech}</p>
                <p><strong>Phonetic:</strong> /${wordData.phonetic}/</p>
            </div>
            <div class="meaning">
                <h2>Meaning:</h2>
                <p>${wordData.definition}</p>
            </div>
            <div class="example">
                <h2>Example:</h2>
                <p>${wordData.example || "No example available."}</p>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        This is the footer. © 2024 Your Website
    </footer>
</body>
</html>


        `);
    } else {
        // Kelime bulunamadıysa, hata mesajı göster
        result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    }
}
