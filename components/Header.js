import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const Header = () => {

  return (
    <AppBar position="static">
        <Toolbar>
          <MeetingRoomIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MT空室確認
          </Typography>
        </Toolbar>
    </AppBar>
  );
};
export default Header;
