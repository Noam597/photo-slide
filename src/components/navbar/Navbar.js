import React,{useState} from 'react'
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
        {/* <h1>Don't wait for the last resort..</h1> */}
       <ul>
        <Link className={styles.link} to="/"> <li>Home</li></Link>
         <Link className={styles.link} to="/brochures"> <li>Beach Resorts</li></Link>
          {/* <li>Mountains Resorts</li>
          <li>Lake Resorts</li> */}
       </ul>
        </div>
  )
}
