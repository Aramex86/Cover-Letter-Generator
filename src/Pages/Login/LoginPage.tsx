import { Button, Typography } from "antd";
import { Content } from "../../Shared/Atom";
import { FaGoogle } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../App/useAuth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser, setToken } = useAuth();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      // Use the token to fetch user data
      setToken(tokenResponse.access_token);

      fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          navigate("/home");
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    },
    onError: (error) => {
      console.error("Login Failed:", error);
    },
  });

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
          width: "40%",
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
            width: "50%",
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
