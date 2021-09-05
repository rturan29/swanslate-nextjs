import {
  Button,
  Card,
  Divider,
  Menu,
  MenuItem,
  TextField,
} from "@material-ui/core";
import moment from "moment";
import React, { useState } from "react";
import Styles from "../styles/TranslateTaskCard.module.scss"

type TaskCardProps = {
  task: { sentence: string; },
  id: string | number
};

export default function TaskCard({ task, id }: TaskCardProps) {
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
      <Card className={Styles.card} elevation={3}>
        <div className={Styles.cardContent}>
          <strong>Item Id: </strong>
          <span>{id}</span>
          <Divider orientation="vertical" />
          <strong>Date:</strong>
          <span>{moment().format("MMM Do YY")}</span>
          <p>
            <strong>Original Text: </strong>
            {task?.sentence}
          </p>
        </div>

        <Divider />
        <div style={{ marginTop: "1rem" }} className={Styles.cardContent}>
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
        <div className={Styles.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            className={Styles.button}
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={Styles.button}
          >
            Submit
          </Button>
        </div>
      </Card>
    </>
  );
}
