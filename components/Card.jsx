import React from 'react'
import ContentItem from './ContentItem'

function Card({id, title, subtitle, contentItem }) {
  return (
    <div id={id} className="scroller-view-content">
          <div className="content-section top">
            <div className="build-title">
              <div className="frame">
                <div className="frame-text">{title}</div>
                <div className="frame-subtitle-text">
                  {subtitle}
                </div>
              </div>
              <div className="frame-content">
                {contentItem.map((item,index)=>{
                    return (
                        <ContentItem key={index} itemText={item.text} />
                    )
                })}
                
              </div>
            </div>
            <img
              src="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, 720px"
              srcSet="https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1-p-500.png 500w, https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1-p-800.png 800w, https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6638923477bfb3c85072e609_photo1.png 976w"
              alt=""
              className="frame-image"
            />
          </div>
        </div>
  )
}

export default Card