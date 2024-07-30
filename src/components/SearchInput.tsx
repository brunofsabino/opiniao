import { CiSearch } from 'react-icons/ci';
import { Input } from './ui/input';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
//import { useRouter } from 'next/router';

const SearchInput = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        if (query.length >= 3) {
            // Redireciona para a rota de busca com a query como parâmetro
            router.push(`/search?q=${query}`);
        }
    };
    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <div className="relative w-full ml-1 ">
            <Input
                placeholder="Pesquise no Opinião Gospel"
                className="pr-10 " // Adiciona padding para o ícone no lado direito
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <CiSearch
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={handleSearch}
            />
        </div>
    );
};

export default SearchInput;