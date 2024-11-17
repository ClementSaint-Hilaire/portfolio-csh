'use client';
import { useState } from 'react';
import { cn } from "@/lib/utils";
import Link from "next/link";


export default function Footer() {

return (


<div className="w-full max-w-[1100px] mx-auto mt-[150px] flex-col justify-between items-center inline-flex">
    <div className="w-full justify-center items-start inline-flex">
        <div className="grow shrink basis-0 self-stretch flex-col justify-between items-start inline-flex">
            <div className="max-w-[813px] text-[#1d1d1f] mb-[50px] text-4xl md:text-[82px] font-semibold leading-[72px] md:leading-[88px]">Let’s make your project come to life together.</div>
            <div className="mx-auto justify-center items-center gap-[25px] mb-[150px] flex flex-col md:flex-row md:inline-flex md:gap-[50px] md:mx-0 md:justify-start md:items-start">
                <div className="h-14 px-5 py-3.5 bg-[#0a84ff] rounded-xl shadow justify-start items-center gap-2.5 flex">
                    <a className="text-white text-[21px] font-semibold leading-7" href="mailto:clementsainthilaire.pro@gmail.com">Contact me</a>
                </div>
                <div className="h-14 px-[50px] py-[15px] bg-neutral-100 rounded-xl shadow justify-center items-center gap-2.5">
                    <a className="text-black text-[21px] font-medium" href="mailto:clementsainthilaire.pro@gmail.com">Book a call</a>
                </div>
            </div>
        </div>
        <div className="flex-col justify-center items-end gap-[25px] hidden md:inline-flex ">
            <div className="text-[#75757a] text-[14px] font-medium leading-normal">Navigation</div>
            <div className="flex-col justify-center items-end gap-5 flex">
                <a className="self-stretch text-right text-neutral-800 text-[14px] font-medium leading-normal" href="/">Home</a>
                <a className="self-stretch text-right text-neutral-800 text-[14px] font-medium leading-normal" href="/design">Designs</a>
                <a className="self-stretch text-right text-neutral-800 text-[14px] font-medium leading-normal" href="/knowledge">Knowledge</a>
                <a className="self-stretch text-right text-neutral-800 text-[14px] font-medium leading-normal" href="/templates">Templates</a>
                <a className="self-stretch text-right text-neutral-800 text-[14px] font-medium leading-normal" href="https://aclstudio.fr" target="_blank">ACL Studio</a>
                <a className="self-stretch text-right text-neutral-800 text-[14px] font-medium leading-normal" href="https://medium.com/@clement.sainthilaire.app" target="_blank">Blog</a>
            </div>
        </div>
    </div>
    <div className="w-full max-w-[1100px] mt-50px md:mt-[100px] justify-between items-center inline-flex">
        <div className="text-[#75757a] text-xs font-normal leading-tight">© 2024 Clément Saint-Hilaire. All Rights Reserved.</div>
        <div className="px-5 py-2.5 bg-[#f5f5f7] rounded-[999px] justify-center items-center gap-2.5 hidden md:flex">
            <div className="text-[#1d1d1f] text-xs font-normal leading-tight">made by csh</div>
        </div>
    </div>
</div>
)
};