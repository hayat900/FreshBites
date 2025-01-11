const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {Array(10).fill("").map((_, index) => (
        <div key={index} className="w-[250px] h-[550px] bg-gray-200 rounded-lg shadow-lg flex flex-col p-4">
          {/* Shimmer Image Placeholder */}
          <div className="w-full h-60 bg-gray-300 rounded-lg mb-4 animate-pulse"></div>

          {/* Shimmer Text Placeholders */}
          <div className="h-6 bg-gray-300 rounded-lg mb-2 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded-lg mb-2 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded-lg mb-2 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded-lg mb-2 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
