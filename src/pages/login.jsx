import { useState } from "react";
import { loginApi } from "../api/usersApi"; 
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";

export const Login = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch  = useDispatch();
    const login = async () => {

        const data = {
            mail: mail,
            password: password
        };

        try {
            const response = await loginApi(data);
            if (response.data) {
                dispatch(setUser(response.data));
                navigate(`/dashboard`);
            } else {
               
                console.log("Error: No se pudo iniciar sesión.");
            }
        } catch (error) {
            console.error("Error en la solicitud de login:", error);
        }
    };

    return (
        <div className="bg-gray-700 text-white rounded-2xl p-7 shadow-lg hover:shadow-xl space-y-4 size-120 :h">
            <p className="text-5xl">Inicio de sesión</p>
            <p className="text-3xl">Correo</p>
            <input 
                className="rounded-2xl text-white"
                type="email" 
                value={mail} 
                onChange={(e) => setMail(e.target.value)}
            />
            <p className="text-3xl">Password</p>
            <input 
                className="rounded-2xl text-white"
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            /><br/>
            <button className="text-2xl rounded-xl"onClick={login}>Iniciar sesión</button> 
        </div>
    );
};
