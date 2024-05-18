import Link from "next/link";

interface Props {
    text: string;
    page: string;
}
export default function Pagelink({text, page} :Props) {
    return(
        <Link href={page} className="text-neutral-950 hover:text-pink-600">
       {text}
        </Link>)
} 

