import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://avatars.githubusercontent.com/u/9919?v=4", // Placeholder image
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/hayat900");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="max-w-xs mx-auto p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="text-center">
          <img
            src={avatar_url}
            alt={`${name}'s Avatar`}
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-500"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
          <h3 className="text-lg text-gray-600 mb-2">{location}</h3>
          <h4 className="text-md text-teal-500">@{name.toLowerCase()}</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
