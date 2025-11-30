import React from 'react'
import {
  Vote,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

export  function SideBar() {
  return (
    <aside className="hidden lg:w-64 bg-primary  text-white sm:flex flex-col shadow-xl">
        <div className=" pt-6 flex justify-center lg:justify-start items-center lg:p-6 sm:text-xl  font-bold tracking-wide">
          Admin
        </div>

        <nav className="flex sm:w-fit mx-auto   sm:mt-6  lg:px-4 lg:w-full flex-col gap-6">
          <NavItem active icon={<Vote className='size-6' />} label="Polls" />
          <NavItem icon={<BarChart3 className='size-6' />} label="Analytics" />
          <NavItem icon={<Settings className='size-6' />} label="Settings" />
        </nav>

        <div className="mt-auto p-4">
          <button className="w-full flex flex-col lg:flex-row items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/40 transition-colors">
            <LogOut size={18} />
            <span className='text-xs lg:text-base'>Logout</span>
          </button>
        </div>
      </aside>
  )
}


function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <a
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all
        ${
          active
            ? "bg-white text-primary font-semibold shadow-sm"
            : "text-white/90 hover:bg-white/10"
        }
      `}
      href="#"
    >
      {icon}
      <span className='hidden lg:block'>{label}</span>
    </a>
  );
}
