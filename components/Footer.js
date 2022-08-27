import React from 'react'
import moment from 'moment'

export default function Footer() {
    return (
        <footer className="bg-dark text-white">
            <div className="container">
                <div  className="row py-3">
                    <div className="col-md-12">
                        <div className="text-center py-3">
                            
                            <h2 className="pb-2"> ES - Sports </h2>
                            <p>EssentiallySports is a multi-sport news website that delivers the latest news, articles, features, and updates on global sports such as UFC, NBA, NFL, NASCAR, eSports, Tennis, Formula 1, Boxing, WWE and Golf</p>
                        </div>
                        <div className="text-center py-1">
                            <p>@Copyright { moment().year() }</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
