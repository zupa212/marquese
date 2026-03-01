import Script from 'next/script';

export const GA4Stub = () => {
    // Replace 'G-XXXXXXXXXX' with your actual GA4 measurement ID
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
            >
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
            </Script>
        </>
    );
};
