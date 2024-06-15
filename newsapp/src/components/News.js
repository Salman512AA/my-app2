import React, { useEffect,useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



const  News=(props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const capitalizeFirstLetter=(string)=> {
    if (!string) return ''; // Handle undefined or empty string case
    return string.charAt(0).toUpperCase() + string.slice(1);
}


 
   // document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  
  const updateNews=async()=> {
   props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedata = await data.json();
    props.setProgress(70);
    setArticles(parsedata.articles)
    setLoading(false)
    setTotalResults( parsedata.totalResults)
    props.setProgress(100);
  }
useEffect(()=>{
  document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
  updateNews();

},[])

  //const componentDidMount=()=> {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6e6a175af290495591e67cde46a99e9c&page=1&pagesize=${this.props.pagesize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedata = await data.json();
    // console.log(parsedata)
    // this.setState({
    //   articles: parsedata.articles,
    //   loading: false,
    //   totalResults:parsedata.totalResults
    //});
    //this.updateNews();
  //}
  const fetchMoreData=async()=>{
    setPage(page+1)
   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;

   let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata)
    setArticles(articles.concat(parsedata.articles))
    setTotalResults(parsedata.totalResults)
    
  }
//  handlePrevClick=async()=>{
//   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=6e6a175af290495591e67cde46a99e9c&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
//   // this.setState({ loading: true });
//   // let data = await fetch(url);
//   // let parsedata = await data.json();
//   // this.setState({
//   //   page:this.state.page-1,
//   //   articles:parsedata.articles,
//   //   loading: false
//   // })
//   this.setState({page:this.state.page-1})
//   this.updateNews()
//  }
//  handleNextClick=async()=>{
//   // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
//   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=6e6a175af290495591e67cde46a99e9c&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
//   // this.setState({ loading: true });
//   // let data = await fetch(url);
//   // let parsedata = await data.json();
//   // this.setState({
//   //   page:this.state.page+1,
//   //   articles:parsedata.articles,
//   //   loading: false,
//   // })
//   this.setState({page:this.state.page+1})
//   this.updateNews()
// }

    let {mode,category}=props
    return (
       <div className={` my-3 text-${mode==="light"?"dark":"light"}`}>
       <h1 className="text-center" style={{ margin: "35px 0px",marginTop:"90px" }}>NewsMonkey - Top {capitalizeFirstLetter(category)} Headlines </h1>        
        {loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
       <div className="container">
        <div className="row">
          {articles && articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem 
                  title={element.title ? element.title.slice(0, 45) : "No Title"} 
                  description={element.description ? element.description.slice(0, 88) : "No Description"} 
                  imageUrl={element.urlToImage} 
                  newsUrl={element.url} 
                mode={props.mode}
                author={element.author} 
                date={element.publishedAt} 
                source={element.source.name}
                color={props.color}/>
              </div>
              
            )
          })}
          </div>

        </div>
        
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevClick} className={`btn btn-${mode==="light"?"dark":"light"}`}>&larr; Prev</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" onClick={this.handleNextClick} className={`btn btn-${mode==="light"?"dark":"light"}`}>Next &rarr;</button>
        </div> */}
      </div>
    );
  }

News.defaultProps = {
  country:"in",
  pagesize:8,
  category:"general",
  color:"danger"
}
News.proptype = {
  country: PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string,
  color:PropTypes.string,
  setProgress: PropTypes.func.isRequired,

}

export default News;
