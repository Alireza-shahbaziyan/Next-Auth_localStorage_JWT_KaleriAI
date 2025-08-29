import React from "react";

interface AuthToggleProps {
  isLogin: boolean;
  toggleForm: () => void;
}

const AuthToggle: React.FC<AuthToggleProps> = ({ isLogin, toggleForm }) => (
  <p className="text-sm text-gray-400 mt-4 text-center">
    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
    <span
      className="text-indigo-400 cursor-pointer hover:underline"
      onClick={toggleForm}
    >
      {isLogin ? "Sign Up" : "Login"}
    </span>
  </p>
);

export default AuthToggle;
