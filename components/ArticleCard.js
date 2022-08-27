import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import moment from 'moment';

import styles from '@/styles/ArticleCard.module.css'

export default function ArticleCard( {article} ) {
    return (
        <article className={ "my-3 " + styles.article}>
            <div className="row">
                <div className="image col-md-3 col-lg-3 col-12">
                    <div className="text-center">
                        <Link href={article.link}>
                            <a className=''>
                                <Image src={article.media.thumbnail.url} width="100%" height="100%"  alt={article.title} className={ "img-fluid" +styles.image} layout="responsive"  />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={ styles.details + "col-md-9 col-lg-9 col-12" }>
                    <div className='category-list'>
                        { article.category?.[0] }
                        {/* { article.category.map( (category) => <Categories key={category} category={category} /> ) } */}
                    </div>
                    
                    <h3>
                        <Link href={article.link}>
                            <a className={styles.title}>
                                <div dangerouslySetInnerHTML={{__html:article.title}} /> 
                            </a>
                        </Link>
                    </h3>
                    <div className={ "text-secondary " + styles.wrap } dangerouslySetInnerHTML={{__html : article.description}} />
                    <div className="row">
                        <div className="col-12">
                            <span > {article.author}</span>
                            <span className='text-secondary mx-2'>{ moment(article.published).fromNow() }</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
