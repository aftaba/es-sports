import { getLatestArticles } from '@/helper/api-helper';
import ArticleCard from '@/components/ArticleCard'
import SEO from '@/components/SEO';
import HeroBanner from '@/components/HeroBanner';
import styles from '@/styles/Home.module.css';

export default function Home( { articles } ) {
    

    return ( 
        <>
            <SEO  />
            <HeroBanner />
            <div className="container">
                <div className={ `py-3 ${styles.articleContainer}` }>
                    { articles.length === 0 && <p className="p-0 m-0">No Article Found</p> }
                    { articles && articles.map( (article, index) => <ArticleCard key={index} article={article} /> ) }
                </div>
            </div>
        </>    
    )
}



export async function getStaticProps( context ) {
        
    return {
        props : {
            articles : await getLatestArticles(),
        },
        revalidate : 60
    }
}