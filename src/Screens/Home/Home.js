import React from 'react'
import '../Home/Home.css'
import Product from '../Product/Product'

function Home() {
    return (
        <div className="home">
            <img 
            className = "banner"
            src = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup/GW/3000x1200_main_1x._CB409438475_.jpg" 
            alt = "Banner"></img>

            <div className = "homeproduct">
                <Product 
                    id = "1000"
                    title = "Apple Watch Series 5 (GPS, 44mm) - Space Gray Aluminium"
                    price = {43900}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71wu%2BHMAKBL._SL1500_.jpg" />

                <Product 
                    id = "1001"
                    title = "Samsung Galaxy S20 Ultra (Cosmic Gray, 12GB RAM, 128GB Storage)"
                    price = {97999}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71cD4NUIBWL._SL1500_.jpg" />

                <Product 
                    id = "1005"
                    title = "Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                    price = {140800}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg" />

            </div>

            <div className = "homeproduct">
                <Product 
                    id = "1002"
                    title = "Microsoft Surface Pro 6 LGP-00015 12.3 inch Touchscreen 2-in-1 Laptop (8th Gen Intel Core i5/8GB/128GB SSD/Windows 10 Home/Intel UHD Graphics 620), Platinum"
                    price = {83500}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/61laC6lZNfL._SL1200_.jpg" />

                <Product 
                    id = "1003"
                    title = "Data Structures Using C Paperback – 11 June 2014"
                    price = {314}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51mDmYHm31L._SX379_BO1,204,203,200_.jpg" />

                <Product 
                    id = "1004"
                    title = "Xbox Live 12 Month Gold Membership Card (Xbox 360 & Xbox One) (Xbox One)"
                    price = {3599}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/61zwh3sjBeL._SL1000_.jpg" />
            </div>

            <div className="homeproduct" >

            <Product 
                    id = "1005"
                    title = "Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                    price = {140800}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg" />

            </div>

        </div>
    )
}

export default Home
