import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/sign-in");
  }, [navigate]);
  return <>LOADING...</>;
};

export default HomePage;
