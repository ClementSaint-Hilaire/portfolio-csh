import { useTheme } from "next-themes";

import { MagicCard } from "@/components/ui/magic-card";

export function TestimonailsCards() {
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
            <p className="w-full h-auto font-[21px] leading-8 font-currentColor font-normal	">"Je tiens tout d'abord à remercier Clément pour tout le travail exceptionnel qu’il a réalisé. Son professionnalisme m’a véritablement impressionné, tout comme son souci constant de bien faire. Chaque élément de ses créations, des couleurs, des icônes, des rendus, aux détails graphiques, témoigne d’une grande rigueur et d’un véritable talent. Grâce à lui, nous avons une identité visuelle forte et parfaitement alignée avec nos valeurs, que nous ne pouvions même pas imaginer avant de le rencontrer, et qui est désormais essentielle pour nous. Clément est une personne sérieuse et appliquée, sur qui on peut compter, et collaborer avec lui a été un véritable plaisir. Je ne peux que le recommander à tous ceux qui recherchent un professionnel de la création artistique passionné, investi et talentueux.”</p>
            <div className="flex flex-col mt-[32px]">
                <p className="font-[16px] font-semibold">Eliot Mafille</p>
                <p>Président de Skorpia</p>
            </div>
        </div>
      </MagicCard>
      <MagicCard
        className="flex-col w-full md:w-1/2 items-start h-auto gap-4"
        gradientColor={theme === "dark" ? "#262626" : "#DCDCDE"}
        gradientFrom={theme === "dark" ? "#262626" : "#e5e5e5"}
        gradientTo={theme === "dark" ? "#262626" : "#e5e5e5"}
      >
        <div className="bg-[#F5F5F7]/[0.6] dark:bg-[#1D1D1F]/[0.6] p-[16px] md:p-[32px] rounded-xl h-auto">
        <p className="w-full h-auto font-[21px] leading-8 font-currentColor font-normal	">
          "Collaborer avec vous a été une expérience fluide et agréable. Vous avez su répondre parfaitement aux attentes, en apportant un réel professionnalisme à chaque étape. Que ce soit au niveau des délais, des rendus ou de la communication, vous vous êtes toujours montré fiable et réactif, ce qui a considérablement facilité notre travail commun. Votre attention aux détails et votre capacité à comprendre rapidement les besoins du projet font de vous un collaborateur précieux.
          <br/>C’est un plaisir de travailler avec quelqu’un d’aussi rigoureux et impliqué."<br/><br/><br/><br/></p>
            <div className="flex flex-col mt-[32px]">
                <p className="font-[16px] font-semibold">ChatGPT </p>
                <p>MLM at OpenAI</p>
            </div>
        </div>
      </MagicCard>
    </div>
  );
}
