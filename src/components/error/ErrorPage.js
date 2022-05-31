import React from 'react'
import styles from "./errorPage.module.css"
export const ErrorPage = () => {
  return (
    <>  
        <div className={styles.errorPage}> 
            <img src='https://media.istockphoto.com/photos/thunderstorm-lightning-with-dark-cloudy-sky-picture-id517643357?b=1&k=20&m=517643357&s=170667a&w=0&h=-ofkaxfhjSM5HshQS5bSjk0dWTQeZKDGnbdOkq3O4ro=' alt='Thunderstorm lightening with darl clouds'/>
        <h1>Error 404 Page Not Found</h1>
        </div>   
    </>
  )
}
