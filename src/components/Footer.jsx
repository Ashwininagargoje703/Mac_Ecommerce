import "./Footer.css";
import DiamondIcon from '@mui/icons-material/Diamond';
export const Footer = () => {
    return (
        <div className="footer_main">
            <div className="footer">
                <DiamondIcon style={{fontSize:"200px", color:"black", marginLeft:"40px"}}/>
                <div className="Contact_info">
                    <p>Contact Information</p>
                    <p>+917842254142</p>
                    <p>Spring road 41 street New Delhi- 110022</p>
                </div>
                <div className="Contact_info">
                    <p>Opning Hours</p>
                    <p>Sunday-Saturday <span>10AM-5PM</span></p>
                    <p>Monday-Friday <span>10AM-8PM</span></p>
                </div>
            </div>
           <p className="footer_p">Choose shoes Shop, Inc for hand-arranged fresh shoes delivery today in Spring road, Khajan road</p>
         
        </div>
    )
}