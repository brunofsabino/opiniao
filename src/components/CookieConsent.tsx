'use client'
import { useEffect, useState } from 'react';
import { Alert } from '../../@/components/ui/alert';
import { Button } from './ui/button';
//import { Alert } from 'shadcn-ui';

const CookieConsent = () => {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const isCookieConsentGiven = localStorage.getItem('cookieConsent');
        if (!isCookieConsentGiven) {
            setShowAlert(true);
        }
    }, []);

    const handleConsent = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowAlert(false);
    };

    if (!showAlert) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 z-50">
            <Alert>
                <div className="flex justify-between items-center flex-col sm:flex-row">
                    <span>Nós, do Opinião Gospel, utilizamos cookies para oferecer uma melhor experiência, melhorar o desempenho, analisar como você interage em nosso site e personalizar o conteúdo. Ao utilizar o site Opinião Gospel, você concorda com o uso de cookies. Conheça nosso Termo de Uso e nossa Política de Privacidade.</span>
                    <Button
                        className="ml-4 px-4 py-2 text-white rounded text-sm"
                        onClick={handleConsent}
                        variant="default"
                    >
                        Ok, entendi!
                    </Button>
                </div>
            </Alert >
        </div >
    );
};

export default CookieConsent;
