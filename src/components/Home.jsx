import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import { Paper, Button } from "@mui/material";
import { setproducts } from "../redux/actions";
// import Sidebar from "./Sidebar";
import "./Home.css";
import { Stack, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {Link}from "react-router-dom"
import{Footer} from "./Footer";
import { Login_detail } from "../redux/actions";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((e) => e.MasaiReducer.product);

  const token = useSelector((e) => e.MasaiReducer.token);



  const [loader, setLoader] = useState(false);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    setLoader(true);

    await axios
      .get("https://my-json-server-masai.herokuapp.com/products")
      .then(({ data }) => {
        dispatch(setproducts(data));
      })
      .catch((e) => {
        console.log(e);
      });
    setLoader(false);
  };

  var items = [
    {
      name: "Random Name #1",
      image:
        "https://juancosmetics.com/uploads/layout_image/layout_202204021459625514.png",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image:
        "https://sc02.alicdn.com/kf/HTB1wMdsbq1s3KVjSZFAq6x_ZXXa3/220577229/HTB1wMdsbq1s3KVjSZFAq6x_ZXXa3.jpg",
    },
  
  {
    name: "Random Name #2",
    description: "Hello World!",
    image:
      "https://us-east-1.linodeobjects.com/si585/slides/WebBanner-EG14019Y4JPL_EG13584Y45JJ_EG11122W45JJ-B01.jpg.480x540_q85.jpg",
  },

{
  name: "Random Name #2",
  description: "Hello World!",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnZ6G4ZYAIP-zTwKL7kbNTeS4NMsyvan_Ik9T7KfspuGxOxMBdgoZ7_8au5eLXJd21HM&usqp=CAU",
},
  ];

  return (
    <>
     
        <>
          {loader ? (
            <img
              src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          ) : (
            <>
  
                <div className="cardiv">
                  <Carousel className="carsdiv">
                    {items.map((e) => (
                      <div className="imgdiv">
                        <img src={e.image} alt="" />
                      </div>
                    ))}
                  </Carousel>

                  <Link to="/Product" > <div className="shopping-product"><h1 style={{fontSize:'40px', fontWeight:'bolder'}}>BEAUTY PRODUCT</h1></div></Link>

      <div className="Beauty">
      <div  className="Beautyimage">
      <Link to="/Product"><img className="firstimage1" src="https://thumbs.dreamstime.com/b/make-up-bag-cosmetic-beauty-products-make-up-bag-cosmetic-beauty-products-women-s-secrets-cosmetics-perfume-brushes-143303525.jpg" alt="" /></Link>
      </div>

      <div  className="Beautyimage">
      <Link to="/Product"><img className="firstimage1" src="https://ocdn.eu/images/pulscms/OGI7MDA_/2e1e75c781b763128337ed933cac12bd.jpeg" /></Link>
      </div>

      <div  className="Beautyimage">
      <Link to="/Product"><img className="firstimage1" src="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/newscms/2019_12/1414358/vanity-makeup-today-190302-main-01.jpg" /></Link>
      </div>
      <div  className="Beautyimage">
      <Link to="/Product"><img className="firstimage1" src="https://5.imimg.com/data5/EB/TV/YA/SELLER-88811941/huda-beauty-lipsticks-set-of-12-500x500.JPG" /></Link>
      </div>
      <div  className="Beautyimage">
      <Link to="/Product"><img className="firstimage1" src="https://media.allure.com/photos/5e34591a4b7d1e0008483b50/master/pass/LEDE_SOCIAL.jpg" /></Link>
      </div>
      </div>

      <Link to="/Product" >  <div className="shopping-product"><h2 style={{fontSize:'40px', fontWeight:'bolder'}}>JWELLARY</h2></div></Link>
      <div  className="first-image">
      <Link to="/Product"><img className="firstimage1" src="https://www.anjalijewellers.in/assets/images/costume-jwellery1.jpg" alt="" /></Link>
      </div>

      <div className="jwellery">
      <div  className="jwelleryimage">
      <Link to="/Product"><img className="firstimage1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGtDIcMulr6_k1YGFeHzMTQs5C8_PHE_HTA&usqp=CAU" alt="" /></Link>
      </div>

      <div  className="jwelleryimage">
      <Link to="/Product"><img className="firstimage1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBLi9jGeT0nr0hSu3Kd1TkLe2HsHlflTX8Q&usqp=CAU" /></Link>
      </div>

      <div  className="jwelleryimage">
      <Link to="/Product"><img className="firstimage1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowhS6T81nrKVN9WTK6LM_VEeTQ7RCAzWhmA&usqp=CAU" /></Link>
      </div>

      <div  className="jwelleryimage">
      <Link to="./Home"><img className="firstimage1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGllXUiHxP2VgFxUW5b2_xiWH_mdM-8__9PQ&usqp=CAU" /></Link>
      </div>

      <div  className="jwelleryimage">
      <Link to="/Product"><img className="firstimage1" src="https://artofgold.in/wp-content/uploads/2019/12/N-Aq-409.jpeg" /></Link>
      </div>
      </div>

      <Link to="/Product" >  <div className="shopping-product"><h2 style={{fontSize:'40px', fontWeight:'bolder'}}>HANDBAG</h2></div></Link>

      <div className="jwellery">
      <div  className="jwelleryimage">
      <Link to="/Product"><img className="firstimage1" src="https://5.imimg.com/data5/ANDROID/Default/2021/3/ZZ/GT/BL/47830825/b612-20210108-163708-272-jpg-500x500.jpg" alt="" /></Link>
      </div>

      <div  className="jwelleryimage">
      <Link to="/Product"><img className="firstimage1" src="https://image.made-in-china.com/202f0j00nkjYsdUcGwqV/Eb1339-Sparkle-Ladies-Fancy-Hand-Purse-Wedding-Party-Glitter-Purses-Crossbody-Shoulder-Evening-Clutch-Bag.jpg" /></Link>
      </div>

      <div  className="jwelleryimage">
      <Link to="/Product"><img className="firstimage1" src="https://m.media-amazon.com/images/I/711y7IH8y5L._AC_UL320_.jpg" /></Link>
      </div>

      <div  className="jwelleryimage">
      <Link to="/Product"><img className="firstimage1" src="https://static-01.daraz.pk/p/41c3cc19014fffe97285890935ce8637.jpg" /></Link>
      </div>

      <div  className="jwelleryimage">
      <Link to="/Product"><img className="firstimage1" src="https://images-eu.ssl-images-amazon.com/images/I/71917Q7buwL._AC._SR360,460.jpg" /></Link>
      </div>
      </div>

    <div className="lastcontent">
      <h3>The Ultimate Domestic Online Shopping Experience Platform in India. Benefits of online Shopping :
</h3>
    </div>
    
    <div  className="lastcontent3">
      <div>User-Friendly
</div>
      <div>Safe & Secure Shopping
</div>
      <div>Check Out Closely
</div>
      <div>Multiple Payment Options:
</div>
      <div>Order History:
</div> 
</div>
                  </div>
             
             
            </>
          )}
        </>
    
    </>
         
  );
};
