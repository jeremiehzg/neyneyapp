import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";

export const Topbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 border-b ">
            <nav className="container flex items-center justify-between py-1 lg:py-5 bg-white">
                {/* <span className="text-lg"></span> */}
                <img src="/images/neyney.png" alt="zizi" className="text-lg w-12" />
                <NavMobile />
                <NavDesktop />
            </nav>
        </div>
    );
};