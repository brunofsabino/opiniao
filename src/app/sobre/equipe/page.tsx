
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"

const Page = () => {
    return (
        <div className="container mt-10 mb-10 border rounded-lg bg-white">
            <br />
            <h1 className="text-4xl font-extrabold text-center m-10">Equipe</h1>

            <br />
            <div className="flex items-center justify-center flex-col">
                <Avatar className="w-24 h-24">
                    <AvatarImage src="/images/fernanda-senna.png" />
                    <AvatarFallback>FS</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-extrabold mt-2">Fernanda Senna</h2>
            </div>
            <br />
            {/* <h2 className="text-2xl font-extrabold">Missão</h2>
            <br /> */}
            <p>Fernanda Senna é uma jornalista talentosa e dedicada, formada em 2022. Desde cedo, Fernanda demonstrou um profundo interesse pelas notícias gospel, sendo uma cristã devota que sempre buscou informar e inspirar a comunidade com conteúdos relevantes e edificantes.</p>

            <br />
            <p>Fernanda tem um compromisso inabalável com a verdade e a integridade jornalística. Seu objetivo é garantir que cada notícia publicada em nosso site gospel seja precisa, bem pesquisada e entregue com clareza. Com uma paixão por contar histórias que refletem a fé e os valores cristãos, ela trabalha incansavelmente para trazer à tona questões importantes que afetam a comunidade cristã contemporânea.</p>

            <br />
            <p>Além de suas habilidades jornalísticas, Fernanda é uma excelente comunicadora e escritora, capaz de transformar eventos complexos em narrativas envolventes e acessíveis. Sua abordagem empática e sua dedicação ao serviço comunitário a tornam uma peça-chave em nossa equipe.</p>
            <br />
            <p>Fernanda acredita que o jornalismo pode ser uma força para o bem, ajudando as pessoas a se conectarem com sua fé e com o mundo ao seu redor. Sua visão é criar um espaço onde as notícias gospel não só informam, mas também inspiram e fortalecem a fé de nossos leitores.</p>
            <br />
            <h2 className="text-2xl font-extrabold">Responsabilidades:</h2>
            <br />
            <ul>
                <li className="list-disc ml-4">Pesquisa e redação de notícias e artigos gospel.</li>
                <li className="list-disc ml-4">Cobertura de eventos e acontecimentos relevantes para a comunidade cristã. </li>
                <li className="list-disc ml-4">Criação de conteúdo que aborda temas de fé, cultura e atualidades do mundo gospel.</li>
                <li className="list-disc ml-4">Colaboração com a equipe editorial para garantir a qualidade e a precisão das publicações.</li>
            </ul>
            <br /><br />
            <p>Fernanda Senna é um exemplo de dedicação e paixão pelo jornalismo gospel. Com seu trabalho, ela espera continuar a inspirar e informar nossos leitores, ajudando-os a navegar pelos desafios e bênçãos da vida cristã no século 21.</p>
            <br />

        </div >
    )
}
export default Page