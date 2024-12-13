import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { deletePurchaseApi, getPurchases } from '../api/purchasesApi';
import { useDispatch, useSelector } from 'react-redux';
import { setPurchases } from '../redux/purchaseSlice';
import { selectPurchase } from '../redux/selectedPurchaseSlice';

export const Dashboard = () => {
  const purchases = useSelector((state) => state.purchase.purchases);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.userId);
  console.log(userId)

  const goToForm = () => {
    navigate('/purchasesForm');
  };

  const editPurchase = (purchase) => {
    dispatch(selectPurchase(purchase));
    navigate('/editPurchase');
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
    <div className='space-y-10 space-x-10'>
      <p className="text-8xl">Purchases</p>
      {purchases.length > 0 ? (
        purchases.map((purchase) => (
          <div className="bg-gray-700 text-white rounded-2xl p-7 shadow-lg hover:shadow-xl space-y-4 space-x-2 size-80" key={purchase._id}>
            <p className="text-3xl">Amount: {purchase.amount}</p>
            <p className="text-3xl">Date: {new Date(purchase.date).toLocaleDateString()}</p>
            <button className="text-2xl rounded-xl" onClick={() => editPurchase(purchase)}>Edit</button>
            <button className="text-2xl rounded-xl" onClick={() => deletePurchase(purchase._id)}>Delete</button>
          </div>
        ))
      ) : (
        <div>
          <p>No purchases found</p>
        </div>
      )}
      <div>
        <button className="text-2xl rounded-xl" onClick={goToForm}>Add purchase</button>
      </div>
    </div>
  );
};
