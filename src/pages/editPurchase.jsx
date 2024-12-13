import { useState } from "react";
import { putPurchase } from "../api/purchasesApi";
import { useDispatch, useSelector } from "react-redux";
import { setAmount, setDate } from "../redux/selectedPurchaseSlice";
import { useNavigate } from "react-router-dom";

export const Edit_purchase = () => {
    const purchase = useSelector((state) => state.selectedPurchase); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

   
    const formattedDate = new Date(purchase.date).toISOString().split('T')[0]; 

    // Editar la compra
    const editPurchase = async () => {
        const data = {
            _id: purchase._id,
            amount: purchase.amount,
            date: purchase.date,
            buyer: purchase.buyer,
        };

        try {
            console.log(data);
            const response = await putPurchase(data);
        
            if (response) {
                navigate("/dashboard"); 
            } else {
                console.log("Error: No se pudo realizar la edición.");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    return (
        <div>
            <p>Editar compra</p>
            <p>Cargo</p>
            <input 
                type="number" 
                value={purchase.amount} 
                onChange={(e) => dispatch(setAmount(e.target.value))}
            />
            <p>Fecha</p>
            <input 
                type="date" 
                value={formattedDate} 
                onChange={(e) => dispatch(setDate(new Date(e.target.value).getTime()))} 
            />
            <button onClick={editPurchase}>Guardar cambios</button> 
        </div>
    );
};
