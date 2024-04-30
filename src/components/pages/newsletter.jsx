import { useNavigate } from "react-router-dom";

export default function NewsLetter() {
    const navigate = useNavigate()
    return (
        <section><h3>Sign Up For Our Newsletter</h3>
            <button onClick={()=>{navigate("/about")}}>Sign me up for hourly updates!</button>
        </section>

    );
  };