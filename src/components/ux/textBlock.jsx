const TextBlock = ({ title, text }) => {
    return (
        <div>
            <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)'}}
            className="font-extrabold mb-10 max-sm:mb-6">{title}</h3>
            <p style={{ fontSize: 'clamp(1.5rem, 3vw, 1.85rem)'}}
            className="font-medium bg-gray rounded-[20px] p-[25px] max-sm:p-[20px] whitespace-pre-line">{text}</p>
        </div>
    );
}
 
export default TextBlock;