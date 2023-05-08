import React, {useEffect, useState} from 'react';
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, Menu, MenuItem} from "@mui/material";
import {FilterGroup} from "../../../types";

type FilterState = {
    [key: string]: string[];
};

interface FilterButtonProps {
    filterGroups: FilterGroup[];
    fullWidth: boolean;
    onFilterSubmit: (filterState: FilterState) => void;
    defaultFilterState?: FilterState;
}

function FilterButton (props: FilterButtonProps) {
    const { filterGroups, fullWidth, onFilterSubmit, defaultFilterState } = props;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [filterState, setFilterState] = useState<FilterState>({});

    useEffect(() => {
        console.log(defaultFilterState)
        setFilterState(defaultFilterState || {});
    }, [defaultFilterState]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        console.log(filterState);
        onFilterSubmit(filterState);
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
        handleClose();
    };

    return (
        <>
            <Button disableRipple = {true} variant="contained" color="primary" onClick={handleClick} fullWidth={fullWidth}>
                Filter
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: '350px',
                        minWidth: '200px',
                    },
                }}
            >
                {filterGroups.map((group) => (
                    <MenuItem
                        sx={{"&:hover": {backgroundColor: "white" }}}
                        key={group.label}
                        disableRipple = {true}
                    >
                        <FormControl component="fieldset">
                            <FormGroup>
                                <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>{group.label}</div>
                                {group.options.map((option) => (
                                    <FormControlLabel
                                        key={option.value}
                                        control={
                                            <Checkbox
                                                disableRipple = {true}
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
        </>
    );
}

export default FilterButton;