const musica = {
  rana:['brr','birip','brrah','croac'],
  grillo:['cric-cric','trri-trri','bri-bri'],
  libelula:['fiu','flop','pep'],
  cancion(sound){
    if(sound==='brr'){
      return this.libelula[0]+' '+this.grillo[0]+' '+this.rana[2]
    }
    if(sound==='birip'){
      return this.grillo[1]+' '+this.rana[3] //la canción incluye un 'pep' pero la orden pide solo 2 sonidos
    }
    if(sound==='plop'){
      return this.grillo[0]+' '+this.rana[2]
    }
    if(sound==='croac' || sound==='brrah'){
      return  ' '
    }
  }
}

function melody(song){
  let result = document.querySelector('.cancion');
  result.innerHTML=`<span style='color:#28CF2D;'>${song}</span> ${musica.cancion(song)}`;
}