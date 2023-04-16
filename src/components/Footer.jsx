import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
  <ul>
    <li><Link to="#"><i class="fab fa-instagram"></i></Link></li>
    <li><Link to="#"><i class="fab fa-facebook"></i></Link></li>
    <li><Link to="#"><i class="fab fa-twitter"></i></Link></li>
  </ul>
  <div class="container">
    <p>Copyright &copy; 2023 | All Rights Reserved</p>
  </div>
</footer>

  )
}

export default Footer

