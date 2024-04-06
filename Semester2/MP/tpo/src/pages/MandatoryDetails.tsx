import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonAlert, IonSpinner } from '@ionic/react';
import axios from 'axios';
import { BASE_URL } from '../constants';
import { useHistory } from 'react-router-dom';

const MandatoryDetails: React.FC = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    rollNo: '',
    hscCollege: '',
    hscYearOfPassing: '',
    hscTotalMarks: '',
    hscObtainedMarks: '',
    hscPercentage: '',
    sslcCollege: '',
    sslcYearOfPassing: '',
    sslcTotalMarks: '',
    sslcObtainedMarks: '',
    sslcPercentage: '',
    cgpa: '',
    percentage: '',
    resume: ''
  });

  const [showLoader, setShowLoader] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    // Function to fetch user details from the API
    const fetchUserDetails = async () => {
      try {
        setShowLoader(true); // Show loader while fetching data
        const response = await axios.get(`${BASE_URL}user/${userId}`);
        const userData = response.data; // Assuming response.data contains user details
        setFormData(userData); // Set form data with fetched user details
        setShowLoader(false); // Hide loader after data is fetched
      } catch (error) {
        console.error('Error fetching user details:', error);
        setShowLoader(false); // Hide loader if there's an error
      }
    };

    // Call the fetchUserDetails function when the component mounts
    fetchUserDetails();
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData)
    axios.put(`${BASE_URL}user/${userId}`, formData)
      .then(response => {
        // Show success message
        setAlertMessage(response.data.message);
        setShowAlert(true);
      })
      .catch(error => {
        // Show error message
        setAlertMessage('Error updating user');
        setShowAlert(true);
        console.error('Error updating user:', error);
      });
  };
  console.log(">>><<<<",formData)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mandatory Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {showLoader ? ( // Show loader if showLoader is true
          <div className="loader-container">
            <IonSpinner name="dots" />
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Render form inputs with pre-filled values */}
            <IonItem>
              <IonLabel position="stacked">Full Name</IonLabel>
              <IonInput type="text" value={formData.fullName} onIonChange={e => setFormData({ ...formData, fullName: e.detail.value! })} required />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput type="email" value={formData.email} onIonChange={e => setFormData({ ...formData, email: e.detail.value! })} required />
            </IonItem>
          <IonItem>
            <IonLabel position="stacked">Contact</IonLabel>
            <IonInput type="tel" value={formData.contact} onIonChange={e => setFormData({ ...formData, contact: e.detail.value! })} required />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Roll No</IonLabel>
            <IonInput type="text" value={formData.rollNo} onIonChange={e => setFormData({ ...formData, rollNo: e.detail.value! })} required />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">HSC College</IonLabel>
            <IonInput type="text" value={formData.hscCollege} onIonChange={e => setFormData({ ...formData, hscCollege: e.detail.value! })} required />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">HSC Year of Passing</IonLabel>
            <IonInput type="text" value={formData.hscYearOfPassing} onIonChange={e => setFormData({ ...formData, hscYearOfPassing: e.detail.value! })} required />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">HSC Total Marks</IonLabel>
            <IonInput type="number" value={formData.hscTotalMarks} onIonChange={e => setFormData({ ...formData, hscTotalMarks: e.detail.value! })} required />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">HSC Obtained Marks</IonLabel>
            <IonInput type="number" value={formData.hscObtainedMarks} onIonChange={e => setFormData({ ...formData, hscObtainedMarks: e.detail.value! })} required />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">HSC Percentage</IonLabel>
            <IonInput type="number" value={formData.hscPercentage} onIonChange={e => setFormData({ ...formData, hscPercentage: e.detail.value! })} required />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">SSLC College</IonLabel>
            <IonInput type="text" value={formData.sslcCollege} onIonChange={e => setFormData({ ...formData, sslcCollege: e.detail.value! })} required />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">SSLC Year of Passing</IonLabel>
            <IonInput type="text" value={formData.sslcYearOfPassing} onIonChange={e => setFormData({ ...formData, sslcYearOfPassing: e.detail.value! })} required />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">SSLC Total Marks</IonLabel>
            <IonInput type="number" value={formData.sslcTotalMarks} onIonChange={e => setFormData({ ...formData, sslcTotalMarks: e.detail.value! })} required />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">SSLC Obtained Marks</IonLabel>
            <IonInput type="number" value={formData.sslcObtainedMarks} onIonChange={e => setFormData({ ...formData, sslcObtainedMarks: e.detail.value! })} required />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">SSLC Percentage</IonLabel>
            <IonInput type="number" value={formData.sslcPercentage} onIonChange={e => setFormData({ ...formData, sslcPercentage: e.detail.value! })} required />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">CGPA</IonLabel>
            <IonInput type="number" value={formData.cgpa} onIonChange={e => setFormData({ ...formData, cgpa: e.detail.value! })} required />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Percentage</IonLabel>
            <IonInput type="number" value={formData.percentage} onIonChange={e => setFormData({ ...formData, percentage: e.detail.value! })} required />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Upload Resume</IonLabel>
            <IonInput type="file" accept=".pdf,.doc,.docx" onIonChange={(e) => handleFileChange(e)} />
          </IonItem>
            <IonButton type="submit" expand="block">Submit</IonButton>
            <IonAlert
              isOpen={showAlert}
              onDidDismiss={() => history.push('/available-jobs')}
              header={'Update User'}
              message={alertMessage}
              buttons={['OK']}
            />
          </form>
        )}
      </IonContent>
    </IonPage>
  );
};

export default MandatoryDetails;
