import React from "react";
import "./UserForm.css";
import cat1 from "../../img/cat1.jpg";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userArrayLength: "",
      name: "",
      email: "",
      salariu: "",
      isGoldClient: false,
      imagine: cat1,
    };
  }

  handleNameChange(event) {
    const inputValue = event.target.value;
    this.setState({ name: inputValue });
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    this.setState({ email: inputValue });
  }

  handleSalariuChange(event) {
    const inputValue = event.target.value;
    this.setState({ salariu: inputValue });
  }

  handleImagineChange(event) {
    const inputValue = event.target.value;
    this.setState({ imagine: inputValue });
  }

  handleGoldClientChange(event) {
    const inputValue = event.target.checked;
    this.setState({ isGoldClient: inputValue });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const newUser = {
      id: this.props.userArrayLength + 1,
      name: this.state.name,
      email: this.state.email,
      salariu: this.state.salariu,
      isGoldClient: this.state.isGoldClient,
      imagine: cat1,
    };
    this.props.updateUserList(newUser);

    this.setState({
      name: "",
      email: "",
      salariu: "",
      isGoldClient: false,
    });
  }

  verifyEmailAndValidity(event) {
    event.preventDefault();
    let mailExists;
    let mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    for (let j = 0; j < this.props.userArrayLength; j++) {
      this.props.arrayEmails[j].email === this.state.email
        ? (mailExists = true)
        : (mailExists = false);
    }

    this.state.name !== ""
      ? this.state.email.match(mailformat)
        ? mailExists !== true
          ? this.handleFormSubmit(event)
          : alert("Utilizatorul Exista Deja")
        : alert("Email Invalid")
      : alert("Nume Invalid");
  }

  render() {
    return (
      <form
        className="user-form"
        onSubmit={(event) => this.verifyEmailAndValidity(event)}
      >
        <h2> Adauga un utilizator nou: </h2>
        <label htmlFor="name"> Nume: </label>
        <input
          id="nume"
          name="name"
          type="text"
          value={this.state.name}
          onChange={(event) => this.handleNameChange(event)}
        />

        <label htmlFor="email"> Email: </label>
        <input
          id="email"
          name="email"
          type="text"
          value={this.state.email}
          onChange={(event) => this.handleEmailChange(event)}
        />
        <label htmlFor="salariu"> Salariu: </label>
        <input
          name="salariu"
          type="text"
          value={this.state.salariu}
          onChange={(event) => this.handleSalariuChange(event)}
        />
        <label htmlFor="isGoldState">
          E client Gold ?
          <input
            name="isGoldState"
            type="checkbox"
            checked={this.state.isGoldClient}
            onChange={(event) => this.handleGoldClientChange(event)}
          />
        </label>

        <input type="submit" value="Submite formularul" />
      </form>
    );
  }
}

export default UserForm;
