import { Box, Button, Typography } from '@mui/material';

interface HeaderProps {
  handleNewGame: () => void
}

export function Header(props: HeaderProps) {
  return (
    <Box
      display="flex"
      flex={1}
      alignItems="center"
      justifyContent="space-between"
      padding="2rem"
    >
      <Typography variant="h2" fontSize="2rem" fontWeight="bold">
        tc memory game
      </Typography>
      <Box display="flex" gap="1rem">
        <Button
          onClick={() => {
            props.handleNewGame()
          }}
          variant="contained"
          sx={{ textTransform: 'lowercase' }}
        >
          new game
        </Button>
      </Box>
    </Box>
  );
}
