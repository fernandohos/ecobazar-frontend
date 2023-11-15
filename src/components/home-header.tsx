import MapPin from "@public/map-pin.svg";
import Logo from "@public/logo.svg";
import { NavBar } from "./nav-bar";
import { HeaderActions } from "./header-actions";
import { MobileHeaderActions } from "./mobile-header-actions";

export function HomeHeader() {
  return (
    <header>
      <address className="flex py-sm px-[5vw] gap-sm m-auto bg-greenGray-50">
        <MapPin className="stroke-greenGray-700 w-[1.5rem] h-[1.8rem]" />
        <p className="b-xs text-greenGray-700">
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </p>
      </address>
      <div className="flex justify-between items-center px-[5vw] py-sm bg-white">
        <div className="flex-1 max-[845px]:hidden">
          <NavBar />
        </div>
        <Logo width="18.3rem" height="3.8rem" />
        <HeaderActions />
        <MobileHeaderActions />
      </div>
      <div className="px-[5vw] min-[845px]:hidden m-auto">
        <NavBar />
      </div>
    </header>
  );
}
