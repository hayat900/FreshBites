const Grocery = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-12 bg-white bg-opacity-90 rounded-lg max-w-2xl mx-auto shadow-xl">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 tracking-wide">Welcome to Grocery Store</h1>
        <h2 className="text-2xl text-gray-600 font-medium mb-6">Your one-stop shop for fresh groceries</h2>
        <p className="text-lg text-gray-700 mb-8">Browse through a variety of items and get them delivered to your doorstep.</p>
        <button className="px-6 py-3 text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition duration-300 ease-in-out">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Grocery;
