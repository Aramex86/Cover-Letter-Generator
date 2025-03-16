import { Button, Typography } from "antd";
import { Content } from "../../Shared/Atom";
import { FaGoogle } from "react-icons/fa";
import { useGoogleAuth } from "../../Entities";
import { useMediaQuery } from "../../Shared/hooks";
import { SlEnvolopeLetter } from "react-icons/sl";

export default function LoginPage() {
  const { login } = useGoogleAuth();
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 600px)");

  const responsive = isMobile ? "80%" : isTablet ? "60%" : "50%";
  const responsiveBtn = isMobile ? "80%" : "50%";

  return (
    <Content
      styles={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "100dvh",
        background: "linear-gradient(130deg,#1a6ec4,#e10ce1)",
        backgroundSize: "120% 120%",
        animation: "gradient-animation 10s ease infinite",
      }}
    >
      <Typography
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          fontSize: 30,
          fontWeight: 700,
          color: "#ffffff",
        }}
      >
        <SlEnvolopeLetter
          size={isMobile ? 40 : 30}
          style={{ marginRight: 15 }}
        />
        {isMobile ? "" : "Cover Letter Generator"}
      </Typography>

      <Content
        styles={{
          background: "#ffffff ",
          width: responsive,
          flex: "none",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          color: "#000000",
          padding: "32px",
        }}
        className="login-animation"
      >
        <Typography style={{ color: "inherit", fontSize: 25, fontWeight: 700 }}>
          Login
        </Typography>
        <Button
          style={{
            margin: "0 auto ",
            marginTop: 30,
            width: responsiveBtn,
            background: "#ffffff",
            color: "#000000",
            padding: "20px",
          }}
          onClick={() => {
            login();
          }}
        >
          <FaGoogle /> Sign is with Google
        </Button>
      </Content>
    </Content>
  );
}
