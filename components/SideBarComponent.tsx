import React, { useEffect } from "react";
// import { Pi } from "@pinetwork-js/sdk";
import Link from "next/link";
import { Button, IconButton, SvgIcon } from "@material-ui/core";
import Image from "next/image";
import logo from "../public/images/logoRight-1.png";
import button1 from "../public/images/mtt2Passive.png";
import button2 from "../public/images/vt-2.png";
import TaskPageIcon from "./icons/TaskPageIcon";
import TranslateIcon from "../public/TranslateIcon.svg";
import Styles from "../styles/SideBar.module.scss";

export default function SideBarComponent(props: {
  setUserAuth?: React.Dispatch<React.SetStateAction<boolean>>;
  setUserName?: React.Dispatch<React.SetStateAction<string>>;
}) {

  async function handleSignIn() {
    await import("@pinetwork-js/sdk").then(async Pi => {
      try {
        const response = await Pi?.Pi?.authenticate(["username", "payments"], onIncompletePaymentFound);

        if (response?.user?.username) {
          if (props.setUserAuth && props.setUserName) {
            props.setUserAuth(true);
            props.setUserName(response.user.username);
          }
        }
      } catch (e) {
        console.log("fetch error", e);
      }
    });
    function onIncompletePaymentFound(payment: any) { console.log(payment); };
  }

  return (
    <div className={Styles.Container}>
      <IconButton className={Styles.Logo}>
        <Link href="/" passHref>
          <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
        </Link>
      </IconButton>
      <Button
        color="secondary"
        variant="contained"
        onClick={handleSignIn}>Sign In</Button>
      <div className={Styles.ButtonGroup}>
        <IconButton className={Styles.btn}>
          <Link href="/validatetaskpage" passHref>
            <Image
              src={button1}
              alt="Validate-Task-Button"
              layout="fill"
              objectFit="contain"
            />
          </Link>
          {/* <Image
            src={TranslateIcon}
            alt="Translate-Task-Page"
            layout="fill"
            objectFit="contain"
          /> */}
        </IconButton>

        <IconButton className={Styles.btn}>
          <Link href="/validatetaskpage" passHref>
            <Image
              src={button2}
              alt="Translate-Task-Button"
              layout="fill"
              objectFit="contain"
            />
          </Link>
        </IconButton>
      </div>
    </div>
  );
}
