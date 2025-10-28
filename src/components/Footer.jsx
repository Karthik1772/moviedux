import '../styles.css'
export default function Footer() {

    const year = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <p className='footer-text'>© {year} Moviedux. All rights reserved.</p>
        </footer>
    )
}
