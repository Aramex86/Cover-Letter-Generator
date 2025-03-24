import { Button, Typography } from "antd";
// import { Content } from "../../Shared/Atom";
import { FcGoogle } from "react-icons/fc";
import { useGoogleAuth } from "../../Entities";
// import { useMediaQuery } from "../../Shared/hooks";
import { SlEnvolopeLetter } from "react-icons/sl";
import { Layout } from "antd";
import styles from "./LoginPage.module.css";
import { IoChevronForward } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import { LuDot } from "react-icons/lu";
import UnderlineSVG from "../../Shared/assets/UnderlineSVG";

const { Header, Content } = Layout;
export default function LoginPage() {
  const { login } = useGoogleAuth();
  // const isTablet = useMediaQuery("(max-width: 768px)");
  // const isMobile = useMediaQuery("(max-width: 600px)");

  // const responsive = isMobile ? "80%" : isTablet ? "60%" : "50%";
  // const responsiveBtn = isMobile ? "80%" : "50%";

  return (
    <Layout className={styles.loginPage}>
      <Header className={styles.loginHeader}>
        <div className="container">
          <div className={styles.loginHeaderContent}>
            <Typography className={styles.loginLogo}>
              <SlEnvolopeLetter
                // size={isMobile ? 40 : 30}
                style={{ marginRight: 15 }}
              />
              {/* {isMobile ? "" : "Cover Letter Generator"} */}
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
    // <Content
    //   styles={{
    //     position: "relative",
    //     width: "100%",
    //     height: "100dvh",
    //     background: "linear-gradient(130deg,#1a6ec4,#e10ce1)",
    //     backgroundSize: "120% 120%",
    //     animation: "gradient-animation 10s ease infinite",
    //   }}
    // >
    //   <Content
    //     styles={{
    //       width: "1080px",
    //       margin: "0 auto",
    //       display: "flex",
    //       justifyContent: "center",
    //     }}
    //   >
    //

    //     <Content
    //       styles={{
    //         background: "#ffffff ",
    //         width: responsive,
    //         flex: "none",
    //         borderRadius: "15px",
    //         display: "flex",
    //         flexDirection: "column",
    //         color: "#000000",
    //         padding: "32px",
    //       }}
    //       className="login-animation"
    //     >
    //       <Typography
    //         style={{ color: "inherit", fontSize: 25, fontWeight: 700 }}
    //       >
    //         Login
    //       </Typography>
    //       <Button
    //         style={{
    //           margin: "0 auto ",
    //           marginTop: 30,
    //           width: responsiveBtn,
    //           background: "#ffffff",
    //           color: "#000000",
    //           padding: "20px",
    //         }}
    //         onClick={() => {
    //           login();
    //         }}
    //       >
    //         <FaGoogle /> Sign is with Google
    //       </Button>
    //     </Content>
    //   </Content>
    // </Content>
  );
}
