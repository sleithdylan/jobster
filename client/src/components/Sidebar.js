import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListSubheader from '@mui/joy/ListSubheader';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <List size="sm" sx={{ '--List-item-radius': '8px', '--List-gap': '4px' }}>
      <ListItem nested>
        <ListSubheader>
          Browse
          <IconButton
            size="sm"
            variant="plain"
            color="primary"
            sx={{ '--IconButton-size': '24px', ml: 'auto' }}
          >
            <KeyboardArrowDownIcon fontSize="small" color="primary" />
          </IconButton>
        </ListSubheader>
        <List
          aria-labelledby="nav-list-browse"
          sx={{
            '& .JoyListItemButton-root': { p: '8px' },
          }}
        >
          <Link to="/dashboard/stats" style={{ textDecoration: 'none' }}>
            <ListItem>
              <ListItemButton variant="soft" color="primary">
                <ListItemDecorator sx={{ color: 'inherit' }}>
                  <AnalyticsIcon fontSize="small" />
                </ListItemDecorator>
                <ListItemContent>Stats</ListItemContent>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="all-jobs" style={{ textDecoration: 'none' }}>
            <ListItem>
              <ListItemButton>
                <ListItemDecorator sx={{ color: 'neutral.500' }}>
                  <ManageSearchIcon fontSize="small" />
                </ListItemDecorator>
                <ListItemContent>All Jobs </ListItemContent>
              </ListItemButton>
            </ListItem>
          </Link>{' '}
          <Link to="add-job" style={{ textDecoration: 'none' }}>
            <ListItem>
              <ListItemButton>
                <ListItemDecorator sx={{ color: 'neutral.500' }}>
                  <PostAddIcon fontSize="small" />
                </ListItemDecorator>
                <ListItemContent>Add Job </ListItemContent>
              </ListItemButton>
            </ListItem>{' '}
          </Link>
        </List>
      </ListItem>
    </List>
  );
}

export default Sidebar;
