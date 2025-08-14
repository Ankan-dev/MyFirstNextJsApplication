import Head from "next/head";

interface SEOProps {
    title: string,
    description: string,
    url: string,
    image?: string,
    twitterhandle?: string
}

const Header: React.FC<SEOProps> = ({ title, description, url, image, twitterhandle }) => {

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:site" content={twitterhandle} />

            {/* Favicon */}
            <link rel="icon" href="../../public/logo.png" />
        </Head>
    )
}

export default Header