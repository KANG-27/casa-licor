import Image from "next/image";

export default async function Hero() {
    return (
        <div className="relative w-full min-h-screen flex items-center pt-[6%]">
            
            <Image
                src="/fondo-barra.png" 
                alt="Fondo de la barra" 
                fill
                className="object-cover object-center z-0"
                priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent z-10"></div>

            <div className="relative z-20 flex flex-col justify-center px-10 md:px-20 w-full">
                
                <h1 className="text-4xl md:text-6xl font-bold text-[#E5C158] mb-4">
                    Casa Licor Tres Gatos
                </h1>
                
                <span className="text-xl md:text-2xl text-gray-200 mb-8">
                    Tu distribuidora de confianza para momentos inolvidables
                </span>
                
                <div className="flex gap-4">
                    <button className="bg-[#E5C158] text-[#2B1512] px-6 py-3 rounded-md font-bold hover:bg-yellow-500 transition-colors">
                        Ver Catalogo
                    </button>
                    <button className="border-2 border-[#E5C158] text-[#E5C158] px-6 py-3 rounded-md font-bold hover:bg-[#E5C158] hover:text-[#2B1512] transition-colors">
                        Hacer Pedido
                    </button>
                </div>
                
            </div>
           
        </div>
    )
}