import { Link, useLocation } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  ListSubheader,
} from '@mui/joy';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

function Sidebar() {
  const location = useLocation();

  return (
    <List size="sm" sx={{ '--List-item-radius': '8px', '--List-gap': '4px' }}>
      <ListItem nested>
        <ListSubheader>Browse</ListSubheader>
        <List
          aria-labelledby="nav-list-browse"
          sx={{
            '& .JoyListItemButton-root': { p: '8px' },
          }}
        >
          <Link to="/dashboard/stats" style={{ textDecoration: 'none' }}>
            <ListItem>
              <ListItemButton
                variant="solid"
                color={
                  location.pathname === '/dashboard/stats' ? 'primary' : null
                }
              >
                <ListItemDecorator
                  sx={
                    location.pathname === '/dashboard/stats'
                      ? { color: '#ffffff' }
                      : null
                  }
                >
                  <AnalyticsIcon fontSize="small" />
                </ListItemDecorator>
                <ListItemContent>Stats</ListItemContent>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/dashboard/all-jobs" style={{ textDecoration: 'none' }}>
            <ListItem>
              <ListItemButton
                variant="solid"
                color={
                  location.pathname === '/dashboard/all-jobs' ? 'primary' : null
                }
              >
                <ListItemDecorator
                  sx={
                    location.pathname === '/dashboard/all-jobs'
                      ? { color: '#ffffff' }
                      : null
                  }
                >
                  <ManageSearchIcon fontSize="small" />
                </ListItemDecorator>
                <ListItemContent>All Jobs </ListItemContent>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/dashboard/add-job" style={{ textDecoration: 'none' }}>
            <ListItem>
              <ListItemButton
                variant="solid"
                color={
                  location.pathname === '/dashboard/add-job' ? 'primary' : null
                }
              >
                <ListItemDecorator
                  sx={
                    location.pathname === '/dashboard/add-job'
                      ? { color: '#ffffff' }
                      : null
                  }
                >
                  <PostAddIcon fontSize="small" />
                </ListItemDecorator>
                <ListItemContent>Add Job </ListItemContent>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </ListItem>
    </List>
  );
}

export default Sidebar;
