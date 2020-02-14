// ======= Puerto
process.env.PORT = process.env.PORT || 3000

// ======= Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// ======= JWT
process.env.CADUCIDAD_TOKEN = 60*60*24*30
process.env.SECURITY = process.env.SECURITY || 'secret-jwt-desarrollo'


let urlDB

if(process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_DB
}

process.env.URLDB = urlDB
