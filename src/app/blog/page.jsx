import React from 'react';
import Image from 'next/image';
import { MdDateRange } from 'react-icons/md';

export default async function Blog() {

  let headers = { apihost: 'https://portal.platformias.com' };
  let blogResponse = await fetch ("https://v3.edkt.net/api/s/frontpage/blog" , {headers: headers});
  blogResponse = await blogResponse.json();

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Intl.DateTimeFormat('en-IN', options).format(new Date(dateString));
  };
  return (
    <div className="Blogcontainer">
      <div className="main">
        <h1 className="font-medium text-2xl" style={{ fontFamily: 'Lucida Grande,Lucida Sans Unicode,Lucida Sans,Geneva,Verdana,sans-erif', fontWeight: '400', textAlign: 'center', paddingTop: '2rem', fontSize: '22px', width: '1200px', margin: '0 auto 2.5rem',paddingRight:"110px" }}> OUR BLOGS </h1>
        <div className="content">
          <div className="blogCollection">
            {/* {JSON.stringify(blogResponse.contentBlock[0].advanceData.data[0].description)} */}
            {/* {JSON.stringify(blogResponse.contentBlock[0].advanceData.data[0].description)} */}
            {blogResponse.contentBlock[0].advanceData?.data.map((el,index)=>(
              <div key = {index} className="blogPost"> 

              <div className="imageWrapper">
                {el.featureImg && <img  src = {el.featureImg}/>}
              </div>

              <div className="blogInfo">
                {el.title && <h2 className="blogTitle">{el.title}</h2>}
                <div  style={{ display: 'flex', alignItems: 'center' }}> 
                  <MdDateRange/>
                  {el.publishedAt && <p className="date">{formatDate(el.publishedAt)}</p>}
                </div>
                { el.description && <span className="description" dangerouslySetInnerHTML={{ __html: el.description }}/>}
              </div>

              </div>
            ))
            }
          </div>
          <div className='blogCollection_container'>
            <h1 className="collectionTitle">BLOG COLLECTION</h1>
            <span className="collectionItem">Daily Articles</span>
          </div>
        </div>
      </div>
    </div>
  );
}
