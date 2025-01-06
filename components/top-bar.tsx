import { siteConfig } from "@/config/site";
import { Mail, MapPin } from "lucide-react";

export const TopBar = () => {

  return (
    <div className="w-full bg-primary">
      <div className="hidden sm:flex mx-auto justify-evenly items-center w-[90%] h-12 gap-x-4 text-white">
        <div className="flex flex-row space-x-4">
          <MapPin/>
          <p>
            {siteConfig.info.location}
          </p>
        </div>
        <div className="flex flex-row space-x-4">
          <Mail/>
          <p>
            {siteConfig.info.email}
          </p>
        </div>
      </div>
    </div>
  );
};
