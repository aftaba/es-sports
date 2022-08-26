const { parse } = require('rss-to-json');

export default async function handler (req, res) {
  
    let rss = await parse('https://www.essentiallysports.com/feed/');
    res.status(200).json( rss.items )
}
