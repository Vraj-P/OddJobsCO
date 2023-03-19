import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
    title: string;
    id: number;
}

function ListingCard(props : ListingCardProps) {
    const { classes, cx } = useStyles();
    const { title, id } = props;
    return (
        <Card className={cx(classes.card)}>
            <CardContent className={cx(classes.content)}>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
            </CardContent>
            <Button
                disableRipple = {true}
                className={cx(classes.detailsButton)}
                variant="contained"
                color="primary"
                component={Link}
                to={`/listing/${id}`}
            >
                Details
            </Button>
        </Card>
    );
}

export default ListingCard;
