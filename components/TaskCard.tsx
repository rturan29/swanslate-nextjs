import {
  Button,
  Card,
  Divider,
  Menu,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { Data } from "../pages/validatetaskpage";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    margin: "3rem auto",
    padding: "2rem",
    display: "flex",
    width: "80%",
    flexDirection: "column",
  },
  cardContent: {
    fontSize: "1.25rem",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: "1.5rem",
    marginLeft: "2rem",
    fontSize: "1rem",
    flexBasis: "100px",
  },
}));

type TaskCardProps = {
  task: { sentence: string; },
  key: string | number
};

export default function TaskCard({ task, key }: TaskCardProps) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [choosedLanguage, setChoosedLanguage] = useState("Choose a Language");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleChooseLanguage(e: any) {
    handleClose();
    setChoosedLanguage(e.target.innerText);
  }

  return (
    <>
      <Card className={classes.card} elevation={3}>
        <div className={classes.cardContent}>
          <strong>Item Id: </strong>
          <span>{key}</span>
          <Divider orientation="vertical" />
          <strong>Time:</strong>
          <span>{ }</span>
          <p>
            <strong>Original Text: </strong>
            {task?.sentence}
          </p>
        </div>

        <Divider />
        <div style={{ marginTop: "1rem" }} className={classes.cardContent}>
          <strong>Language:</strong>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {choosedLanguage}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem value="Turkish" onClick={handleChooseLanguage}>
              Turkish
            </MenuItem>
            <MenuItem value="Russian" onClick={handleChooseLanguage}>
              Russian
            </MenuItem>
          </Menu>
        </div>
        <TextField margin="dense" multiline={true} variant="outlined" />
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit
          </Button>
        </div>
      </Card>
    </>
  );
}
