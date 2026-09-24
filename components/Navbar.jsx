"use client";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
export default function Navbar() {
 const [open,setOpen]=useState(false);
 return <header className="fixed top-0 z-50 w-full border-b border-white/15 bg-[#111111]/95 text-white backdrop-blur">
  <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10">
   <a href="#" className="text-lg font-black tracking-tight">MUL<span className="text-yellow-400">.</span></a>
   <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-widest md:flex">
    <a href="#about" className="hover:text-yellow-400">About</a><a href="#services" className="hover:text-yellow-400">Services</a><a href="#contact" className="hover:text-yellow-400">Contact</a>
   </nav>
   <a href="#contact" className="hidden items-center gap-2 bg-yellow-400 px-4 py-2 text-xs font-black uppercase text-black md:flex">Start a project <ArrowUpRight size={15}/></a>
   <button className="md:hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div>
  {open && <nav className="flex flex-col gap-5 px-5 pb-6 text-sm font-bold uppercase md:hidden"><a href="#about" onClick={()=>setOpen(false)}>About</a><a href="#services" onClick={()=>setOpen(false)}>Services</a><a href="#contact" onClick={()=>setOpen(false)}>Contact</a></nav>}
 </header>
}