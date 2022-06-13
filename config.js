importar  {  watchFile ,  unwatchFile  }  desde  'fs'
importar  tiza  desde  'tiza'
importar  {  fileURLToPath  }  desde  'url'

mundial _ propietario  =  [
  [ '972557240121' ,  '👑 Mystic - Creador 👑' ,  true ] ,
  [ '50575008120' ,  '🤖 Mystic-Bot 🤖' ,  cierto ] ,
  [ '17722386341' ]
]  // Cambia los numeros que quieras
mundial _ modificaciones  =  [ ] 
mundial _ prem  =  [ ] 
mundial _ API  =  {  // Prefijo API
  // nombre: 'https://sitio web'
  amel : 'https://melcanz.com' ,
  bx : 'https://bx-hunter.herokuapp.com' ,
  nrtm : 'https://nurutomo.herokuapp.com' ,
  xequipo : 'https://api.xequipo.xyz' ,
  nzcha : 'http://nzcha-apii.herokuapp.com' ,
  bg : 'http://bochil.ddns.net' ,
  fdci : 'https://api.fdci.se' ,
  dzx : 'https://api.dhamzxploit.my.id' ,
  bsbt : 'https://bsbt-api-rest.herokuapp.com' ,
  zahir : 'https://zahirr-web.herokuapp.com' ,
  zeks : 'https://api.zeks.me' ,
  hardianto : 'https://hardianto-chan.herokuapp.com' ,
  pencarikode : 'https://pencarikode.xyz' , 
  LeysCoder : 'https://leyscoders-api.herokuapp.com' ,
  adisus : 'https://adiixyzapi.herokuapp.com' ,
  lol : 'https://api.lolhuman.xyz' ,
  pencarikode : 'https://pencarikode.xyz' ,
  Velgurind : 'https://velgurind.herokuapp.com' ,
  rey : 'https://servidor-api-rey.herokuapp.com' ,
  hardianto : 'http://hardianto-chan.herokuapp.com' ,
  sombra : 'https://api.reysekha.xyz' ,
  apialc : 'https://api-alc.herokuapp.com' ,
  estilo de bot : 'https://botstyle-api.herokuapp.com' ,
  neoxr : 'https://neoxr-api.herokuapp.com' ,
  ana : 'https://anabotofc.herokuapp.com/' ,
  kanx : 'https://kannxapi.herokuapp.com/' ,
  dhnjing : 'https://dhnjing.xyz'
} ,
mundial _ APIKeys  =  {  // APIKey aquí
  // 'https://sitio web': 'apikey'
  'https://api-alc.herokuapp.com' : 'ConfuMods' ,
  'https://api.reysekha.xyz' : 'apirey' ,
  'https://melcanz.com' : 'F3bOrWzY' ,
  'https://bx-hunter.herokuapp.com' : 'Ikyy69' ,
  'https://api.xteam.xyz' : '5bd33b276d41d6b4' ,
  'https://zahirr-web.herokuapp.com' : 'zahirgans' ,
  'https://bsbt-api-rest.herokuapp.com' : 'benniismael' ,
  'https://api.zeks.me' : 'apivinz' ,
  'https://hardianto-chan.herokuapp.com' : 'hardianto' ,
  'https://pencarikode.xyz' : 'país' , 
  'https://leyscoders-api.herokuapp.com' : 'MIMINGANZ' , 
  'https://servidor-api-rey.herokuapp.com' : 'apirey' ,
  'https://api.lolhuman.xyz' : '9b817532fadff8fc7cb86862' ,
  'https://botstyle-api.herokuapp.com' : 'Eyar749L' ,
  'https://neoxr-api.herokuapp.com' : 'yntkts' ,
  'https://anabotofc.herokuapp.com/' : 'AnaBot'
}

// Adhesivo WM
mundial _ nombre del paquete  =  '(☞ﾟ∀ﾟ)☞'
mundial _ autor  =  '★𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝★'

mundial _ wm  =  '★𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝★'
mundial _ igfg  =  '★𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝★'
mundial _ esperar  =  '*⌛ _Cargando..._ ▬▬▬▭*'

mundial _ multiplicador  =  9999  // Cuanto más alto, más difícil subir de nivel

mundial _ juego de rol  =  {
  emoticón ( cadena )  {
    cadena  =  cadena . a Minúsculas ( )
    dejar  emot  =  {
      nivel : '🏆' ,
      límite : '💎' ,
      experiencia : ' 🕹️ '
    }
    dejar  resultados  =  Objeto . teclas ( emot ) . mapa ( v  =>  [ v ,  nueva  RegExp ( v ,  'gi' ) ] ) . filtro ( v  =>  v [ 1 ] . prueba ( cadena ) )
    if  ( ! resultados . longitud )  devuelve  ''
    de lo contrario  devolver  emot [ resultados [ 0 ] [ 0 ] ]
  }
}


let  file  =  fileURLToPath ( importar . meta . url )
watchFile ( archivo ,  ( )  =>  {
  unwatchFile ( archivo )
  consola _ registro ( tiza . redBright ( "Actualizar 'config.js'" ) )
  import ( ` ${ archivo } ?update= ${ Fecha . ahora ( ) } ` )
} )
