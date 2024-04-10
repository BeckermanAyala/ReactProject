import logo from "../img/7.png"; 
export default function About(){
    return(
        <>
                    <div className="container-fluid" style={{ backgroundColor: "white"}}>
                <img src={logo} alt="Logo" style={{ width: "50%" }}/> 
                <div className="row justify-content-center align-items-center text-light p-2 "></div>
        <h1 style={{color : "black" }}>ABOUT US</h1>
        
        <p style={{color : "black" ,fontSize: "large"}}>
        
         "Welcome to the world of our amazing School Wrapping Paper!<br></br> We believe in the importance of the School Wrapping Paper as a tool to improve the learning experience of our students.<br></br>
           Therefore, we decided to bring you unique and fine covers, which will add freshness and spectacular beauty to your books.<br></br> We believe that school is a place of learning, creativity and adventure,<br></br> so we designed our notebooks specifically to support this exciting process.<br></br> We are excited to share with you our support in the world of studies and to <br></br>assure you that the items you purchase from us will be of high quality and completely effective in their use. <br></br>We will be happy to be your partners in your journey of thinking and success!</p>
    </div>
    </>)
};