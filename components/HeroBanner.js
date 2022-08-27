
import styles from '@/styles/HeroBanner.module.css';


export default function HeroBanner() {
    return (
        <div className={ styles.main}>
            <div className="container">
                <div  className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            <h2> Welcome to ES - Sports</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
