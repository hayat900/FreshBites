import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="p-6 max-w-screen-lg mx-auto">
        <div className="text-center mb-6">
          {/* <h1 className="text-4xl font-bold text-gray-800 mb-2">About Class Component</h1> */}
          {/* <h2 className="text-2xl text-gray-600">This is the Namaste React Web Series</h2> */}
        </div>

        <div className="mt-8">
          <UserClass name={"First"} location={"Dehradun Class"} />
        </div>
      </div>
    );
  }
}

export default About;
