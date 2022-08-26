import { getLatestArticles } from '../helper/api-helper';
import ArticleCard from './components/ArticleCard';

export default function Home( { articles } ) {
  return ( 
        <div className="container">
            <h3 className="text-center"> Latest Articles </h3>

            { articles.length === 0 && <p>No Article Found</p> }

            { articles.map( (article) => <ArticleCard key={article.id} article={article} /> ) }
            
        </div>    
    )
}



export async function getServerSideProps( context ) {
    return {
        props : {
            articles : await getLatestArticles(),
        }
    }
}