import Link from "next/link";

const IconButton = ({ link, onClick, children, className }) => {
    if ( link ) {
        return (
            <Link href={link} tabIndex={-1}>
                <button className={`bg-yellow-1 font-extrabold uppercase h-[40px] w-[40px] text-[2rem] rounded-2xl hover:bg-yellow-2 active:translate-y-0.5 cursor-pointer flex justify-center items-center ${className}`}>
                    {children}
                </button>
            </Link>
        );
    } else {
        return (
            <button onClick={onClick}
            className={`bg-yellow-1 font-extrabold uppercase h-[40px] w-[40px] text-[2rem] rounded-2xl hover:bg-yellow-2 active:translate-y-0.5 cursor-pointer flex justify-center items-center ${className}`}>
                {children}
            </button>
        );
    }
}
 
export default IconButton;