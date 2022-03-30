# **EVENTO PROPAGACION Y CAPTURA DE JAVASCRIPT**

**PROPAGACIÓN**
* Cuando un evento ocurre en un elemento, este primero ejecuta los manejadores que tiene asignados, luego los manejadores de su padre, y así hasta otros ancestros.
Una de las intenciones de JavaScript con la creación del patrón de propagación de eventos era facilitar la captura de eventos de una fuente, el elemento padre, en lugar de configurar un controlador de eventos en cada elemento secundario interno.

**Orden de activación de propagación de eventos**
* Es el elemento padre que contendrá a los flex-items y que indicará el posicionamiento de sus hijos dentro de él. Para definirlo se usa el valor flexen la propiedad display.

![Error](https://ehsankorhani.com/images/js-event-capture-bubble.png)

1. **Fase de captura:** es la primera fase en la que se activa un evento. Este evento "captura" o se propaga primero a través del evento padre, que es el objeto de window, luego el document, luego el html y luego los demás elementos internos. Baja hasta que llega al event.target (en lo que hiciste clic / el evento desencadenado).
2. **Fase objetiva:** la segunda fase es cuando llegamos al event.target . Por ejemplo, cuando un usuario hace clic en un botón, este es el elemento actual de botón.
3. **Fase de propagación:** la tercera fase. Este evento comienza desde event.target y se propaga hasta que llega al elemento padre superior nuevamente (aunque el evento del elemento padre no se vuelve a llamar).

**¿Qué es FLEX-ITEM?**
* Es el elemento que se encuentra dentro del flex-container que tendrá un comportamiento automático dependiendo lo que defina el elemento padre.

**Tabla de propiedades Padres (CONTAINER)**
|     PROPIEDAD     |  ¿QUÉ HACE? | VALORES  |
|-------------------|-------------|----------|
|    1.-Display       |  Esto es lo único que necesitamos para configurar el contenedor principal y automáticamente todos sus hijos se convertirán en elementos flex.           | **OUTSIDE**block, inline,run-in.   **INSIDE**flow, flow-root, table, flex, grid, subgrid, ruby.     **INTERNAL**table-row-group, table-header-group, table-footer-group, table-row, table-cell, table-column-group, table-column, table-caption, ruby-base, ruby-text, ruby-base-container, ruby-text-container.    **BOX** contents, none.     **LEGACY** inline-block, inline-table, inline-flex, inline-grid.            |
|  2.-Flex-direction   |  Esta propiedad define las direcciones del main-axis, es decir, hacia donde se moverán los flex-items, tanto horizontalmente como verticalmente.           |  column, row, row-reverse, column-reverse.        |
|    3.-Flex-wrap      |  Por defecto los flex-items intentarán estar contenidos en una sola línea. Con esta propiedad puedes cambiarlo y permitir que los items se envuelvan como sea necesario.           | wrap, nowrap, wrap-reverse.         |
|    4.-Flex-flow      |  Esta propiedad combina las propiedades flex-direction y flex-wrap.           | row wrap.         |
|  5.-Justify-content  |  Esta propiedad define cómo los elementos flexibles se alinean a lo largo del main-axis (horizontal).           |  center, flex-start, flex-end, space-around, space-between.         |
|    6.-Align-items    |  Esta propiedad define cómo los elementos flexibles se disponen a lo largo del cross-axis (vertical).           | center, flex-start, flex-end, stretch, baseline.            |
|   7.-Align-content   |  Esta propiedad controla la alineación de las lineas a lo largo del cross-axis cuando los elementos no utilizan todo el espacio disponible.           | flex-start, flex-end, stretch, center,space-between.          |