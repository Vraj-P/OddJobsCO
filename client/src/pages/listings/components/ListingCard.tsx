import React from 'react';
import { makeStyles } from 'tss-react/mui';
import {Card, CardContent, Typography, Button, IconButton, Grid} from '@mui/material';
import { Link } from 'react-router-dom';
import {ListingCardData} from "../../../types";
import DeleteIcon from '@mui/icons-material/Delete';

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

function ListingCard(props : ListingCardData) {
    const { classes, cx } = useStyles();
    const { title, id, edit } = props;
    return (
        <Card className={cx(classes.card)}>
            <CardContent className={cx(classes.content)}>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
            </CardContent>
            {edit ? (
                <>
                    <Grid container justifyContent={"flex-end"}>
                        <IconButton
                            color="primary"
                            component="label"
                            disableRipple = {true}
                        >
                            <DeleteIcon/>
                        </IconButton>
                        <Button
                            disableRipple={true}
                            className={cx(classes.detailsButton)}
                            variant="contained"
                            color="primary"
                            component={Link}
                            to={`/edit/${id}`}
                        >
                            Edit
                        </Button>
                    </Grid>

                </>
            ) : (
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
            )}

        </Card>
    );
}

export default ListingCard;
