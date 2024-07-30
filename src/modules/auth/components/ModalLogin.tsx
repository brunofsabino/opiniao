"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../components/ui/dialog"
//import { Input } from "@/components/ui/input"
import { Label } from "../../../components/ui/label"
import { Checkbox } from "../../../components/ui/checkbox"
import { Button } from "../../../components/ui/button"
import { useContext, useEffect, useRef, useState } from "react"
import { AlertToast } from "../../../components/AlertToast"
import { ToastAction } from "../../../components/ui/toast";
import { useToast } from "../../../components/ui/use-toast";
import AuthActions from '../actions/login-actions';
import { cookies } from "next/headers"
import { Input } from "../../../components/ui/input"
import { ThemeContext, ThemeContextProps } from "../../../context/MyContext"


export function ModalLogin({ open, setOpen }: any) {

    const [showCreateUser, setShowCreateUser] = useState(false)
    const [showForgotPass, setShowForgotPass] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    //const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const toastRef = useRef(null);
    const { toast } = useToast();

    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useContext must be used within a ThemeProvider');
    }
    //const { isAuthenticated, user } = context as ThemeContextProps
    const { login } = context as ThemeContextProps

    const [showLoginModal, setShowLoginModal] = useState(false);


    const showCreate = (event: React.MouseEvent) => {
        event.preventDefault()
        setShowCreateUser(!showCreateUser)
    }

    const showCreateBack = (event: React.MouseEvent) => {
        event.preventDefault()
        setShowCreateUser(false)
        setShowForgotPass(false)
    }



    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
    const handlePassword2Change = (e: React.ChangeEvent<HTMLInputElement>) => setPassword2(e.target.value);
    const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(e.target);
        setTermsAccepted(e.target.checked);
    };
    // useEffect(() => {
    //     const clearInputs = () => {
    //         setName('')
    //         setEmail('')
    //         setPassword('')
    //         setPassword2('')
    //         setTermsAccepted(false)
    //     }
    //     clearInputs()
    // }, [])
    const clearInputs = () => {
        setName('')
        setEmail('')
        setPassword('')
        setPassword2('')
        setTermsAccepted(false)
    }
    const validateNewUserForm = () => {
        return name && email && password && password2;
    };
    const validateNewUserPass = () => {

        return password !== password2 ? false : true
    };
    // if (password !== password2) {
    //     toast({
    //         variant: "destructive",
    //         title: "As senhas não estão iguais!",
    //         description: "Por favor, preencha os campos com a mesma senha",
    //         action: <ToastAction altText="Try again">Fechar</ToastAction>,
    //     });
    // }
    //clearInputs()
    const validateLoginForm = () => {
        return email && password;
    };
    const sendNewUser = async () => {
        // const { toast } = useToast();
        // setShowAlert(false)
        if (!validateNewUserForm()) {
            toast({
                variant: "destructive",
                title: "Todos os campos são de preenchimento obrigatório!",
                description: "Por favor, preencha todos os campos",
                action: <ToastAction altText="Try again">Fechar</ToastAction>,
            });
            return;
        }
        if (!validateNewUserPass()) {
            toast({
                variant: "destructive",
                title: "As senhas não estão iguais!",
                description: "Por favor, preencha os campos com a mesma senha",
                action: <ToastAction altText="Try again">Fechar</ToastAction>,
            });
            return;
        }
        if (!termsAccepted) {
            toast({
                variant: "destructive",
                title: "É necessario aceitar os termos",
                description: "Por favor, clique em Aceite dos termos e a política de privacidade",
                action: <ToastAction altText="Try again">Fechar</ToastAction>,
            });
            return;
        }
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });
            // const response = await fetch('/api/posts')
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to create user');
            }

            const data = await response.json();

            if (data.success) {
                //clearInputs()
                setShowCreateUser(false)

                //setEmail(email)
                //await AuthService.createSessionToken({ name: data.name, type: data.type, email: data.email })
                toast({
                    variant: "default",
                    title: "Sucesso!",
                    description: `Usuário criado com sucesso. Faça login ${name}`,
                });
                clearInputs()

            } else {
                throw new Error(data.error || 'Unknown error occurred');
            }
        } catch (error: any) {
            //console.error('Error creating user:', error);
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: error.message,
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
        }
    };

    const sendLoginUser = async () => {
        if (!validateLoginForm()) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                login(data)
                setOpen(false)
                // return (
                //     <AlertToast
                //         variant="default"
                //         title="Sucesso"
                //         description="Login realizado com sucesso!"
                //     />
                // )

                toast({
                    variant: "default",
                    title: "Sucesso",
                    description: "Login realizado com sucesso!",
                    action: <ToastAction altText="Try again">Fechar</ToastAction>,
                    className: "border border-green-500"
                });

            } else {
                const errorData = await response.json();
                //alert(`Erro: ${errorData.message}`);
                toast({
                    variant: "destructive",
                    title: "Erro no login",
                    description: errorData.message,
                    action: <ToastAction altText="Try again">Fechar</ToastAction>,
                });
            }
        } catch (error: any) {
            console.error('Erro ao fazer login:', error);
            console.error(error);
            toast({
                variant: "destructive",
                title: "Erro no login",
                description: error.message,
                action: <ToastAction altText="Try again">Fechar</ToastAction>,
            });
        }
    };
    const forgotPass = () => {
        setShowForgotPass(!showForgotPass)

    }
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild>
                <Button className="text-[10px] md:w-30 md:text-[14px] lg:w-34 xl:w-38" variant="default" onClick={() => { setShowLoginModal(true); setOpen(true); clearInputs() }}>Entrar</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] ">
                <DialogHeader>
                    <DialogTitle>
                        {showCreateUser && !showForgotPass && ("Criar conta")}
                        {!showCreateUser && !showForgotPass && ("Login")}
                        {showForgotPass && ("Recuperar a senha")}
                    </DialogTitle>
                    <DialogDescription className="text-[10px] md:text-sm">
                        {showCreateUser && !showForgotPass && (
                            <>
                                <p>Preencha todos os campos e clique em criar.</p>
                                <p>Já possui uma conta? <a onClick={showCreate} href="#" className="text-blue-600 underline ">Faça Login</a></p>
                            </>
                        )}
                        {!showCreateUser && !showForgotPass && (
                            <>
                                <p>Faça login em sua conta da Opinião Gospel. <br /> Não tem conta? <a className="text-blue-600 underline cursor-pointer" onClick={showCreate} >Crie uma conta</a></p>
                            </>
                        )}
                        {showForgotPass && (
                            <p>Digite seu e-mail e clique em recuperar a senha.  <br /> Sabe sua senha? <a onClick={showCreateBack} className="text-blue-600 underline cursor-pointer">Faça Login</a></p>
                        )}

                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 text-[10px] md:text-sm">
                    {showCreateUser && !showForgotPass && (
                        <>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">Nome</Label>
                                <Input id="name" type="text" placeholder="Digite seu nome" className="col-span-3" value={name} onChange={handleNameChange} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right">E-mail</Label>
                                <Input id="email" type="email" placeholder="Email" className="col-span-3" value={email} onChange={handleEmailChange} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="password1" className="text-right">Senha</Label>
                                <Input id="password1" type="password" placeholder="Senha" className="col-span-3" value={password} onChange={handlePasswordChange} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="password2" className="text-right">Senha</Label>
                                <Input id="password2" type="password" placeholder="Digite novamente sua senha" className="col-span-3" value={password2} onChange={handlePassword2Change} />
                            </div>
                            <div className="grid items-center ml-10 mt-2">
                                <div className="items-top flex space-x-2">
                                    {/* <Checkbox id="terms1" checked={termsAccepted} onChange={handleTermsChange} /> */}
                                    <input type="checkbox" id="terms1" checked={termsAccepted} onChange={handleTermsChange} className="mr-3" />
                                    <div className="grid gap-1.5 leading-none">
                                        <label htmlFor="terms1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Aceito os termos de serviço e a política de privacidade.
                                        </label>
                                        <p className="text-sm text-muted-foreground">Declaro que li e aceito os Termos de Serviço e a Política de privacidade.</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {!showCreateUser && !showForgotPass && (
                        <>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right">E-mail</Label>
                                <Input id="email" type="email" placeholder="Email" className="col-span-3" value={email} onChange={handleEmailChange} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="password" className="text-right">Senha</Label>
                                <Input id="password" type="password" placeholder="Senha" className="col-span-3" value={password} onChange={handlePasswordChange} />
                            </div>
                            <div className="flex justify-end items-center ">
                                <a className="text-sm  text-blue-600 underline cursor-pointer" onClick={forgotPass}>Esqueceu a senha?</a>
                            </div>
                        </>
                    )}
                    {showForgotPass && (
                        <>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right">E-mail</Label>
                                <Input id="email" type="email" placeholder="Email" className="col-span-3" value={email} onChange={handleEmailChange} />
                            </div>
                        </>
                    )}
                </div>
                <DialogFooter>
                    {showCreateUser && !showForgotPass && (<Button onClick={sendNewUser} type="submit">Criar</Button>)}
                    {!showCreateUser && !showForgotPass && (<Button onClick={sendLoginUser} type="submit">Login</Button>)}
                    {showForgotPass && (<Button onClick={sendNewUser} type="submit">Recuperar sua senha</Button>)}

                    {/* {showAlert && <AlertToast />} */}
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}