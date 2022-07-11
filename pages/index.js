import { CssBaseline, Container } from '@mui/material';

import Header from '../components/Header';
import MeetingRoomTable from '../components/MeetingRoomTable';

const App = () => {

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">
        <MeetingRoomTable />
      </Container>
    </>
  );
};
export default App;
