var mongoose=require("mongoose");
//var   dbURI="mongodb://127.0.0.1/mekanbul";
var dbURI="mongodb+srv://Haydar:1234@mekanbul.wwqeu4p.mongodb.net/mekanbul?retryWrites=true&w=majority";
mongoose.connect(dbURI);
function    kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    });

}
process.on("SIGINT",function(){
    kapat("uygulama kapatıldı",function(){
            process.exit(0);
    });
});


mongoose.connection.on("connected",function(){
    console.log(dbURI+"adresindeki  veritabanına  bağlandı.\n");
});    
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+"bağlantı koptu.\n");
});
mongoose.connection.on("error",function(){
    console.log(dbURI+"bağlantı kesildi.\n");
});

require("./mekansema");