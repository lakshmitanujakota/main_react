const Shimmering = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(12).fill("").map((_, idx) => (
          <div
            key={idx}
            className="animate-pulse bg-white rounded-lg shadow-md w-full max-w-xs h-80 flex flex-col overflow-hidden"
          >
            <div className="h-44 bg-gray-200 w-full" />
            <div className="flex-1 flex flex-col justify-between p-4">
              <div className="h-5 bg-gray-200 rounded mb-3 w-3/4" />
              <div className="h-4 bg-gray-200 rounded mb-2 w-2/3" />
              <div className="flex gap-2 mt-2">
                <div className="h-4 bg-gray-200 rounded w-1/3" />
                <div className="h-4 bg-gray-200 rounded w-1/3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmering;
