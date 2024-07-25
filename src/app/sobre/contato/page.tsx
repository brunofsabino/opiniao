'use client'
import { useState } from "react";
import { toast } from "../../../components/ui/use-toast";
import { ToastAction } from "../../../components/ui/toast";

const Page = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });
    const [status, setStatus] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Lógica de envio de formulário aqui
    //     console.log(formData);
    // };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setStatus('Enviando...');
    //     try {
    //         const res = await fetch('/api/sendEmail', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         if (res.ok) {
    //             setStatus('E-mail enviado com sucesso!');
    //             setFormData({ nome: '', email: '', mensagem: '' });
    //         } else {
    //             setStatus('Erro ao enviar e-mail.');
    //         }
    //     } catch (error) {
    //         setStatus('Erro ao enviar e-mail.');
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Enviando...');

        const formDataObj = new FormData();
        formDataObj.append('nome', formData.nome);
        formDataObj.append('email', formData.email);
        formDataObj.append('mensagem', formData.mensagem);

        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                body: formDataObj,
            });

            if (res.ok) {
                setStatus('E-mail enviado com sucesso!');
                setFormData({ nome: '', email: '', mensagem: '' });
                toast({
                    variant: "default",
                    title: "Sucesso",
                    description: "Mensagem encaminhada com sucesso!",
                    action: <ToastAction altText="Try again">Fechar</ToastAction>,
                    className: "border border-green-500"
                });
            } else {
                setStatus('Erro ao enviar e-mail.');
            }
        } catch (error) {
            setStatus('Erro ao enviar e-mail.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Contato</h2>
            <p>Fale conosco. Preencha os dados abaixo:</p>
            <br />
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nome" className="block text-gray-700">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="mensagem" className="block text-gray-700">Mensagem</label>
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="w-full h-20 px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Page