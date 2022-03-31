# **EVENTO PROPAGACION Y CAPTURA DE JAVASCRIPT**

![Error](https://byspel.com/wp-content/uploads/2016/10/672274_cd11_2.jpg)

**CONCEPTO GENERAL DE CAPTURA Y PROPAGACION**
* La captura de eventos y el burbujeo de eventos son dos procesos opuestos. Puede haber una analogía muy apropiada. Cuando rompes un objeto que puede flotar en el agua y lo arrojas al agua, primero tendrá un proceso descendente. Este proceso puede entenderse como el proceso de capturar el elemento específico (punto objetivo) desde el nivel superior hasta el evento; luego, debido a que la flotabilidad es mayor que la gravedad del objeto en sí, el objeto flotará en el agua después de alcanzar el punto más bajo (elemento específico) Este proceso Comparado con la captura de eventos, es un proceso retrospectivo, es decir, burbujeo de eventos

**CAPTURA**
* Los elementos en una relación de anidamiento estructural (no visual) tendrán la función de captura de eventos, es decir, el mismo evento se captura desde el elemento principal al elemento secundario.
En esta fase, se llama a los oyentes capturadores cuyo valor se ha registrado como 'verdadero'. Está escrito como:

**el.addEventListener('click', listener, true)**

Aquí, el valor de escucha se ha registrado como 'verdadero', por lo que se captura este evento. Si no había ningún valor, el valor predeterminado era falso y el evento no se capturaría. Entonces, en esta fase, ese evento cuyo valor es verdadero solo se abre camino desde la ventana y es llamado y capturado.

Luego, en la fase de destino del evento, se llama a todos los oyentes registrados independientemente de que el estado de su bandera sea verdadero o falso.

**PROPAGACIÓN**
* Cuando un evento ocurre en un elemento, este primero ejecuta los manejadores que tiene asignados, luego los manejadores de su padre, y así hasta otros ancestros.
Una de las intenciones de JavaScript con la creación del patrón de propagación de eventos era facilitar la captura de eventos de una fuente, el elemento padre, en lugar de configurar un controlador de eventos en cada elemento secundario interno.

**Orden de activación de propagación de eventos**
* Es el elemento padre que contendrá a los flex-items y que indicará el posicionamiento de sus hijos dentro de él. Para definirlo se usa el valor flexen la propiedad display.

![Error](https://ehsankorhani.com/images/js-event-capture-bubble.png)

1. **Fase de captura:** es la primera fase en la que se activa un evento. Este evento "captura" o se propaga primero a través del evento padre, que es el objeto de window, luego el document, luego el html y luego los demás elementos internos. Baja hasta que llega al event.target (en lo que hiciste clic / el evento desencadenado).
2. **Fase objetiva:** la segunda fase es cuando llegamos al event.target . Por ejemplo, cuando un usuario hace clic en un botón, este es el elemento actual de botón.
3. **Fase de propagación:** la tercera fase. Este evento comienza desde event.target y se propaga hasta que llega al elemento padre superior nuevamente (aunque el evento del elemento padre no se vuelve a llamar).