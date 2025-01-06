import { siteConfig } from "@/config/site";
import { Mail, MapPin } from "lucide-react";

export const TopBar = () => {

  return (
    <div className="hidden sm:flex justify-start items-center w-full h-16 px-6 gap-x-4 bg-gray-800 text-white">
      <div className="w-1/3 flex flex-row space-x-4">
        <MapPin/>
        <p>
          {siteConfig.info.location}
        </p>
      </div>
      <div className="w-1/3 flex flex-row space-x-4">
        <Mail/>
        <p>
          {siteConfig.info.email}
        </p>
      </div>
    </div>
  );
};
