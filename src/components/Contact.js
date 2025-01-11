const Contact = () => {
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <div className="text-center p-12 bg-white bg-opacity-80 rounded-lg max-w-3xl mx-auto shadow-xl">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 tracking-wide">Hello, this is contact</h1>
          <h2 className="text-2xl text-gray-600 font-medium mb-6">It's just a landing page</h2>
          <p className="text-lg text-gray-700 mb-8">Feel free to get in touch with us. We'd love to hear from you!</p>
          <button className="px-6 py-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
            Get in Touch
          </button>
        </div>
      </div>
    );
  };
  
  export default Contact;
  