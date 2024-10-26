import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from 'next/image'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="pointer-event-none fixed top-0 z-30 w-full mb-4 flex origin-top h-full max-h-[4rem] bg-white bg-opacity-50 backdrop-blur-md dark:bg-black dark:bg-opacity-40">
      <div className="z-50 mx-auto pointer-events-auto relative flex min-h-full h-full justify-between w-full max-w-[1100px] ">

          <div className="w-full  relative justify-between flex items-center">
            <div className="flex">
                <Image
                    src="/Logo.png"
                    width={40}
                    height={40}
                    alt="logo"
                />
            </div>
            <div className="flex relative w-full justify-beteween">
                <div className="text-[14px] font-medium">Design System</div>
                <div className="text-[14px] font-medium">Icons</div>
                <div className="text-[14px] font-medium">UI Landing Kit</div>
                <div className="text-[14px] font-medium">Works</div>
                <div className="text-[14px] font-medium">Templates</div>
            </div>
            <div className="flex gap-[20px]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 7.25C5.70507 7.25 4.25 5.79493 4.25 4C4.25 2.20507 5.70507 0.75 7.5 0.75H10.75V7.25H7.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M15.5 7.25H12.25V0.75H15.5C17.2949 0.75 18.75 2.20507 18.75 4C18.75 5.79493 17.2949 7.25 15.5 7.25Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M7.5 15.25C5.70507 15.25 4.25 13.7949 4.25 12C4.25 10.2051 5.70507 8.75 7.5 8.75H10.75V15.25H7.5Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12.25 12C12.25 10.2051 13.7051 8.75 15.5 8.75C17.2949 8.75 18.75 10.2051 18.75 12C18.75 13.7949 17.2949 15.25 15.5 15.25C13.7051 15.25 12.25 13.7949 12.25 12Z" stroke="#1D1D1F" stroke-width="1.5"/>
                <path d="M4.25 20C4.25 18.2051 5.70507 16.75 7.5 16.75H10.75V20C10.75 21.7949 9.29493 23.25 7.5 23.25C5.70507 23.25 4.25 21.7949 4.25 20Z" stroke="#1D1D1F" stroke-width="1.5"/>
              </svg>

              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.2643 11.1966C17.1696 11.1512 17.0733 11.1074 16.9758 11.0656C16.806 7.93667 15.0963 6.14536 12.2255 6.12703C12.2125 6.12695 12.1996 6.12695 12.1866 6.12695C10.4695 6.12695 9.04138 6.85989 8.1624 8.19362L9.74125 9.27668C10.3979 8.28043 11.4284 8.06805 12.1873 8.06805C12.1961 8.06805 12.2049 8.06805 12.2136 8.06813C13.1588 8.07416 13.8721 8.34899 14.3337 8.88494C14.6697 9.27513 14.8944 9.81432 15.0057 10.4948C14.1676 10.3524 13.2612 10.3086 12.2923 10.3641C9.56292 10.5213 7.80824 12.1132 7.92609 14.3251C7.98589 15.4471 8.54485 16.4124 9.49994 17.0429C10.3075 17.576 11.3475 17.8366 12.4284 17.7776C13.8558 17.6994 14.9756 17.1548 15.7569 16.1589C16.3502 15.4027 16.7254 14.4226 16.8911 13.1878C17.5714 13.5983 18.0756 14.1386 18.354 14.788C18.8275 15.8921 18.8551 17.7062 17.3748 19.1853C16.0778 20.481 14.5188 21.0415 12.1627 21.0588C9.54912 21.0395 7.57251 20.2013 6.28737 18.5676C5.08395 17.0378 4.46202 14.8281 4.43881 12C4.46202 9.17183 5.08395 6.96218 6.28737 5.43239C7.57251 3.79869 9.54908 2.96052 12.1626 2.9411C14.7952 2.96067 16.8062 3.80287 18.1406 5.44446C18.7948 6.24947 19.2881 7.26184 19.6133 8.44222L21.4635 7.94859C21.0693 6.49567 20.4491 5.24367 19.605 4.20535C17.8944 2.10077 15.3926 1.02236 12.1691 1H12.1562C8.93923 1.02228 6.46544 2.10479 4.80354 4.21742C3.32468 6.0974 2.56185 8.71326 2.53621 11.9923L2.53613 12L2.53621 12.0077C2.56185 15.2867 3.32468 17.9026 4.80354 19.7826C6.46544 21.8952 8.93923 22.9778 12.1562 23H12.1691C15.0292 22.9802 17.0451 22.2314 18.7059 20.5721C20.8787 18.4013 20.8133 15.6803 20.0972 14.0099C19.5834 12.8121 18.6038 11.8391 17.2643 11.1966ZM12.3262 15.8393C11.1299 15.9067 9.88716 15.3698 9.82588 14.2197C9.78046 13.367 10.4327 12.4155 12.3996 12.3021C12.6249 12.2891 12.8459 12.2828 13.063 12.2828C13.7774 12.2828 14.4458 12.3522 15.0534 12.485C14.8268 15.3155 13.4974 15.7751 12.3262 15.8393Z" fill="currentColor"/>
              </svg>

            </div>
          </div>
      </div>
    </div>
  );
}