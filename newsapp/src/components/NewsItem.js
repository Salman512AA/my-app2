import React from 'react';

const NewsItem=(props)=>{ 
    let { title, description, imageUrl, newsUrl, mode,author,date ,source,color} = props;
    return (
      <div className="my-3">
        <div className="card" style={{  backgroundColor: mode === 'dark' ? '#333333' : 'white', color: mode === 'dark' ? 'white' : 'black' }}>
        <div style={{
           display:'flex',
           justifyContent:'flex-end',
           position:'absolute',
           right:'0'
        }}>
        <span className={` badge rounded-pill bg-${color}`} 
          >{source}</span>
          </div>
          <img src={imageUrl ? imageUrl : 'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <div className={`card-footer text-${mode==="light"?"dark":"light"}`} >By {author?author:"unknown"} on {new Date(date).toGMTString()}</div>
            <a href={newsUrl} rel="noreferrer" target="_blank" className={`btn btn-sm btn-${mode==="light"?"dark":"light"} btn-primary`}>Read More</a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
