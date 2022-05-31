import React from 'react'
import styles from "./singleBrochure.module.css"
export const SingleBrochure = ({key,onClick,src,alt,location}) => {
  return (
    <>
           <div key={key} className={styles.brochure} onClick={onClick}>
                  <img  src={src} alt={alt} />
                  <p><b>location:</b> {location}</p>
              
            </div>
    </>
  )
}
