import React, { useState } from 'react';
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, Menu, MenuItem} from "@mui/material";

type FilterOption = {
    label: string;
    value: string;
};

type FilterGroup = {
    label: string;
    options: FilterOption[];
};

type FilterState = {
    [key: string]: string[];
};

interface FilterButtonProps {
    filterGroups: FilterGroup[];
    onApplyFilter: (filterState: FilterState) => void;
    maxHeight?: string;
}

function FilterButton (props: FilterButtonProps) {
    const { filterGroups, onApplyFilter, maxHeight } = props;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [filterState, setFilterState] = useState<FilterState>({});

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCheckboxChange = (filterGroupLabel: string, optionValue: string) => (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const isChecked = event.target.checked;
        setFilterState((prevState) => {
            const newFilterState = { ...prevState };
            if (isChecked) {
                newFilterState[filterGroupLabel] = [...(newFilterState[filterGroupLabel] ?? []), optionValue];
            } else {
                newFilterState[filterGroupLabel] = newFilterState[filterGroupLabel]?.filter((v) => v !== optionValue);
            }
            return newFilterState;
        });
    };

    const handleApplyFilter = () => {
        onApplyFilter(filterState);
        handleClose();
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClick}>
                Filter
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight,
                        minWidth: '200px',
                    },
                }}
            >
                {filterGroups.map((group) => (
                    <MenuItem key={group.label}>
                        <FormControl component="fieldset">
                            <FormGroup>
                                <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>{group.label}</div>
                                {group.options.map((option) => (
                                    <FormControlLabel
                                        key={option.value}
                                        control={
                                            <Checkbox
                                                checked={(filterState[group.label] ?? []).includes(option.value)}
                                                onChange={handleCheckboxChange(group.label, option.value)}
                                                name={option.label}
                                                color="primary"
                                            />
                                        }
                                        label={option.label}
                                    />
                                ))}
                            </FormGroup>
                        </FormControl>
                    </MenuItem>
                ))}
                <MenuItem onClick={handleApplyFilter}>Apply</MenuItem>
            </Menu>
        </div>
    );
};

export default FilterButton;