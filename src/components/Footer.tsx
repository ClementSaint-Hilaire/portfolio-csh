'use client';

export default function Footer() {

return (


<div className="w-full max-w-[1100px] mx-auto mt-[150px] flex-col justify-between items-center inline-flex">
    <div className="w-full justify-center items-start inline-flex">
        <div className="grow shrink basis-0 self-stretch flex-col justify-between items-start inline-flex">
            <div className="max-w-[813px] text-[currentColor] mb-[50px] text-4xl md:text-[82px] font-semibold leading-[72px] md:leading-[88px]">Let’s make your project come to life together.</div>
            <div className="mx-auto justify-center items-center gap-[25px] mb-[150px] flex flex-col md:flex-row md:inline-flex md:gap-[50px] md:mx-0 md:justify-start md:items-start">
                <a className="w-[200px] rounded-xl flex-col justify-center items-center gap-2.5 inline-flex" href="/design">
                    <div className="self-stretch h-14 px-5 py-3 bg-neutral-100 rounded-xl justify-between items-center inline-flex">
                        <div className="mx-auto text-noir text-[17px] font-bold leading-normal">Mes Créations</div>
                    </div>
                    </a>
                    <a href="mailto:clement.sainthilaire.pro@gmail.com?subject='Prénom Nom | Premier contact pour projet'&body=''" className="w-[200px] h-14 px-4 py-2 bg-noir rounded-xl justify-center items-center gap-2 flex">
                    <div className="text-[#f5f5f7] text-[17px] font-bold leading-normal">Me contacter</div>
                    <div className="w-6 h-6 relative rounded overflow-hidden">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="mail">
                            <g id="Union">
                            <path d="M2.5 7.5L11.6056 12.0528C12.1686 12.3343 12.8314 12.3343 13.3944 12.0528L22.5 7.5C22.5 5.567 20.933 4 19 4H6C4.067 4 2.5 5.567 2.5 7.5Z" fill="#F5F5F7"/>
                            <path d="M5.5 20H19.5C21.1569 20 22.5 18.6569 22.5 17V9.5L13.8416 13.8292C12.9971 14.2515 12.0029 14.2515 11.1584 13.8292L2.5 9.5V17C2.5 18.6569 3.84315 20 5.5 20Z" fill="#F5F5F7"/>
                            </g>
                        </g>
                        </svg>
                    </div>
                    </a>
            </div>
        </div>
        <div className="flex-col justify-center items-end gap-[25px] hidden md:inline-flex ">
            <div className="text-[#75757a] text-[14px] font-medium leading-normal">Navigation</div>
            <div className="flex-col justify-center items-end gap-5 flex">
                <a className="self-stretch text-right currentColor text-[14px] font-medium leading-normal" href="/">Home</a>
                <a className="self-stretch text-right currentColor text-[14px] font-medium leading-normal" href="/design">Designs</a>
                <a className="self-stretch text-right currentColor text-[14px] font-medium leading-normal" href="/knowledge">Knowledge</a>
                <a className="self-stretch text-right currentColor text-[14px] font-medium leading-normal" href="/templates">Templates</a>
                <a className="self-stretch text-right currentColor text-[14px] font-medium leading-normal" href="https://aclstudio.fr" target="_blank">ACL Studio</a>
                <a className="self-stretch text-right currentColor text-[14px] font-medium leading-normal" href="https://medium.com/@clement.sainthilaire.app" target="_blank">Blog</a>
            </div>
        </div>
    </div>
    <div className="w-full max-w-[1100px] mt-50px md:mt-[100px] justify-between items-center inline-flex">
        <div className="text-[#75757a] text-xs font-normal leading-tight">© 2025 Clément Saint-Hilaire. All Rights Reserved.</div>
        <div className="px-5 py-2.5 bg-[#f5f5f7] rounded-[999px] justify-center items-center gap-2.5 hidden md:flex dark:bg-[#1D1D1F]">
            <div className="text-[#1d1d1f] text-xs font-normal leading-tight dark:text-[#75757a]">made by csh</div>
        </div>
    </div>
</div>
)
};