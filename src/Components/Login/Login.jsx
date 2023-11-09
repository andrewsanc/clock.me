import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Login(props) {
  const { supabaseClient } = props;
  const [showRegister, setShowRegister] = useState(false);

  function handleOnBtnClick(e) {
    e.preventDefault();
    setShowRegister((prev) => !prev);
  }

  return showRegister ? (
    <RegisterForm
      supabaseClient={supabaseClient}
      handleOnBtnClick={handleOnBtnClick}
    />
  ) : (
    <LoginForm
      supabaseClient={supabaseClient}
      handleOnBtnClick={handleOnBtnClick}
    />
  );
}
