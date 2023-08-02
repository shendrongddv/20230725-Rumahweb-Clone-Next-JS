import ButtonGroup from "./button-group";
import LogoBrand from "./logo-brand";
import MobileNav from "./mobile-nav";
import NavMain from "./nav-main";

const HeaderMain = () => {
  return (
    <header className="px-4">
      <div className="container">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo Brand */}
          <LogoBrand />

          <div className="flex items-center justify-center gap-6">
            {/* MainNav */}
            <NavMain />

            {/* Buttons */}
            <ButtonGroup />

            {/* MobileNav */}
            <div className="block md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
