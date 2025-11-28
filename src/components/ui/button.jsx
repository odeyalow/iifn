import Link from "next/link";

const Button = ({ link, className, onClick, children }) => {
    if ( link ) {
        return (
            <Link href={link} tabIndex={-1}>
                <button className={`bg-yellow-1 uppercase px-[1.3rem] py-4 text-[2rem] rounded-2xl active:translate-y-0.5 hover:bg-yellow-2 cursor-pointer ${className}`}>
                    {children}
                </button>
            </Link>
        );
    } else {
        return (
            <button onClick={onClick}
            className={`bg-yellow-1 uppercase px-[1.3rem] py-4 text-[2rem] rounded-2xl active:translate-y-0.5 hover:bg-yellow-2 cursor-pointer ${className}`}>
                {children}
            </button>
        );
    }
}
 
export default Button;