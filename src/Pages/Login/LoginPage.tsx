import { Button, Layout, Typography } from "antd";
import { FcGoogle } from "react-icons/fc";
import { GiCheckMark } from "react-icons/gi";
import { IoChevronForward } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { SlEnvolopeLetter } from "react-icons/sl";
import { useGoogleAuth } from "../../Entities";
import UnderlineSVG from "../../Shared/assets/UnderlineSVG";
import styles from "./login-page.module.css";

const { Header, Content } = Layout;
export default function LoginPage() {
  const { login } = useGoogleAuth();
  return (
    <Layout className={styles.loginPage}>
      <Header className={styles.loginHeader}>
        <div className="container">
          <div className={styles.loginHeaderContent}>
            <Typography className={styles.loginLogo}>
              <SlEnvolopeLetter style={{ marginRight: 15 }} />
              <span>Cover Letter Generator</span>
            </Typography>
            <Button className={styles.loginBtn} onClick={() => login()}>
              Log in
            </Button>
          </div>
        </div>
      </Header>
      <div className="container">
        <Content className={styles.loginContent}>
          <div className={styles.heroIntro}>
            Create Professional Cover Letters in Minutes
          </div>
          <div className={styles.heroDescription}>
            <h1>
              Stand Out With Perfect
              <span>
                Cover <UnderlineSVG />
              </span>
              Letters
            </h1>

            <p>
              Our AI-powered cover letter generator helps you create
              professional, tailored cover letters in minutes. Get noticed by
              employers and land your dream job.
            </p>
          </div>
          <div className={styles.heroLoginForm}>
            <div className={styles.heroLoginFormContent}>
              <h2>Login</h2>
              <Button
                className={styles.heroLoginFormBtn}
                onClick={() => login()}
              >
                <FcGoogle /> Sign is with Google
              </Button>
            </div>
          </div>
          <div className={styles.heroFooter}>
            <Button className={styles.heroFooterBtn} onClick={() => login()}>
              Get Started Free <IoChevronForward />
            </Button>
            <div className={styles.heroFooterFeatures}>
              <span>
                <GiCheckMark /> No credit card required
              </span>
              <LuDot size={30} />
              <span>
                <GiCheckMark /> Free plan available
              </span>
            </div>
          </div>
        </Content>
      </div>
    </Layout>
  );
}
