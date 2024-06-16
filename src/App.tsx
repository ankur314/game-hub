import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // Base type is mobile devices
        lg: `"nav nav" "aside main"`, // Devices wider than 1024 px
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      {/* Show this component for devices above lg size */}
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
