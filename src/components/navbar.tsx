import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
    <div className="pointer-events-none fixed inset-x-0 top-0 z-30 w-full mb-4 flex origin-top h-full max-h-[4rem] bg-white bg-opacity-50 backdrop-blur-md dark:bg-black dark:bg-opacity-40">
      <div className="z-50 pointer-events-auto relative flex min-h-full h-full items-center max-w-[1100px] px-1 "> 

          <div >Design System</div>


      </div>
    </div>
  );
}