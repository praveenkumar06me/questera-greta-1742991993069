import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const SubscriptionContext = createContext();

export const PLANS = {
  FREE: {
    id: 'free',
    name: 'Free',
    price: 0,
    features: ['Basic Analytics', '5 Team Members', '1GB Storage'],
    billing: 'monthly'
  },
  PRO: {
    id: 'pro',
    name: 'Pro',
    price: 29,
    features: ['Advanced Analytics', '15 Team Members', '10GB Storage', 'Priority Support'],
    billing: 'monthly'
  },
  ENTERPRISE: {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    features: ['Custom Analytics', 'Unlimited Team Members', '100GB Storage', '24/7 Support', 'Custom Integrations'],
    billing: 'monthly'
  }
};

export const SubscriptionProvider = ({ children }) => {
  const { user } = useAuth();
  const [currentPlan, setCurrentPlan] = useState(PLANS.FREE);
  const [subscriptionStatus, setSubscriptionStatus] = useState('active');
  const [billingHistory, setBillingHistory] = useState([]);

  useEffect(() => {
    if (user) {
      // Simulate loading user's subscription data
      const storedPlan = localStorage.getItem('userPlan');
      if (storedPlan) {
        setCurrentPlan(JSON.parse(storedPlan));
      }
      
      // Simulate loading billing history
      const storedHistory = localStorage.getItem('billingHistory');
      if (storedHistory) {
        setBillingHistory(JSON.parse(storedHistory));
      }
    }
  }, [user]);

  const updateSubscription = async (newPlan) => {
    try {
      // Simulate API call to update subscription
      setCurrentPlan(newPlan);
      localStorage.setItem('userPlan', JSON.stringify(newPlan));
      
      // Add to billing history
      const payment = {
        id: Date.now(),
        date: new Date().toISOString(),
        amount: newPlan.price,
        plan: newPlan.name,
        status: 'success'
      };
      
      const updatedHistory = [payment, ...billingHistory];
      setBillingHistory(updatedHistory);
      localStorage.setItem('billingHistory', JSON.stringify(updatedHistory));
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Failed to update subscription' };
    }
  };

  const cancelSubscription = async () => {
    try {
      setSubscriptionStatus('cancelled');
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Failed to cancel subscription' };
    }
  };

  return (
    <SubscriptionContext.Provider 
      value={{
        currentPlan,
        subscriptionStatus,
        billingHistory,
        updateSubscription,
        cancelSubscription,
        plans: PLANS
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};