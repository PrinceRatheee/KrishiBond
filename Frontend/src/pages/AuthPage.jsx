import  { useState } from 'react';
import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      {isLogin ? (
        <LoginForm onSwitch={handleSwitch}  />
      ) : (
        <SignupForm onSwitch={handleSwitch}  />
      )}
    </div>
  );
};

export default AuthPage;
