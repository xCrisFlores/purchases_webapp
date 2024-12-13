import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { deletePurchaseApi, getPurchases } from '../api/purchasesApi';
import { useDispatch, useSelector } from 'react-redux';
import { setPurchases } from '../redux/purchaseSlice';

export const Dashboard = () => {
  const purchases = useSelector((state) => state.purchase.purchases);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = location.state;

  const goToForm = () => {
    navigate('/purchasesForm', { state: { userId } });
  };

  const editPurchase = (_id) => {
    navigate('/editPurchase', { state: { purchase: _id, userId } });
  };

  const deletePurchase = async (_id) => {
    try {
      await deletePurchaseApi(_id);
      const updatedPurchases = purchases.filter((purchase) => purchase._id !== _id);
      dispatch(setPurchases(updatedPurchases));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const data = await getPurchases(userId);
        dispatch(setPurchases(data.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchPurchases();
  }, [userId, dispatch]);

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
