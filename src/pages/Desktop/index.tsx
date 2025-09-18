import type { FC } from "react";
import { DesktopIcon } from "./DesktopIcon";
import { desktopItems } from "../../constants/desktop";
import type { DesktopIconModel } from "../../constants/models";
import { useWindowManager } from "../../context/WindowManagerContext";

export const HomePage: FC = () => {

  const { openWindow } = useWindowManager();

  const openById = (id: string) => {
    const window = desktopItems.filter(item => item.id == id);
    if(window.length == 0) return;
    const Comp = window[0].component;
    openWindow({...window[0], component: <Comp />, allowMultiple: false})
  };
  
    return (
        <div
      className="
        p-4
         h-[calc(100vh-70px)]
        flex
        flex-col
        flex-wrap
        content-start
        gap-y-14
        gap-x-10
        overflow-hidden
      "
    >
      {desktopItems.map((item : DesktopIconModel, i) => (
        <DesktopIcon
          key = {i}
          icon = {item.image!}
          label ={item.title}
          onDoubleClick={() => openById(item.id)}
        />
      ))}
    </div>

      );
};
