import { OrbitingCirclesTools } from "./OrbitingCircles";
import { NumberTickerDesigns } from "./magicui/number-tiker-designs";
import Image from "next/image";
import { Marquee4Vertical } from "./magicui/marquee4vertical";



const icons = [
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.49997V5.99997M12 21.5V18M14.5 3.49997L12.2572 2.15432C12.0989 2.05932 11.9011 2.05932 11.7427 2.15432L9.5 3.49997M14.5 20.5L12.2572 21.8456C12.0989 21.9406 11.9011 21.9406 11.7427 21.8456L9.5 20.5M3.99993 16.4996L6.80032 15.0018M20 7.49997L17.1926 9.00178M3.38888 14.0849L3.34489 16.7C3.34178 16.8846 3.44069 17.0559 3.60213 17.1456L5.88888 18.415M18.1113 5.58489L20.3981 6.85434C20.5595 6.94397 20.6584 7.11528 20.6553 7.29991L20.6113 9.91501M20 16.5L17.1959 14.9999M3.99985 7.4999L6.8036 8.9999M18.1111 18.4151L20.3979 17.1456C20.5593 17.056 20.6582 16.8847 20.6551 16.7L20.6111 14.0849M3.38867 9.91506L3.34468 7.29996C3.34157 7.11533 3.44048 6.94401 3.60192 6.85439L5.88867 5.58493M12 12L14.5 10.5M12 12V15M12 12L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      ),
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.10286 15.6005C5.85067 17.2728 7.62438 17.044 10.7579 15.2473C11.5074 14.8176 12.4406 14.8867 13.1489 15.3813C15.7509 17.1983 18.2559 17.68 20.0001 15.5C20.7369 14.3947 21.2021 13.0183 20.7963 10.7709C20.479 9.01378 18.9165 7.79988 17.1442 7.58293C13.5692 7.14533 10.5689 7.13912 7.01039 7.56425C5.15546 7.78586 3.55733 9.09808 3.17269 10.9262C2.77854 12.7995 2.94161 14.0316 3.91527 15.3845C3.97068 15.4615 4.03432 15.5349 4.10286 15.6005Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>      
      ),
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12C2 12 4.50503 12.453 6 12C10.0253 10.7802 11.5 2 11.5 2L12 22C12 22 13.9747 13.2198 18 12C19.495 11.547 22 12 22 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
  
      ),
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.99979 11.9997C1.9998 7 7.00023 1.99972 11.9999 2C16.9996 2.00028 22.0001 7 21 12M18.2322 19.5981L21.2322 14.402C21.7845 13.4454 21.4567 12.2222 20.5001 11.6699C19.5435 11.1176 18.3204 11.4454 17.7681 12.402L14.7681 17.5981C14.2158 18.5547 14.5435 19.7779 15.5001 20.3302C16.4567 20.8825 17.6799 20.5547 18.2322 19.5981ZM5.76783 19.5981L2.76783 14.402C2.21555 13.4454 2.5433 12.2222 3.49988 11.6699C4.45647 11.1176 5.67965 11.4454 6.23193 12.402L9.23193 17.5981C9.78422 18.5547 9.45647 19.7779 8.49988 20.3302C7.5433 20.8825 6.32012 20.5547 5.76783 19.5981Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 20V14M12 20V4M18 20V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
  
      ),
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8V5C3 3.89543 3.89543 3 5 3H8M16 3H19C20.1046 3 21 3.89543 21 5V8M21 16V19C21 20.1046 20.1046 21 19 21H16M8 21H5C3.89543 21 3 20.1046 3 19V16M15.182 15.182C14.3381 16.0259 13.1935 16.5 12 16.5C10.8065 16.5 9.66194 16.0259 8.81802 15.182M16 8.5V10.5M8 8.5V10.5M12 8.5V12C12 12.5523 11.5523 13 11 13H10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>      
      ),
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.22395 9.67812L20.4672 2.75827C20.8703 2.60539 21.2649 3.00005 21.112 3.40309L14.1922 21.6464C14.0294 22.0755 13.4228 22.0769 13.258 21.6485L10.5115 14.5076C10.3083 13.9794 9.89093 13.562 9.36275 13.3588L2.22179 10.6123C1.79338 10.4475 1.79478 9.84091 2.22395 9.67812Z" stroke="currentColor" stroke-width="1.5"/>
        </svg>      
      ),   
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 4.5H13M6 4.5V19.5C6 20.8807 7.11929 22 8.5 22H15.5C16.8807 22 18 20.8807 18 19.5V4.5C18 3.11929 16.8807 2 15.5 2H8.5C7.11929 2 6 3.11929 6 4.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      ),
    },
  ];
  

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
                            <p className="mt-[-16px] text-currentColor text-[21px] font-semibold leading-7 text-center">Digital creations</p>
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

                    <a className="w-full h-2/3 rounded-xl bg-blanc dark:bg-noir overflow-hidden" href="/design/skorpia">
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
                                alt="skorpia.fr"
                                width={250}
                                height={255}
                                className="object-cover w-full h-full"
                            />
                        </a>
                        <a className="w-1/2 h-auto rounded-xl bg-blanc dark:bg-noir overflow-hidden" target="_black" href="/design/assoreg">
                            <Image
                                src="/Home/bentoHome/10.webp"
                                alt="assoreg.fr"
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
                    <Marquee4Vertical/>                    
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
