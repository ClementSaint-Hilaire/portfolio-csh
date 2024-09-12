import ShimmerButton from "@/components/magicui/shimmer-button";

export function ContactBouton() {
  return (
    <a className="z-10 flex min-h-[10rem] items-center justify-center" href="mailto:clement.sainthilaire.pro@gmail.com?subject=''&body=''">
      <ShimmerButton className="shadow-2xl" >
        <span className="whitespace-pre-wrap text-center text-xl font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Contact
        </span>
      </ShimmerButton>
    </a>
  );
}

export function OpenBouton() {
  return (
    <a className="z-10 flex min-h-[10rem] items-center justify-center" href="https://www.figma.com/community/file/1411338115792823148/csh-ui-landing-kit-v1-0">
      <ShimmerButton className="shadow-2xl" >
        <span className="whitespace-pre-wrap text-center text-xl font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Ouvrir
        </span>
      </ShimmerButton>
    </a>
  );
}

export function OpenDSBouton() {
  return (
    <a className="z-10 flex min-h-[10rem] items-center justify-center" href="https://www.figma.com/community/file/1412016153426631847/csh-design-system-v1">
      <ShimmerButton className="shadow-2xl" >
        <span className="whitespace-pre-wrap text-center text-xl font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Ouvrir
        </span>
      </ShimmerButton>
    </a>
  );
}

export function OpenOnFigmaBouton() {
  return (
    <a className="z-10 flex flex-col gap-2 min-h-[10rem] items-center justify-center" href="https://www.figma.com/community/file/1411338115792823148/csh-ui-landing-kit-v1-0">
      <ShimmerButton className="shadow-2xl" >
        <span className="whitespace-pre-wrap text-center text-xl font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Commencer mon projet
        </span>
      </ShimmerButton>
      <p className="text-slate-400">Essayez, c'est gratuit !</p>
    </a>
    
  );
}

export function OpenIconBouton() {
  return (
    <a className="z-10 flex flex-col gap-2 min-h-[10rem] items-center justify-center" href="https://www.figma.com/community/file/1412017477167007912/csh-icons">
      <ShimmerButton className="shadow-2xl" >
        <span className="whitespace-pre-wrap text-center text-xl font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Obtenir csh Icons
        </span>
      </ShimmerButton>
      <p className="text-slate-400">Essayez, c'est gratuit !</p>
    </a>
    
  );
}



