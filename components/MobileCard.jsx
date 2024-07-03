import React from 'react'
import ContentItem from './ContentItem'

function MobileCard({id, title, subtitle, contentItem }) {
  return (
    <div id={id} className="rounded">
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
          </div>
        </div>
  )
}

export default MobileCard