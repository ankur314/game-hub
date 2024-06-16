import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // Base type is mobile devices
        lg: `"nav nav" "aside main"`, // Devices wider than 1024 px
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      {/* Show this component for devices above lg size */}
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
