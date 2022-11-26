var express = require('express');
var router = express.Router();

//anasayfa ismi sabit kalması için const yapılır

const anaSayfa = function(req, res, next) {
  res.render('anasayfa',
    {
      "baslik": 'Haydar Özlük',
      "sayfaBaslik": {
        "siteAd": "MekanBul",
        "slogan": "Civardaki Mekanları Kesfet"
      },
      "mekanlar": [
        {
          "ad": "Burç Fırın",
          "puan": "5",
          "adres": "Barida Hotel Karşısı",
          "imkanlar": ["Tatlı", "Çay", "İçecek"],
          "mesafe": "1km"
        },
        {
          "ad": "Cam Kafe",
          "puan": "3",
          "adres": "SDÜ Batı Kampüsü",
          "imkanlar": ["Döner", "Ayran", "Tost"],
          "mesafe": "500m"
        }

      ]

    });
}

const mekanBilgisi = function(req, res, next) {
  res.render('mekanbilgisi',
    {
      "baslik": 'Mekan Bilgisi',
      "mekanBaslik": "Burç Fırın",
      "mekanDetay": {
        "ad": "Burç Fırın",
        "puan": "5",
        "adres": "Barida Hotel Karşısı",
        "saatler": [
          {
            "gunler": "Pazartesi - Cuma",
            "acilis": "9:00-23:00",
            "kapali": "false"
          },
          {
            "gunler": "Cumartesi - Pazar",
            "acilis": "08:00-22:00",
            "kapali": "false"
          }

        ],
        "imkanlar": ["Tatlı", "Çay", "İçecek"],
        "koordinatlar": {
          "enlem": "37.7",
          "boylam": "30.5"
        },
        "yorumlar": [
          {
            "yorumYapan": "Haydar Özlük",
            "yorumMetni": "Harikaydı",
            "tarih": "21 Ekim 2022",
            "puan": "5"
          },
          {
            "yorumYapan": "Sultan Özlük",
            "yorumMetni": "Berbatttı",
            "tarih": "21 Ekim 2022",
            "puan": "2"
          }
        ]
      }
    });
}

const yorumEkle = function(req, res, next) {
  res.render('yorumekle', { title: 'Yorum Ekle' });
}

module.exports = {
  anaSayfa, mekanBilgisi, yorumEkle
}