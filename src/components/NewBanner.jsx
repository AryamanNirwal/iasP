import React from 'react'


const NewBanner = ({list}) => {

  return (
    <div>
        <div className="container mx-auto px-4 pt-14 justify-center ">
            <h3 className="font-medium text-2xl pb-4 text-center" style={{fontFamily:"Overpass, sans-serif", fontWeight:"100"}}>WE SPECIALIZE IN</h3>
            <div className="bannerBig_container">

                { list.length > 0 && list.map((item)=>(
                    <div key = {item.title}>
                        {
                            item.icon ? (
                                <a href = {item.link}>
                                     <img  className="bannerBig_img"src = {item.icon} alt = {item.title}/>
                                </a>
                            ):(
                                <span>{item.title}</span>
                            )
                        }
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default NewBanner;