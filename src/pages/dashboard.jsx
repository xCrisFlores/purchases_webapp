import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { deletePurchaseApi, getPurchases } from '../api/purchasesApi';

export const Dashboard = () => {
    
    const location = useLocation();
    const [purchases, setPurchases] = useState([]);
    const navigate = useNavigate();
    const { userId } = location.state; 

    const goToForm = () => {
        navigate("/purchasesForm", { state: { userId } });
    };

    const editPurchase = (_id) => {
        navigate("/editPurchase", { state: { purchase: _id, userId } });
    };

    const deletePurchase = async (_id) =>{

        try {
            await deletePurchaseApi(_id);
        } catch (error) {
            console.error(error);
        }
        
    };

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const data = await getPurchases(userId);  
                console.log(data.data);  
                setPurchases(data.data);  
            } catch (error) {
                console.error(error);  
            }
        };

        fetchPurchases();
    }, [userId]);

    return (
        <div>
            <p>Purchases</p>
            {purchases.length > 0 ? (
                purchases.map((purchase) => (
                    <div key={purchase._id}>
                        <p>Amount: {purchase.amount}</p>
                        <p>Date: {new Date(purchase.date).toLocaleDateString()}</p>
                        <button onClick={() => editPurchase(purchase._id)}>Edit</button>
                        <button onClick={() => deletePurchase(purchase._id)}>Delete</button>
                    </div>
                ))
            ) : (
                <div>
                    <p>No purchases found</p>
                </div>
            )}
            <div>
                <button onClick={goToForm}>Add purchase</button>
            </div>
        </div>
    );
};
