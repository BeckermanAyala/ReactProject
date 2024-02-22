import {useNavigate} from "react-router-dom"


export default function Cart(){
const navigate = useNavigate();
return(
    <div>
<button onClick={()=>navigate("/HomePage")}>עמוד הבית</button>
<button onClick={()=>navigate("/Shop")}>הקולקצייה שלנו</button>
<button onClick={()=>navigate("/Login")}>צור קשר</button>
</div>
)}