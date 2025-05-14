import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
function Logo({
  fontSize = "2xl",
  iconSize = 20,
}: {
  fontSize?: string;
  iconSize?: number;
}) {
  return (
    <Link
      className={cn(
        "text-2xl font-extrabold flex items-center gap-2",
        fontSize
      )}
      href="/"
    >
      <div>
        <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
          GrewBie
        </span>
      </div>
       <div className="rounded-xl bg-gradient-to-r">
           <Image src='/GrewBie.png' 
            width={50}
            height={50} 
            alt="GrewBie logo" 
            className="shadow-sm"/>
      </div>
    </Link>
  );
}

export default Logo;
