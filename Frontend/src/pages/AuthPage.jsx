import  { useState } from 'react';
import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (data) => {
    console.log(data);
    
  };


  
  return (
    <div className="min-h-screen flex items-center justify-center">
      {isLogin ? (
        <LoginForm onSwitch={handleSwitch} onSubmit={handleSubmit} />
      ) : (
        <SignupForm onSwitch={handleSwitch} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default AuthPage;
