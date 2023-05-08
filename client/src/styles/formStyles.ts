import {makeStyles} from "tss-react/mui";

export const formStyles = makeStyles()((theme) => ({
    container: {
        // Make column
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        justifyContent: "center",
    },
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        justifyContent: "center",
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    formContent: {
        padding: "1rem",
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
