INTRODUCTION: 

Biblio-lite employs a component-based design system that relies on reusable or "named" components that are then styled through props using a combination of BEM and utility classes.

GRID:
Container components use CSS Grid to define their layout and to easily place child components within them.

Child components use BEM and utility classes to define their style and to further refine their placement within their parent Grid containers.

Grid components strive to be as flexible as possible by allowing grids to be defined however the user would like through the use of utility classes in the grid prop, such as ".grid-temp-1x3" or ".grid-auto-rows-max-content".

  export default function Grid(props) {
    let grid = props.grid ? ` ${props.grid}` : "";
    let gap = props.gap ? ` ${props.gap}` : "";
    let padding = props.padding ? ` ${props.padding}` : "";
    let margin = props.margin ? ` ${props.margin}` : "";

    return(
      <div className={`grid${grid}${gap}${margin}${padding}`}>      
        {props.children}
      </div>           
    );
  };

Components that import Grid are also likely to be nested inside another grid. They are passed the same props for Grid shown above as well as additional props that define the rows and columns that they occupy:

  export default function Header(props) {
    return(
      <header className={`${props.className ? props.className : ""}${props.rows ? ` ${props.rows}` : ""}${props.cols ? ` ${props.cols}` : ""}`}>
        <Grid grid={props.grid} gap={props.gap} padding={props.padding} margin={props.margin} >
          {props.children}
        </Grid>
      </header>
    );
  };

REUSABLE VS NAMED COMPONENTS:
Components are designed with reusability in mind, when it makes most sense. For example, those that act as containers are defined by a reusalbe Grid component.

Those components can themselves be reusable, like the Header or Form components. Components that are likely to be used only once in an application, such as the Home component, are referred to in this system as named components.

NAMED COMPONENTS ACROSS APPLICATIONS:
Even though components like Home may only be used once in an application, they are reusable across applications:


  export default function Home(props) {
    return(
      <section className='home'>
        <Grid grid={props.grid} gap={props.gap} padding={props.padding} margin={props.margin} >
          {props.children}
        </Grid>
      </section>
    );
  };

UTILITY CLASSES:
Utility classes are named to be as expressive of their value as possible to give readers immediate contextual information.
For example, take the following classes for font-sizes:

  .fs-1rem {font-size: var(--fs-default)};
  .fs-2rem {font-size: calc(2 * var(--fs-default))};
  .fs-5rem {font-size: calc(5 * var(--fs-default))};

The actual values (1rem, 2rem, and 5rem) are preferred over labels such as "sm," m," or "l".
