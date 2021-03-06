# **PROPIEDADES FLEXBOX**

**¿Qué es?**
* Flexbox es un método de diseño de página unidimensional para compaginar elementos en filas o columnas. Los elementos de contenido se ensanchan para rellenar el espacio adicional y se encogen para caber en espacios más pequeños.

![Error](https://miro.medium.com/max/1318/1*2nFQE8qZgUq0kTyju6Bnvg.png)

**¿Qué es FLEX-CONTAINER?**
* Es el elemento padre que contendrá a los flex-items y que indicará el posicionamiento de sus hijos dentro de él. Para definirlo se usa el valor flexen la propiedad display.

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

![Error](https://www.w3.org/TR/css3-flexbox/images/align-content-example.svg)

**Tabla de propiedades Hijos (ITEM)**
| PROPIEDAD  |  ¿QUÉ HACE? | VALORES  |
|------------|-------------|----------|
| 1.-Order      |Con esta propiedad controlamos el orden de los flex-items que están dentro del flex-container. Por defecto aparecen en el orden que indica el código fuente.             | número.          |
| 2.-Flex-grow  |Esta propiedad especifica el factor que determina hasta que punto un flex-item crecerá en relación con el resto de los flex-items.             | número.         |
| 3.-Flex-shrink|Esta propiedad da la capacidad de encoger los flex-items si es necesario.             |  número.        |
| 4.-Flex-basis |Esta propiedad tiene los mismos valores que las propiedades width y height y especifica el tamaño principal del flex-item, distribuyéndose de acuerdo con los factores flex.             | width, content.         |
| 5.-Flex       |Esta propiedad solo es la abreviatura de flex-grow, flex-shrink y flex-basis.             | row, row-reverse, column, column-reverse.         |
| 6.-Align-self |Esta propiedad permite sobreescribir la alineación por defecto (o la especificada por align-items) para flex-items individualmente.             | auto, flex-start, flex-end, center, baseline, stretch.          |


