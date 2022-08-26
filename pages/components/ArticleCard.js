import Link from 'next/link';
import Image from 'next/image';
import Categories from './Categories';
import React from 'react';
import moment from 'moment';

export default function ArticleCard( {article} ) {
    return (
        <div className="card py-3 my-3">
            <div className="row">
                <div className="image col-md-3 col-lg-3 col-12">
                    <div className='text-center'>
                        <Link href={article.link}>
                            <a className=''>
                                <Image src={article.media.thumbnail.url} height={300} width={300} alt={article.title} />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="details col-md-9 col-lg-9 col-12">
                    <div className="row">
                        <div className="col-md-6 col-12"><span > <strong>Author </strong>{article.author}</span></div>
                        <div className="col-md-6 col-12 text-right"><span ><strong>Published: </strong> { moment(article.published).fromNow() }</span></div>
                    </div>
                    <h5>
                        <div dangerouslySetInnerHTML={{__html:article.title}} /> 
                    </h5>
                    <div className='category-list'>
                        { article.category.map( (category) => <Categories key={category} category={category} /> ) }
                    </div>
                    <div className="text-secondary" dangerouslySetInnerHTML={{__html : article.description}} />
                    <Link href={article.link}>
                        <a className="btn btn-primary">Read More</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
