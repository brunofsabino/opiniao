import { Separator } from '@radix-ui/react-separator';
import Link from 'next/link';

const MenuFooter = () => {
    return (
        <div className='flex w-full justify-end md:flex-1'>
            <nav aria-label="Footer navigation" className='flex flex-col md:flex-row'>
                <div className='flex justify-between flex-col items-end p-4'>
                    <ul className="flex flex-col text-white justify-end md:flex-row md:space-x-4">
                        <li>
                            <Link href="/" legacyBehavior >
                                <a className="hover:text-gray-400">Início</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* <Separator className='bg-white mx-4 h-full w-[0.1px]' orientation='vertical' /> */}
                <div className='flex justify-between flex-col items-end p-4'>
                    {/* <div className='border b-bottom-white'></div> */}
                    <p className='text-white'>Notícias</p>
                    <ul className="flex flex-col justify-end text-white text-sm font-extralight mt-3">
                        <li className='text-right'><Link href="/noticias/polemicas" legacyBehavior ><a className="hover:text-gray-400">Polêmicas</a></Link></li>
                        <li className='text-right'><Link href="/noticias/eventos" legacyBehavior ><a className="hover:text-gray-400">Eventos</a></Link></li>
                        <li className='text-right'><Link href="/noticias/famosos" legacyBehavior ><a className="hover:text-gray-400">Famosos</a></Link></li>
                        <li className='text-right'><Link href="/noticias/musicagospel" legacyBehavior ><a className="hover:text-gray-400">Música Gospel</a></Link></li>
                        <li className='text-right'><Link href="/noticias/politica" legacyBehavior ><a className="hover:text-gray-400">Política</a></Link></li>
                        <li className='text-right'><Link href="/noticias/atualidades" legacyBehavior ><a className="hover:text-gray-400">Atualidades</a></Link></li>
                    </ul>
                </div>
                {/* <Separator className='bg-white mx-4 h-full w-[0.1px]' orientation='vertical' /> */}
                <div className='flex justify-between flex-col items-end p-4'>
                    <p className='text-white'>Artigos</p>
                    <ul className="flex flex-col justify-end text-white text-sm font-extralight mt-3">
                        <li className='text-right'><Link href="/artigos/teologiaedoutrina" legacyBehavior ><a className="hover:text-gray-400">Teologia e Doutrina</a></Link></li>
                        <li className='text-right'><Link href="/artigos/historiadasigrejas" legacyBehavior ><a className="hover:text-gray-400">História das Igrejas</a></Link></li>
                        <li className='text-right'><Link href="/artigos/vidacrista" legacyBehavior ><a className="hover:text-gray-400">Vida Cristã</a></Link></li>
                        <li className='text-right'><Link href="/artigos/familiaerelacionamentos" legacyBehavior ><a className="hover:text-gray-400">Família e Relacionamentos</a></Link></li>
                        <li className='text-right'><Link href="/artigos/espiritualidadeecrescimentopessoal" legacyBehavior ><a className="hover:text-gray-400">Espiritualidade e Crescimento Pessoal</a></Link></li>
                        <li className='text-right'><Link href="/artigos/culturaeentretenimento" legacyBehavior ><a className="hover:text-gray-400">Cultura e Entretenimento</a></Link></li>
                    </ul>
                </div>
                {/* <Separator className='bg-white mx-4 h-full w-[0.1px]' orientation='vertical' /> */}
                <div className='flex justify-between flex-col items-end p-4'>
                    <p className='text-white'>Sobre</p>
                    <ul className="flex flex-col justify-end text-white text-sm font-extralight mt-3">
                        <li className='text-right'><Link href="/sobre/nossahistoria" legacyBehavior ><a className="hover:text-gray-400">Nossa História</a></Link></li>
                        <li className='text-right'><Link href="/sobre/missaoevisao" legacyBehavior ><a className="hover:text-gray-400">Missão e Visão</a></Link></li>
                        <li className='text-right'><Link href="/sobre/politicadeprivacidade" legacyBehavior ><a className="hover:text-gray-400">Política de Privacidade</a></Link></li>
                        <li className='text-right'><Link href="/sobre/equipe" legacyBehavior ><a className="hover:text-gray-400">Equipe</a></Link></li>
                        <li className='text-right'><Link href="/sobre/termosdeservico" legacyBehavior ><a className="hover:text-gray-400">Termos de Serviço</a></Link></li>
                        <li className='text-right'><Link href="/sobre/contato" legacyBehavior ><a className="hover:text-gray-400">Contato</a></Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default MenuFooter;
