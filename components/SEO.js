import Head from 'next/head'
import { seoData } from '@/config/seoData';

export default function SEO( props ) {

    let { title, description, image, appName, type, appUrl  } = seoData;
    
    return (
        <Head>
            
            <title>{title} | {appName} </title>
            <meta name="description" content={description} />
            <meta name="robots" content="follow, index"/>

            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content={image} /> 

            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={appUrl} />
            <meta property="og:site_name" content={appName} />
            <meta property="og:image" content={image} />
            <meta property="og:image:secure_url" content={image} />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} /> 

            {/* Add LD-JSON  */}
        </Head>
    )
}
