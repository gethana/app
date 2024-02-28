import {
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize,
  VscChromeRestore,
} from "react-icons/vsc";
import { appWindow } from "@tauri-apps/api/window";
import { useState, useEffect } from "react";
import appIcon from "../../src-tauri/icons/32x32.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

function Titlebar() {
  const [isMaximized, setIsMaximized] = useState(false);
  // recordarse de poner también el fullscreen

  const tauriInterval = setInterval(() => {
    appWindow.isMaximized().then(setIsMaximized);
  }, 200);

  return (
    <div
      data-tauri-drag-region
      className="titlebar flex items-center justify-between bg-neutral-800"
    >
      <div className="titlebar__icon px-3">
        <img src={appIcon} alt="App Icon" className="w-5" />
      </div>
      <div className="titlebar__controls text-neutral-100 flex text-md">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <div
                onClick={() => {
                  appWindow.minimize();
                }}
                className="titlebar__control titlebar__control--minimize p-3 hover:bg-neutral-600"
              >
                <VscChromeMinimize />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Hide</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {isMaximized ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="cursor-default">
                <div
                  onClick={() => {
                    appWindow.unmaximize();
                  }}
                  className="titlebar__control titlebar__control--restore p-3 hover:bg-neutral-600"
                >
                  <VscChromeRestore />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Minimize</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="cursor-default">
                <div
                  onClick={() => {
                    appWindow.maximize();
                  }}
                  className="titlebar__control titlebar__control--maximize p-3 hover:bg-neutral-600"
                >
                  <VscChromeMaximize />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Maximize</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div
                onClick={() => {
                  appWindow.close();
                }}
                className="titlebar__control titlebar__control--close p-3 hover:bg-red-500"
              >
                <VscChromeClose />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Close</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}

export default Titlebar;
