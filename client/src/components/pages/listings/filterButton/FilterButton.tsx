// FilterButton.tsx
import React, { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText, Typography, Button, Checkbox } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './styles.scss'; // Import the styles

interface Filter {
  [key: string]: boolean;
}

interface Filters {
  [key: string]: Filter;
}

export const FilterButton: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Filters>({});

  const handleToggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  const handleFilterToggle = (section: string, filter: string) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [section]: {
        ...prevFilters[section],
        [filter]: !prevFilters[section]?.[filter],
      },
    }));
  };

  const handleSubmitFilters = () => {
    // Implement logic to handle selected filters
    console.log('Selected Filters:', selectedFilters);
    setIsDrawerOpen(false);
  };

  const locationFilters = ['City A', 'City B', 'City C'];
  const workTypeFilters = ['Full-Time', 'Part-Time', 'Freelance'];
  const experienceFilters = ['Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="filterButton">
      <IconButton color="inherit" onClick={handleToggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleToggleDrawer(false)}>
        <List className="filterList">
          <ListItem>
            <Typography variant="h6">Filters</Typography>
          </ListItem>
          <ListItem className="filterSection" alignItems={'flex-start'}>
            <Typography variant="body1">Location</Typography>
            {locationFilters.map((filter) => (
              <ListItem key={filter}>
                <Checkbox
                  checked={selectedFilters.location?.[filter] || false}
                  onChange={() => handleFilterToggle('location', filter)}
                  className="filterCheckbox"
                />
                <ListItemText primary={filter} />
              </ListItem>
            ))}
          </ListItem>
          <ListItem className="filterSection" alignItems={'flex-start'}>
            <Typography variant="body1">Type of Work</Typography>
            {workTypeFilters.map((filter) => (
              <ListItem key={filter}>
                <Checkbox
                  checked={selectedFilters.workType?.[filter] || false}
                  onChange={() => handleFilterToggle('workType', filter)}
                  className="filterCheckbox"
                />
                <ListItemText primary={filter} />
              </ListItem>
            ))}
          </ListItem>
          <ListItem className="filterSection" alignItems={'flex-start'}>
            <Typography variant="body1">Experience of Workers</Typography>
            {experienceFilters.map((filter) => (
              <ListItem key={filter}>
                <Checkbox
                  checked={selectedFilters.experience?.[filter] || false}
                  onChange={() => handleFilterToggle('experience', filter)}
                  className="filterCheckbox"
                />
                <ListItemText primary={filter} />
              </ListItem>
            ))}
          </ListItem>
          <ListItem>
            <Button variant="contained" color="primary" onClick={handleSubmitFilters} className="filterSubmitButton">
              Submit
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};
