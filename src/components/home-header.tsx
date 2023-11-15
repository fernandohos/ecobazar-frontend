import MapPin from "@public/map-pin.svg";
import Logo from "@public/logo.svg";
import { NavBar } from "./nav-bar";
import { HeaderActions } from "./header-actions";

export function HomeHeader() {
  return (
    <header>
      <address className="flex py-sm px-[5vw] gap-sm m-auto bg-greenGray-50">
        <MapPin className="text-greenGray-700" width="15" height="18" />
        <p className="b-xs text-greenGray-700">
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </p>
      </address>
      <div className="flex justify-between items-center px-[5vw] py-sm bg-white">
        <NavBar />
        <Logo width="18.3rem" height="3.8rem" />
        <HeaderActions />
      </div>
    </header>
  );
}
