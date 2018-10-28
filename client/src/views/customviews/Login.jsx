import React from "react";
import DefaultLayout from "views/customviews/DefaultLayout.jsx";
import LoginForm from "views/customviews/functionalcomponents/LoginForm.jsx";

class Login extends React.Component {

  render() {

    return (
      <DefaultLayout heroHeight={0} noParallax={true}>
      <LoginForm/>
      </DefaultLayout>

    );
  }
}

export default Login;
