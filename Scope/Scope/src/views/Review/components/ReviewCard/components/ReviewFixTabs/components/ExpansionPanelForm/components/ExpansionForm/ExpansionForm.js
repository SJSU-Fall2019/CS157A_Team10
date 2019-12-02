import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 1000,
    },
    saveReviewBtn:{
        backgroundColor: '#2196f3',
        padding: 10,
        marginLeft:900,
    },
}));

export default function ExpansionForm() {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Enter Your Review Here"
                    multiline
                    rows="6"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <div >
                    <Button className={classes.saveReviewBtn} variant="contained" color="primary">
                        Save Review
                    </Button>
                </div>
            </div>
        </form>
    );
}