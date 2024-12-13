import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createPurchase } from "../api/purchasesApi";
import { useSelector } from "react-redux";

export const Purchases_form = () => {

    const location = useLocation();
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const userId = useSelector((state) => state.user.userId);
    console.log(userId)

    const navigate = useNavigate();

    const addPurchase = async () => {
      
        const data = {
            amount: amount,
            date: date,
            buyer: userId
        };

        try {
           
            console.log(data)
            const response = await createPurchase(data);
        
            if (response) {
                navigate("/dashboard");
            } else {
               
                console.log("Error: No se pudo iniciar sesión.");
            }
        } catch (error) {
            console.error("Error en la solicitud de login:", error);
        }
    };

    return (
        <div>
            <p>Agregar compra</p>
            <p>Cargo</p>
            <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
            />
            <p>Fecha</p>
            <input 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
            />
            <button onClick={addPurchase}>agregar</button> 
        </div>
    );
};
