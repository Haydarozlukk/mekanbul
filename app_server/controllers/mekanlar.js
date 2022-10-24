var express = require("express");
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render('anasayfa',
   { 
        "baslik": "HAYDAR ÖZLÜK",
        "sayfaBaslik":{
          "siteAd":"MekanBul",
          "slogan":"Civardaki Mekanları Keşfet!"
        },
        "mekanlar":[
          {
              "ad":"Burç Fırın",
              "adres":"Barida Hotel Karşısı",
              "puan":"4",
              "imkanlar":["Tatlı","İçecek",],
              "mesafe":"2km"
              
          },
          {
            "ad":"Cam Kafe",
            "adres":"Sdü Batı Kampüsü",
            "puan":"4",
            "imkanlar":["Kurabiye","Döner","Tost"],
            "mesafe":"500m"
          }

        ]
  
  });
}

const mekanBilgisi = function (req, res,next) {
  res.render('mekanbilgisi',
   { 
    "baslik": "Mekan Bilgisi",
    "mekanBaslik":"Burç Fırın",
    "mekanDetay":{
      "ad":"Burç Fırın",
      "puan":"4",
      "adres":"Barida Hotel Karşısı",
      "saatler": [
        {
            "gunler": "Pazartesi-Cuma",
            "acilis": "9:00-23:00",
            "kapali": "false"
        },
        {
            "gunler": "Cumartesi-Pazar",
            "acilis": "10:00-22:00",
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
        "yorumMetni": "Berbattı",
        "tarih": "21 Ekim 2022",
        "puan": "2"
      }
    ]
  }
});
}

const yorumEkle = function (req, res,next) {
  res.render("yorumekle", { "title": "Yorum Ekle"});
}
module.exports = {

  anaSayfa,
  mekanBilgisi,
  yorumEkle,
}