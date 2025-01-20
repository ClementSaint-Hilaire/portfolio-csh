import { useTheme } from "next-themes";

import { MagicCard } from "@/components/ui/magic-card";

export function MagicCardDemo() {
  const { theme } = useTheme();
  return (
    <div
      className={
        "flex h-auto w-full flex-col md:flex-row gap-[32px]"
      }
    >
      <MagicCard
        className="flex-col w-full md:w-1/2 items-start h-auto gap-4"
        gradientColor={theme === "dark" ? "#262626" : "#DCDCDE"}
        gradientFrom={theme === "dark" ? "#262626" : "#e5e5e5"}
        gradientTo={theme === "dark" ? "#262626" : "#e5e5e5"}
      >
        <div className="bg-[#F5F5F7]/[0.6] dark:bg-[#1D1D1F]/[0.6] p-[16px] md:p-[32px] rounded-xl">
            <p className="w-full h-auto font-[21px] leading-8 font-currentColor font-normal	">"Clément exceeded our expectations with our website redesign in every way. He took time to understand our vision and the goals for our website, and it definitely showed in the final product. What sets Matteo apart is his willingness to not settle for the ordinary; instead, he pushed boundaries and delivered a website that truly captivated users. Communication with Matteo was always seamless and prompt. He went above and beyond, providing timely updates in addressing our questions or concerns. We loved the design suggestions he provided throughout the whole development process.”</p>
            <div className="flex flex-col mt-[32px]">
                <p className="font-[16px] font-semibold">Prénom Nom </p>
                <p>Président de entreprise 01</p>
            </div>
        </div>
      </MagicCard>
      <MagicCard
        className="flex-col w-full md:w-1/2 items-start h-auto gap-4"
        gradientColor={theme === "dark" ? "#262626" : "#DCDCDE"}
        gradientFrom={theme === "dark" ? "#262626" : "#e5e5e5"}
        gradientTo={theme === "dark" ? "#262626" : "#e5e5e5"}
      >
        <div className="bg-[#F5F5F7]/[0.6] dark:bg-[#1D1D1F]/[0.6] p-[16px] md:p-[32px] rounded-xl">
        <p className="w-full h-auto font-[21px] leading-8 font-currentColor font-normal	">
          Collaborer avec vous a été une expérience fluide et agréable. Vous avez su répondre parfaitement aux attentes, en apportant un réel professionnalisme à chaque étape. Que ce soit au niveau des délais, des rendus ou de la communication, vous vous êtes toujours montré fiable et réactif, ce qui a considérablement facilité notre travail commun. Votre attention aux détails et votre capacité à comprendre rapidement les besoins du projet font de vous un collaborateur précieux.
          <br/>C’est un plaisir de travailler avec quelqu’un d’aussi rigoureux et impliqué.”</p>
            <div className="flex flex-col mt-[32px]">
                <p className="font-[16px] font-semibold">ChatGPT </p>
                <p>MLM at OpenAI</p>
            </div>
        </div>
      </MagicCard>
    </div>
  );
}
