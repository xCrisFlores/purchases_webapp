import { useState } from "react";
import { loginApi } from "../api/usersApi"; 
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async () => {
      
        const data = {
            mail: mail,
            password: password
        };

        try {
           
            console.log(data)
            const response = await loginApi(data);

            if (response.data) {
                navigate(`/dashboard`, { state: { userId: response.data } });
            } else {
               
                console.log("Error: No se pudo iniciar sesión.");
            }
        } catch (error) {
            console.error("Error en la solicitud de login:", error);
        }
    };

    return (
        <div>
            <p>Inicio de sesión</p>
            <p>Correo</p>
            <input 
                type="email" 
                value={mail} 
                onChange={(e) => setMail(e.target.value)}
            />
            <p>Password</p>
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={login}>Iniciar sesión</button> 
        </div>
    );
};
