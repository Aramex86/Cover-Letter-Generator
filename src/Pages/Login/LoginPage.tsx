import { Button, Typography } from "antd";
import { Content } from "../../Shared/Atom";
import { FaGoogle } from "react-icons/fa";
import { useGoogleAuth } from "../../Entities";
import { useMediaQuery } from "../../Shared/hooks";

export default function LoginPage() {
  const { login } = useGoogleAuth();
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 600px)");

  const responsive = isMobile ? "80%" : isTablet ? "60%" : "50%";
  const responsiveBtn = isMobile ? "80%" : "50%";

  // const login = useGoogleLogin({
  //   onSuccess: (tokenResponse) => {
  //     // Use the token to fetch user data
  //     setToken(tokenResponse.access_token);

  //     fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
  //       headers: {
  //         Authorization: `Bearer ${tokenResponse.access_token}`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setUser(data);
  //         navigate("/home");
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user data:", error);
  //       });
  //   },
  //   onError: (error) => {
  //     console.error("Login Failed:", error);
  //   },
  // });

  return (
    <Content
      styles={{
        width: "100%",
        height: "100dvh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        background: "linear-gradient(135deg,#1a6ec4,#e10ce1)",
        backgroundSize: "120% 120%",
        animation: "gradient-animation 10s ease infinite",
      }}
    >
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
