import { getLatestArticles } from '../helper/api-helper';
import ArticleCard from './components/ArticleCard';
import SEO from './components/SEO';
import HeroBanner from './components/HeroBanner';
import styles from '../styles/Home.module.css';

export default function Home( { articles } ) {
    

    const seo = {
        title : "ES Sports",
        description : "EssentiallySports is a multi-sport news website that delivers the latest news, articles, features, and updates on global sports such as UFC, NBA, NFL, NASCAR, eSports, Tennis, Formula 1, Boxing, WWE and Golf",
    }
    
    return ( 
        <>
            <SEO />
            <HeroBanner />
            <div className="container">
                <h3 className="text-center pt-3"> Latest Articles </h3>
                <div className={ `py-3 ${styles.articleContainer}` }>
                { articles.length === 0 && <p>No Article Found</p> }
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