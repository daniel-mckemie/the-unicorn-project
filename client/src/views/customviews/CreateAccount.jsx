import React from "react";
import DefaultLayout from "views/customviews/DefaultLayout.jsx";
import CreateAccountForm from "views/customviews/functionalcomponents/CreateAccountForm.jsx";

class CreateAccount extends React.Component {

  render() {

    return (
      <DefaultLayout heroHeight={0} noParallax={true}>
      <div style={{height:`120vh`}}>
      <CreateAccountForm />
      </div>
      </DefaultLayout>

    );
  }
}

export default CreateAccount;
