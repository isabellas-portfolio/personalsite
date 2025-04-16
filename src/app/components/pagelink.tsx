import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    text: ReactNode;
    page: string;
}
export default function Pagelink({text, page} :Props) {
    return(
        <Link href={page} className="font-bold text-black hover:text-anjana">
       {text}
        </Link>)
} 

