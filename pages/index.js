import fetch from 'isomorphic-unfetch';

function HomePage({id}) {
    return <div>Welcome to Next.js!
        {id.map( results => 
        <div>
        <img src={results.image_sources}></img>
        {results.height}</div> )}
    </div>

  }

  HomePage.getInitialProps = async ({ req }) => {
    const res = await fetch('https://brogressapi.herokuapp.com/api/?format=json')
    const json = await res.json()
    var results = json.results
    return { id: json.results}
  }
  
  export default HomePage