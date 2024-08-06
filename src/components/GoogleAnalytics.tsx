// components/GoogleAnalytics.tsx
'use client'
import Script from 'next/script';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

const GoogleAnalytics = () => {
    return (
        <>
            {GA_TRACKING_ID && (
                <>
                    <Script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <Script
                        id="google-analytics"
                        strategy="afterInteractive"
                    >
                        {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_TRACKING_ID}');
                        `}
                    </Script>
                </>
            )}
        </>
    );
};

export default GoogleAnalytics;
