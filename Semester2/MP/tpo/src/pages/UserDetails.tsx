import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSpinner, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import axios from 'axios';
import { BASE_URL } from '../constants';
import { useHistory } from 'react-router';

const UserDetails: React.FC = () => {
  const [userData, setUserData] = useState<any>(null); // State to store user data
  const [loading, setLoading] = useState(true); // State to control loading status
  const userId = localStorage.getItem('userId');
  const history = useHistory();

  useEffect(() => {
    // Function to fetch user details from the API
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}user/${userId}`); // Update API endpoint
        const userData = response.data; // Assuming response.data contains user details
        setUserData(userData); // Set user data state
        setLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error('Error fetching user details:', error);
        setLoading(false); // Set loading state to false if there's an error
      }
    };

    // Call the fetchUserDetails function when the component mounts
    fetchUserDetails();
  }, [userId]); // Pass userId as dependency to useEffect
  const handleLogout = () => {
    localStorage.removeItem('userId'); // Clear userId from localStorage
    history.push('/login')
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>User Details</IonTitle>
          <IonButton slot="end" onClick={handleLogout}>Logout</IonButton> {/* Add Logout button */}
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {loading ? ( // Show loader while data is loading
          <div className="loader-container">
            <IonSpinner name="dots" />
          </div>
        ) : (
          <IonList >
            {/* Display user details */}
            <IonItem>
              <IonLabel>Full Name: <h1>{userData?.fullName}</h1></IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Email: <h1>{userData?.email}</h1></IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Contact: <h1>{userData?.contact}</h1></IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Roll No: <h1>{userData?.rollNo}</h1></IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>HSC College: <h1>{userData?.hscCollege}</h1></IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>HSC Year of Passing: <h1>{userData?.hscYearOfPassing}</h1></IonLabel>
            </IonItem>
            {/* Add other user details similarly */}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default UserDetails;
