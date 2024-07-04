import Image from "next/image";
import Option from "./Option";

const Sidebar = () => {
  return (
    <>
      <aside id="sidenav-open" className="h-screen">
        <nav className="flex flex-col justify-between h-full p-5 border-r bg-gray-50">
          <div className="w-48">
            <Option href="/" name="Dashboard" icon_path="/dashboard.png" />
            <Option href="/pages" name="Pages" icon_path="/pages.png" />
            <Option  href="/uploads" name="Uploads" icon_path="/file.png" />
            <Option href="/categories" name="Category" icon_path="/category.png" />
            <Option href="/templates" name="Template" icon_path="/theme.png" />
          </div>
        </nav>

        <a
          href="#"
          id="sidenav-close"
          title="Close Menu"
          aria-label="Close Menu"
        ></a>
      </aside>
    </>
  );
};

export default Sidebar;
