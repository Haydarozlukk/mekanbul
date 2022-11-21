var dbURI="mongodb+srv://Haydar:1234@mekanbul.juxcr0h.mongodb.net/mekanbul?retryWrites=true&w=majorit";
var mongoose=require("mongoose");
//var dbURI = 'mongodb://127.0.0.1/mekanbul'; 
mongoose.connect(dbURI);

function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    });
}

process.on("SIGINT",function(){
    kapat("Uygulama kapatıldı",function(){
        process.exit(0);
    });
})


mongoose.connection.on("connected",function(){
    console.log(dbURI+"adresindeki veritabanına bağlandı.");
})


mongoose.connection.on("disconnected",function(){
    console.log("Bağlantı koptu.");
})


mongoose.connection.on("error",function(){
    console.log("Bağlantı hatası.");
})


require("./mekansema")