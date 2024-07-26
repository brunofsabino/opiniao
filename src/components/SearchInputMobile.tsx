import { CiSearch } from 'react-icons/ci';
import { Input } from './ui/input';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SheetClose } from './ui/sheet';
//import { useRouter } from 'next/router';

const SearchInputMobile = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();
    const sheetCloseRef = useRef(null);

    const handleSearch = () => {
        if (query.length >= 3) {
            // Redireciona para a rota de busca com a query como parâmetro
            router.push(`/search?q=${query}`);
            if (sheetCloseRef.current) {
                sheetCloseRef.current.click();
            }
        }
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <div className="relative w-full ml-1 ">
            <Input
                placeholder="Pesquise aqui..."
                className="pr-10 " // Adiciona padding para o ícone no lado direito
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <SheetClose asChild>
                <button ref={sheetCloseRef} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                    <CiSearch
                        //className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                        onClick={handleSearch}
                    />
                </button>
            </SheetClose>
        </div>
    );
};

export default SearchInputMobile;