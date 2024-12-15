import { Maximize2, MonitorSmartphone, Server } from "lucide-react";

export const DevIndicators = () => {
  if (process.env.NODE_ENV === "development") {
    return (
      <>
        {/* TailwindIndicator */}
        <div className="fixed bottom-1 right-1 z-50 flex h-6 items-center justify-center gap-2 rounded-full bg-gray-800 p-3 text-xs text-white">
          {typeof window === "undefined" ? (
            <>
              <Server size={15} />
              ssr
            </>
          ) : (
            <>
              <MonitorSmartphone size={15} />
              csr
            </>
          )}
        </div>

        {/* SsrIndicator */}
        <div className="fixed bottom-8 right-1 z-50 flex h-6 items-center justify-center gap-2 rounded-full bg-gray-800 p-3 text-xs text-white">
          <Maximize2 size={15} />
          <div className="block sm:hidden">xs</div>
          <div className="hidden sm:block md:hidden">sm</div>
          <div className="hidden md:block lg:hidden">md</div>
          <div className="hidden lg:block xl:hidden">lg</div>
          <div className="hidden xl:block 2xl:hidden">xl</div>
          <div className="hidden 2xl:block">2xl</div>
        </div>
      </>
    );
  }
};
