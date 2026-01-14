

export function Header (){
    return(
        <header className="w-full h-20 sm:h-28 flex items-center  ">
            <p className="text-4xl font-bold text-blue-600">Blog - Header</p>
            <div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Artigos</li>
                        <li>Devocionais</li>
                        <li>Contato</li>
                        <li>Sobre</li>
                        
                    </ul>
                </nav>
            </div>
        </header>
    )
}