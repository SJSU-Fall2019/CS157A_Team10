import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Materiel UI Simple Select
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { OutlinedInput } from '@material-ui/core';
import ReviewRequest from '../../../../../../../../../../API/Review/index';

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
    selectList: {
        // padding: 10,
        marginLeft: 780,
    },
    saveReviewBtn: {
        backgroundColor: '#0055A2',
        padding: 10,
        marginLeft: 900,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function ExpansionForm(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    const [inputValue, setInputValue] = React.useState(props.review_description);
    const [age, setAge] = React.useState(4);
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
        setValue(event.target.value);
        setAge(event.target.value);
    };
    const submitReview = async () => {
        // Create Review in the review table
        var review_description = props.review_description
        if (inputValue != null && props.review_description != inputValue) {
            review_description = inputValue
        }
        const result = await ReviewRequest.updateReview(props.milestone_number, props.reviewee_id, age, review_description, props.review_id)
        props.updateForm()
    }


    return (
        <form className={classes.container} noValidate autoComplete="off">
            <div>
                <div className={classes.selectList}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                            Select Overall Rating
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                            labelWidth={labelWidth}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Unsatisfactory</MenuItem>
                            <MenuItem value={2}>Improvement needed</MenuItem>
                            <MenuItem value={3}>Meets expectations</MenuItem>
                            <MenuItem value={4}>Exceeds expectations</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                </div>
                <TextField
                    id="outlined-multiline-static"
                    label="Enter Your Review Here"
                    multiline
                    rows="6"
                    defaultValue=" "
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={event => {
                        const { value } = event.target;
                        setInputValue(value)
                    }}
                    value={inputValue != null ? inputValue : props.review_description}
                />
                <FormHelperText>Required</FormHelperText>
                <div >
                    <Button className={classes.saveReviewBtn} variant="contained" color="primary" onClick={submitReview}>
                        Save Review
                    </Button>
                </div>
            </div>
        </form>
    );
}