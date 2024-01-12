import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import { GameQuery } from './models/game';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';
import useGenres from './hooks/useGenres';
import usePlatforms from './hooks/usePlatforms';

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenreList
            genres={genres?.results}
            selectedGenreId={gameQuery.genreId}
            onSelectedGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading
            gameQuery={gameQuery}
            platforms={platforms?.results}
            genres={genres?.results}
          />
          <Flex gap={3} marginBottom={5}>
            <PlatformSelector
              platforms={platforms?.results}
              selectedPlatformId={gameQuery.platformId}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            />
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
