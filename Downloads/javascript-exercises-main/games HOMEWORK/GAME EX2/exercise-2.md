## Whack a mole


1 FUNCION: timeLeft, cuentaatras desde 30000milisegundos, que se transcriba en el timer$$/time-left. cuando llega a cero salta alert de time out



2 FUNCION: todos los cuadrados tienen de imgCover imgBack, imgMole tiene un i random cada 500 milisegundos,?? y ese cuadrado tiene un listener de clicks q añade 1 a score

3 




Dado el html ``exercise-2.html`` y el css ``exercise-2.css``, crea un archivo de javascript (recuerda que el javascript que
 proporcionamos nosotros es el que contiene la solución propuesta) para crear un el típico juego de atrapar topos
 ...pero en este caso deberemos atrapar a Diglett!
 
 Para ello abre el fichero ``exercise-2.html`` en tu navegador y verás el resultado final de lo que queremos conseguir
 . Como ves, vamos a tener un contador y a nuestro escurridizo Diglett **moviendose cada 0.5 segundos a una casilla
  aleatoria hasta que finaliza el contador**. La intención del usuario es conseguir hacer click en la imagen de Diglett
   cuantas más veces posibles hasta que finalice el contador y **registrar cada click efectivo como un punto en el score**
   . Una vez que esto ocurra mostraremos una alerta al
    usuario con la puntuación obtenida.
  
##Condiciones
  
  1. Digglet debe moverse a una posición aleatoria cada 0.5 segundos y poner el resto de casillas con la imagen
   predefinida de las pokeballs.
  2. Si el usuario, en esos 0.5 segundos consigue hacer click en Diglett, el contador ``Your score`` sumara 1.
  2. Cada segundo, debes restar 1 al contador de ``Seconds left``.
  3. Cuando el contador ``Seconds left`` llegue a 0, muestra un alert al usuario con la puntuación total.
  
  Y eso es todo! aplica tus conocimientos de la mejor forma posible y...a cazar Digletts!
