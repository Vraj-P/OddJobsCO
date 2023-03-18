import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Card, CardContent, Typography, Button } from '@mui/material';

const useStyles = makeStyles()((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
    },
    content: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    detailsButton: {
        alignSelf: 'flex-end',
    },
}));

interface ListingCardProps {
    name: string;
};

function ListingCard(props : ListingCardProps) {
    const { classes, cx } = useStyles();
    const { name } = props;
    return (
        <Card className={cx(classes.card)}>
            <CardContent className={cx(classes.content)}>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
            </CardContent>
            <Button className={cx(classes.detailsButton)} variant="contained" color="primary">
                Details
            </Button>
        </Card>
    );
}

export default ListingCard;
