import  { useState , useEffect} from 'react';
import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handleSwitch = () => {
    setIsLogin(!isLogin);
   
  };

  useEffect(() => {
    if (isLoggedIn) { 
        navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  
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
