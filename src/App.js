import cat1 from "./img/cat1.jpg";
import "./App.css";
import React from "react";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import PostList from "./components/PostList/PostList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: "white",
      color: "black",
      display_info: "user",
      users: [],
      posts: [],
    };
  }

  handelBackgroundChange(event) {
    const userBackground = event.target.value;
    this.setState({ background: userBackground });
  }

  handelTextColorChange(event) {
    const userTextColor = event.target.value;
    this.setState({ color: userTextColor });
  }

  handleDisplayInfo(event) {
    const displayState = event.target.value;
    this.setState({ display_info: displayState });
  }

  componentDidMount() {
    // for User
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((json_Users) => {
        const filtersJson_users = json_Users.filter((user) => user.id !== -1);

        filtersJson_users.forEach((user) => {
          user.isGoldClient = true;
          user.salariu = "20.000";
          user.imagine = cat1;
        });

        this.setState({ users: filtersJson_users });
      });

    // for Post
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((json_Posts) => {
        const filtersJson_posts = json_Posts.filter((user) => user.id < 10);
        this.setState({ posts: filtersJson_posts });
      });
  }

  updateUserList(user) {
    this.setState((previousState) => {
      return {
        users: [...previousState.users, user],
      };
    });
  }

  onItemDelete(itemId) {
    let index = -1;
    for (let i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i].id === itemId) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      this.setState((prevState) => {
        const users = [...prevState.users];
        users.splice(index, 1);
        return { users: users };
      });
    }
  }

  // const userArrayLength = this.state.users.length;

  render() {
    return (
      <div
        className="App"
        style={{
          background: this.state.background,
          color: this.state.color,
        }}
      >
        <UserForm
          updateUserList={(user) => this.updateUserList(user)}
          userArrayLength={this.state.users.length}
          arrayEmails={this.state.users}
        />

        {this.state.display_info !== "post" ? (
          <UserList
            users={this.state.users}
            onListItemDelete={(itemId) => this.onItemDelete(itemId)}
          />
        ) : (
          <PostList posts={this.state.posts} />
        )}

        <div className="settings-container">
          <h2> Panou de setari </h2>
          <label>Background Color: </label> <br />
          <input
            type="color"
            onChange={(event) => this.handelBackgroundChange(event)}
          />{" "}
          <br />
          <label>Text Color: </label> <br />
          <input
            type="color"
            onChange={(event) => this.handelTextColorChange(event)}
          />
          <br />
          <button
            value="user"
            onClick={(event) => this.handleDisplayInfo(event)}
          >
            Afișează useri
          </button>
          <button
            value="post"
            onClick={(event) => this.handleDisplayInfo(event)}
          >
            Afișează postări
          </button>
        </div>
      </div>
    );
  }
}

export default App;
