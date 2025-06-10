export const LoadingSkeleton = () => {
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
