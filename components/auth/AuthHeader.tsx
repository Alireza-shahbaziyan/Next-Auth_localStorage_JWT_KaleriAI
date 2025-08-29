import React from "react";

const AuthHeader: React.FC<{ isLogin: boolean }> = ({ isLogin }) => (
  <h2 className="text-3xl font-bold text-indigo-400 text-center mb-6">
    {isLogin ? "Welcome Back" : "Create Account"}
  </h2>
);

export default AuthHeader;
