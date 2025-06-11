export const LoadingSkeletonCareer = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#2c2c2e] h-8 w-[300px] rounded-md mt-20"></div>
      <div className="mt-8 h-3 w-full bg-[#2c2c2e] rounded"></div>
      <div className="mt-2 h-3 w-2/5 bg-[#2c2c2e] rounded"></div>
      <div className="grid grid-cols-3 w-full mt-10 items-center justify-center gap-8">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="p-4 shadow-2xl rounded-md w-full h-[430px] animate-pulse bg-[#1a1a1a]"
          >
            <div className="w-full h-[150px] bg-[#2c2c2e] rounded-md"></div>

            <div className="mt-4 h-4 w-1/2 bg-[#2c2c2e] rounded"></div>

            <div className="mt-4 h-3 w-full bg-[#2c2c2e] rounded"></div>
            <div className="mt-2 h-3 w-4/5 bg-[#2c2c2e] rounded"></div>

            <div className="flex flex-row items-center justify-between mt-20">
              <div className="bg-[#2c2c2e] h-8 w-full rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const LoadingSkeletonDetailCareer = () => {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="relative">
        <div className="w-full">
          <div className="w-full h-[400px] bg-gray-700 rounded-md" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full bg-black opacity-50" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="h-10 w-64 bg-gray-600 rounded-md mb-4" />
          </div>
          <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white/30 backdrop-blur-md w-1/2 h-[200px] rounded-2xl flex items-center justify-center text-center">
              <div className="h-20 w-3/4 bg-gray-400 rounded-md" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[150px] w-full h-full grid grid-cols-2 gap-4 mb-96">
        {/* Requirements Skeleton */}
        <div className="p-6 bg-[#262626] rounded-2xl shadow-2xl">
          <div className="h-6 w-32 bg-gray-500 rounded-md mb-4" />
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-row items-center mb-4">
              <div className="w-5 h-5 bg-[#9EFF00] rounded-full mr-2" />
              <div className="h-4 w-3/4 bg-gray-600 rounded-md" />
            </div>
          ))}
        </div>

        {/* Responsibilities Skeleton */}
        <div className="p-6 bg-[#262626] rounded-2xl shadow-2xl">
          <div className="h-6 w-36 bg-gray-500 rounded-md mb-4" />
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-row items-center mb-4">
              <div className="w-5 h-5 bg-[#9EFF00] rounded-full mr-2" />
              <div className="h-4 w-3/4 bg-gray-600 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
