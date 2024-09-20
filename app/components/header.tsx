import Link from "next/link";
import { Icon, IconName } from "./icons";
import React from "react";

const Header = ({
  title,
  href,
  children,
  iconName,
  iconZize,
}: Readonly<{
  title?: string;
  href: string;
  children?: React.ReactNode;
  iconName?: IconName;
  iconZize?: string;
}>) => {
  const IconNameFallback = iconName ?? "arrow-left";
  const classNameDefault = "flex gap-5 items-center";
  return (
    <header
      className={`${classNameDefault} ${children ? "justify-between" : null}`}
    >
      {children || null}
      <Link
        href={href}
        className="h-8 w-8 flex items-center justify-center border border-slate-400 rounded-full hover:bg-slate-200 transition-all"
      >
        <Icon
          name={IconNameFallback}
          className={` text-[#292D32] ${iconZize}`}
        />
      </Link>
      {!children ? <div className="text-xl font-semibold">{title}</div> : null}
    </header>
  );
};

export default Header;
