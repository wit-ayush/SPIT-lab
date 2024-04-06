import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonLoading } from '@ionic/react';
import axios from 'axios';
import { BASE_URL } from '../constants';
import './AvailableJobs.css'; // Import CSS file for custom styling

const AvailableJobs: React.FC = () => {
  // State to store the fetched job data
  const [jobs, setJobs] = useState([]);
  // State to manage loading state
  const [loading, setLoading] = useState(true);

  // Function to fetch jobs from the API
  async function getJobs() {
    try {
      const response = await axios.get(`${BASE_URL}jobs`);
      setJobs(response.data.jobs);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setLoading(false); // Set loading to false even if there's an error
    }
  }

  function handleApplyButtonClick() {
    window.open("https://www.linkedin.com/jobs/search/?keywords=Software%20Engineer&location=Worldwide&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0", '_blank'); // Open the job URL in a new tab
  }

  // Fetch jobs when the component mounts
  useEffect(() => {
    getJobs();
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Available Jobs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="dark-background"> {/* Add dark background styling */}
        <IonLoading isOpen={loading} message={'Fetching jobs...'} /> {/* Show loading indicator while fetching data */}
        <IonList>
          {/* Map through the jobs array and render job items */}
          {jobs.map((job, index) => (
            <IonItem key={index} className="green-card"> {/* Add green card styling */}
              <IonLabel>
                <h2>{job?.job_title}</h2>
                <p>{job?.company_name}</p>
                <p>{job?.job_location}</p>
              </IonLabel>
              <IonButton color="success" expand="block" onClick={() => handleApplyButtonClick()}>Apply</IonButton> {/* Add Apply button */}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AvailableJobs;
