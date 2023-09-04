let contador = 4;

setInterval( function(){
    if (document.getElementById('checkbox') !== null) {
        document.getElementById('checkbox').checked = true;
      }
    contador++;
}, 3000 );