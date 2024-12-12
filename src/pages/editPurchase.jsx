import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { putPurchase } from "../api/purchasesApi";

export const Edit_purchase = () => {

    const location = useLocation();
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const { purchase, userId } = location.state || {};
    console.log(purchase);

    const navigate = useNavigate();

    const editPurchase = async () => {
      
        const data = {
            _id: purchase,
            amount: amount,
            date: date,
            buyer: userId
        };

        try {
           
            console.log(data)
            const response = await putPurchase(data);
        
            if (response) {
                navigate("/dashboard", { state: { userId: userId } });
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
            <button onClick={editPurchase}>agregar</button> 
        </div>
    );
};
