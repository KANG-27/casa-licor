import Image from 'next/image';

export default async function Header() {
    return (
        <div className="bg-[#2B1512] flex justify-between items-center px-10 h-[8%]  w-full z-50 fixed">
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#D9A441"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>            <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center mt-15">
                <div className="bg-[#2B1512] w-42.5 h-57.5 rounded-full absolute -z-10"></div>
                <Image
                    src="/logo.png" 
                    alt="Logo de la tienda" 
                    width={250} 
                    height={100} 
                    className="z-10 translate-x-[-3.5px] mt-15" 
                />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#D9A441"><path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>        
        </div>
    )
}