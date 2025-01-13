import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marqueeHover";
import { MarqueeReverse } from "@/components/magicui/marqueeHover";
import { OrbitingCirclesTools } from "./OrbitingCircles";
import { NumberTickerDesigns } from "./magicui/number-tiker-designs";
import Image from "next/image";

export function HomeMainBento() {
  return (
    <div className="w-full max-w-[1920px] h-auto mx-auto">
        <div className="w-full max-w-[1920px] gap-[5px] h-auto flex flex-col">
            
            <div className="w-full gap-[5px] h-auto flex-col flex md:flex-row">

                <div className="w-full md:w-1/3 h-auto gap-[5px] flex flex-col">

                    <a className="w-full h-auto rounded-xl bg-blanc dark:bg-noir" target="_blank" href="https://discord.gg/EPBXReEWak">
                        <Image
                            src="/Home/bentoHome/1.webp"
                            alt="Picture of the author"
                            width={640}
                            height={295}
                        />
                    </a>

                    <div className="w-full gap-[5px] h-auto flex">

                        <a className="w-full h-auto rounded-xl bg-blanc dark:bg-noir overflow-hidden" target="_blank" href="https://medium.com/@clement.sainthilaire.app">
                            <Image
                                src="/Home/bentoHome/5.webp"
                                alt="Picture of the author"
                                width={640}
                                height={295}
                                className="object-cover w-full h-full"
                            />
                        </a>
                        <div className="w-full gap-[5px] h-auto flex flex-col">

                            <a className="flex flex-col justify-center items-center w-full h-1/2 rounded-xl bg-[#FADECA]" target="_blank" href="https://www.figma.com/proto/XZuro2IluwzsbvZLYxi5jT/aclstudio.fr?page-id=3%3A2&node-id=54-14&viewport=138%2C159%2C0.04&t=VCAZN2fCFt8GD2wK-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=54%3A14&hotspot-hints=0">
                                <Image
                                    src="/Home/bentoHome/6.webp"
                                    alt="Picture of the author"
                                    width={112}
                                    height={112}
                                />
                                <p className="mt-[-12px] text-[21px] font-black text-black italic"><span className="not-italic text-[#FF4D06]">ACL </span>STUDIO</p>
                            </a>
                            <a className="flex justify-center items-center w-full h-1/2 rounded-xl bg-blanc dark:bg-noir overflow-hidden" target="_blank" href="https://www.notion.so/clementsainthilaire/csh-Toolbox-bb51e8ab976d494192380fa95fd9fc08?pvs=4">
                                <OrbitingCirclesTools/>
                            </a>

                        </div>

                    </div>

                </div>

                <div className="w-full md:w-1/3 h-auto gap-[5px] flex flex-col">

                    <div className="w-full h-1/3 gap-[5px] flex">
                        <a className="flex flex-col justify-center items-center w-1/2 h-auto rounded-xl bg-blanc dark:bg-noir gap-[4px]" href="/design">
                            <NumberTickerDesigns/>
                            <p className="mt-[-16px] text-currentColor text-[21px] font-semibold leading-7">Digital creations</p>
                        </a>
                        <a className="w-1/2 h-auto rounded-xl bg-blanc dark:bg-noir overflow-hidden" target="_blank" href="https://www.figma.com/proto/7lRkhdwfygsZoUGkFKA6vf/Wikipedia-%7C-Website-Design?page-id=1%3A4&node-id=4-37&p=f&viewport=1188%2C150%2C0.25&t=tRGsUg6npXm8goPs-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A37&hotspot-hints=0">
                            <Image
                                src="/Home/bentoHome/3.webp"
                                alt="Picture of the author"
                                width={315}
                                height={235}
                                className="object-cover w-full h-full"
                            />
                        </a>
                    </div>

                    <div className="flex justify-center items-center w-full h-2/3 min-h-[350px] rounded-xl bg-blanc dark:bg-noir">
                        <svg width="320" height="121" viewBox="0 0 464 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M92.9341 175C80.0079 175 68.9082 172.165 59.635 166.494C50.418 160.824 43.3086 152.992 38.3067 142.998C33.361 132.948 30.8881 121.383 30.8881 108.301C30.8881 95.1636 33.4172 83.5699 38.4753 73.5202C43.5334 63.4143 50.6709 55.5542 59.8879 49.9398C69.1611 44.2693 80.1203 41.4341 92.7655 41.4341C103.275 41.4341 112.576 43.371 120.669 47.2449C128.819 51.0627 135.31 56.4806 140.143 63.4986C144.976 70.4604 147.73 78.6012 148.405 87.9211H119.236C118.056 81.6891 115.246 76.4958 110.806 72.3412C106.422 68.1304 100.549 66.025 93.187 66.025C86.9487 66.025 81.4691 67.7093 76.7482 71.078C72.0273 74.3904 68.3462 79.1627 65.7047 85.3946C63.1194 91.6266 61.8268 99.0937 61.8268 107.796C61.8268 116.611 63.1194 124.19 65.7047 130.534C68.2899 136.822 71.9149 141.679 76.5796 145.103C81.3005 148.472 86.8363 150.156 93.187 150.156C97.6831 150.156 101.701 149.314 105.242 147.63C108.839 145.889 111.846 143.391 114.262 140.135C116.679 136.878 118.337 132.92 119.236 128.26H148.405C147.674 137.412 144.976 145.525 140.312 152.599C135.647 159.617 129.296 165.119 121.259 169.105C113.223 173.035 103.781 175 92.9341 175Z" fill="currentColor"/>
                            <path d="M275.805 77.3099L247.986 80.3417C247.199 77.5345 245.822 74.8957 243.855 72.4254C241.944 69.9551 239.359 67.962 236.099 66.4461C232.84 64.9302 228.849 64.1723 224.129 64.1723C217.778 64.1723 212.439 65.5478 208.111 68.2988C203.84 71.0499 201.732 74.615 201.789 78.9942C201.732 82.7559 203.109 85.8157 205.919 88.1737C208.786 90.5318 213.507 92.4687 220.082 93.9846L242.169 98.7007C254.421 101.339 263.526 105.522 269.483 111.249C275.496 116.975 278.531 124.471 278.587 133.734C278.531 141.875 276.143 149.062 271.422 155.294C266.757 161.469 260.266 166.298 251.948 169.779C243.63 173.26 234.076 175 223.286 175C207.437 175 194.679 171.688 185.013 165.063C175.346 158.381 169.585 149.09 167.731 137.187L197.489 134.324C198.838 140.163 201.704 144.57 206.088 147.546C210.472 150.521 216.176 152.009 223.201 152.009C230.451 152.009 236.268 150.521 240.652 147.546C245.092 144.57 247.312 140.893 247.312 136.513C247.312 132.808 245.878 129.748 243.012 127.334C240.202 124.92 235.818 123.067 229.861 121.776L207.774 117.144C195.354 114.561 186.165 110.21 180.207 104.09C174.25 97.9147 171.3 90.1107 171.356 80.6785C171.3 72.7061 173.463 65.8004 177.847 59.9615C182.287 54.0664 188.441 49.5188 196.309 46.3186C204.233 43.0622 213.366 41.4341 223.707 41.4341C238.881 41.4341 250.824 44.6623 259.535 51.1189C268.303 57.5754 273.726 66.3057 275.805 77.3099Z" fill="currentColor"/>
                            <path d="M334.269 96.6795V172.474H303.751V0H333.594V65.0987H335.112C338.147 57.8 342.839 52.0452 349.19 47.8345C355.597 43.5675 363.746 41.4341 373.638 41.4341C382.63 41.4341 390.47 43.3149 397.158 47.0765C403.846 50.8381 409.016 56.3402 412.669 63.5828C416.378 70.8253 418.233 79.6679 418.233 90.1107V172.474H387.716V94.8268C387.716 86.1245 385.468 79.3592 380.972 74.5308C376.532 69.6463 370.294 67.204 362.257 67.204C356.862 67.204 352.028 68.3831 347.757 70.7411C343.542 73.043 340.226 76.3835 337.809 80.7628C335.449 85.142 334.269 90.4475 334.269 96.6795Z" fill="currentColor"/>
                            <path d="M0 107.257C0 100.381 5.57995 94.8065 12.4632 94.8065H413.658L439.475 100.142V114.668L413.658 119.707H12.4632C5.57995 119.707 0 114.133 0 107.257Z" fill="currentColor"/>
                            <path d="M439.178 102.514H440.365V112.593H439.178V102.514Z" fill="currentColor"/>
                            <path d="M440.365 100.142H440.958L462.324 104.885L462.56 105.003C464.452 105.949 464.487 108.634 462.62 109.628L440.958 114.372H440.365V100.142Z" fill="currentColor"/>
                        </svg>
                    </div>

                </div>

                <div className="w-full md:w-1/3 h-auto gap-[5px] flex flex-col">

                    <a className="w-full h-2/3 rounded-xl bg-blanc dark:bg-noir overflow-hidden" target="_blank" href="https://www.figma.com/proto/y7f0t63Nb2XHy5HHo38Jw2/Skorpia.fr-3.0?page-id=1%3A3&node-id=2-3&viewport=426%2C105%2C0.08&t=rVXnUtPTU2axXnly-1&scaling=scale-down-width&content-scaling=fixed&hotspot-hints=0">
                        <Image
                            src="/Home/bentoHome/4.webp"
                            alt="Picture of the author"
                            width={635}
                            height={575}
                            className="object-cover w-full h-full"
                        />
                    </a>

                    <div className="w-full h-1/3 gap-[5px] flex">
                        <a className="w-1/2 h-auto rounded-xl bg-blanc dark:bg-noir overflow-hidden" href="/design-system">
                        <Image
                                src="/Home/bentoHome/9.webp"
                                alt="Picture of the author"
                                width={250}
                                height={255}
                                className="object-cover w-full h-full"
                            />
                        </a>
                        <a className="w-1/2 h-auto rounded-xl bg-blanc dark:bg-noir overflow-hidden" target="_black" href="https://medium.com/@clement.sainthilaire.app">
                            <Image
                                src="/Home/bentoHome/10.webp"
                                alt="Picture of the author"
                                width={315}
                                height={235}
                                className="object-cover w-full h-full"
                            />
                        </a>
                    </div>

                </div>


            </div>

            <div className="w-full gap-[5px] h-auto hidden md:flex">

                <a className="w-2/6 h-auto rounded-xl bg-blanc dark:bg-noir overflow-hidden" target="_blank" href="https://csh.beehiiv.com/">
                    <Image
                        src="/Home/bentoHome/11.webp"
                        alt="Picture of the author"
                        width={635}
                        height={260}
                        className="object-cover w-full h-full"
                    />
                </a>
                <a className="w-1/6 h-auto rounded-xl bg-blanc dark:bg-noir overflow-hidden" href="https://www.figma.com/proto/82QxYOTOWLq6VQUztNJWry/Wattiz-%7C-App-design?page-id=4%3A3&node-id=654-7191&p=f&viewport=-2595%2C-218%2C0.59&t=8xRuFvl0lhRLPKWr-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=654%3A7191&hotspot-hints=0&show-proto-sidebar=1">
                    <Image
                        src="/Home/bentoHome/12.webp"
                        alt="Picture of the author"
                        width={310}
                        height={260}
                        className="object-cover w-full h-full"
                    />
                </a>
                <a className="w-2/6 h-auto rounded-xl bg-blanc dark:bg-noir overflow-hidden" href="/icons">
                    <Image
                        src="/Home/bentoHome/13.webp"
                        alt="Picture of the author"
                        width={635}
                        height={260}
                        className="object-cover w-full h-full"
                    />
                </a>
                <a className="w-1/6 h-auto rounded-xl bg-blanc dark:bg-noir" target="_target" href="https://medium.com/@clement.sainthilaire.app">
                    <Image
                        src="/Home/bentoHome/14.webp"
                        alt="Picture of the author"
                        width={310}
                        height={260}
                        className="object-cover w-full h-full"
                    />
                </a>

            </div>

        </div>

    </div>
  );
}
