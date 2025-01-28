import React from "react";
import { useLoggedInUser } from "../../hooks/auth.hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "./admin-dashboard";
import UserDashboard from "./user-dashboard";

const Dashboard = () => {
  const { data: user, isLoading } = useLoggedInUser();
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    if (!isLoading && !user) navigate("/sign-in");
  }, [isLoading, navigate, user]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      {user.role === "admin" && <AdminDashboard />}
      {user.role === "user" && <UserDashboard />}
    </>
  );
};

export default Dashboard;
