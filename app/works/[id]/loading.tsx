import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="-mt-12 flex h-[calc(100vh-4rem)] flex-col gap-4 p-4 lg:flex-row">
      <Skeleton className="h-[calc(100vh/2)] w-full lg:h-full lg:w-1/2" />
      <div className="flex w-full flex-col lg:h-full lg:w-1/2">
        <Skeleton className="p-4 lg:h-full lg:px-12 lg:py-6">
          <div className="mb-10 space-y-4">
            <Skeleton className="w-1/2 p-6 lg:w-2/3 lg:p-10" />
            <Skeleton className="w-2/3 p-4 lg:w-3/4 lg:p-5" />
            <Skeleton className="w-20 rounded-full p-3 lg:p-4" />
          </div>
          <Skeleton className="w-1/3 p-4 lg:w-1/2 lg:p-6" />
          <div className="mt-5 space-y-4">
            <Skeleton className="w-full p-2 lg:p-3" />
            <Skeleton className="w-full p-2 lg:p-3" />
            <Skeleton className="w-full p-2 lg:p-3" />
            <Skeleton className="hidden w-full p-2 lg:block lg:p-3" />
            <Skeleton className="hidden w-full p-2 lg:block lg:p-3" />
            <Skeleton className="hidden w-full p-2 lg:block lg:p-3" />
            <Skeleton className="hidden w-full p-2 lg:block lg:p-3" />
            <Skeleton className="hidden w-full p-2 lg:block lg:p-3" />
          </div>
        </Skeleton>
      </div>
    </div>
  );
};

export default Loading;
