import { Outlet } from "react-router-dom";
import SideBar from "~/layouts/main/sidebar";
import RightBar from "./rightbar";
import { useModal } from "~/store/modal/hooks";
import Modal from "~/modals";
import { useEffect } from "react";
import { useAppearance } from "~/store/appearance/hooks";

export default function MainLayout() {
  const modal = useModal();
  const appearance = useAppearance();

  useEffect(() => {
    // Background Colors
    document.documentElement.style.setProperty(
      "--background-primary",
      appearance.backgroundColor.primary
    );
    document.documentElement.style.setProperty(
      "--background-secondary",
      appearance.backgroundColor.secondary
    );
    document.documentElement.style.setProperty(
      "--background-third",
      appearance.backgroundColor.third
    );

    // Font Colors
    document.documentElement.style.setProperty(
      "--color-primary",
      appearance.color.primary
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      appearance.color.secondary
    );

    // Font Size
    document.documentElement.style.setProperty(
      "--font-size",
      appearance.fontSize + "px"
    );
  }, [appearance]);

  return (
    <div className="w-[1265px] mx-auto flex">
      {modal && <Modal />}
      <SideBar />
      <main className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
          <Outlet />
        </main>
        <RightBar />
      </main>
    </div>
  );
}
