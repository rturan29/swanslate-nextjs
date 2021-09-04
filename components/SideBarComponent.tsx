import React from "react";
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
  setUserAuth?: any;
  setUserName?: any;
}) {

  function handleSignIn() {
    const scopes = ['payments'];

    function onIncompletePaymentFound(payment: any) { console.log(payment); };

    (window as any).Pi?.authenticate(scopes, onIncompletePaymentFound).then((auth: any) => {
      if (auth) {
        props.setUserAuth(true);
        props.setUserName(auth.username);
      }


      console.log(`Hi there! You're ready to make payments!`);
    }).catch(function (error: any) {
      console.error(error);
    });
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
