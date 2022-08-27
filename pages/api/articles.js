const { parse } = require('rss-to-json');

export default async function handler (req, res) {
  
    let results = [];
    try{
        let rss = await parse('https://www.essentiallysports.com/feed/');
        results = rss.items;
        
        //items = items.map(({ content, ...rest}) => rest)
        
        // removing unwanted keys so that response will be light-weight
        for(let i=0; i<results.length; i++) {
            delete results[i].content
            delete results[i].content_encoded
            delete results[i].enclosures
        }
    } catch {
        console.log("API Failed");
    }
    
    res.status(200).json( results )
}
