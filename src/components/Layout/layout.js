import React from 'react'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/categories">Categories</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
            <li>
                <Link to="/customer">Create Customer</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
        </ul>
    </nav>
    <hr />
    <br />
    </>
  )
}

export default Layout