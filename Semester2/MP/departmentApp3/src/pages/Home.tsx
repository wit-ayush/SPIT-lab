// src/pages/Home.tsx

import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonModal,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { information, eye, heart } from 'ionicons/icons';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalHeader, setModalHeader] = useState('');
  const [modalImage, setModalImage] = useState('');
  const [modalContent, setModalContent] = useState('');

  const openModal = (header: string, image: string, content: string) => {
    setModalHeader(header);
    setModalImage(image);
    setModalContent(content);
    setShowModal(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* College Logo and Name */}
        <IonCard>
          <IonImg src="https://www.spit.ac.in/wp-content/uploads/2021/01/LogoSPIT.png" alt="College Logo" />
          <IonCardHeader>
            <IonCardTitle>Sardar Patel Institue of Technology</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        {/* Department Name */}
        <IonCard>
          <IonCardContent>
            <h2>Department of MCA</h2>
          </IonCardContent>
        </IonCard>

        {/* College Photo */}
        <IonCard>
          <IonImg src="https://img.collegepravesh.com/2018/11/SPIT-Mumbai.jpg" alt="College Photo" />
        </IonCard>

        {/* About Us Section */}
        <IonCard onClick={() => openModal('About Us', 'https://media.istockphoto.com/id/1400739452/vector/about-us-web-header-design-icon-interconnected-symbol-of-company-profile-corporate.jpg?s=612x612&w=0&k=20&c=-zgp-xnEqh8zBEjNajlPZmDF5PXuqlXVUu7RjBf_UGU=', `Sardar Patel Institute of Technology (SPIT) stands as a beacon of excellence in the realm of technology education in Maharashtra. Established with a profound commitment to nurturing future leaders, SPIT has been a pioneer in shaping the landscape of computer science education. Our journey, which began with a vision to provide unparalleled learning experiences, has evolved into a distinguished institution known for academic rigor, innovation, and a transformative educational approach. \n ${"  "} \n

Academic Distinction:
SPIT prides itself on offering a comprehensive curriculum that blends theoretical knowledge with hands-on experience. Our faculty, comprising seasoned educators and industry experts, imparts knowledge that goes beyond textbooks, preparing students to face the challenges of a dynamic technological landscape.
\n ${"  "} \n
Innovation Hub:
At SPIT, we foster a culture of innovation. Our state-of-the-art labs, research centers, and innovation hubs provide students with the tools and resources to explore their creative potential. We believe in pushing the boundaries of conventional thinking, encouraging students to embark on projects that contribute to the technological advancement of society.
\n ${"  "} \n
Student-Centric Approach:
Our commitment to students goes beyond academics. We believe in providing a holistic learning experience that includes mentorship, career guidance, and extracurricular activities. SPIT is not just an institution; it is a community where students discover their passions, build lasting friendships, and grow into well-rounded individuals.`)}>
          <IonCardHeader>
            <IonCardTitle>About Us</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        {/* Our Vision Section */}
        <IonCard onClick={() => openModal('Our Vision', 'https://thumbs.dreamstime.com/b/our-vision-drawn-white-brick-wall-d-inscription-modern-illustation-blue-arrow-hand-icons-around-brickwall-89018617.jpg', `Leading Technological Advancements:
Our vision at SPIT is to be a trailblazer in technological advancements, both nationally and globally. We aspire to lead the way in research, innovation, and the application of cutting-edge technologies. Through our academic programs and research initiatives, we aim to contribute significantly to the ever-evolving field of computer science.

Global Impact:
We envision SPIT as a global hub for technological expertise and collaboration. By fostering international partnerships, encouraging global perspectives, and engaging in cross-cultural exchanges, we aim to prepare our students to excel in a diverse and interconnected world.

Holistic Development:
Beyond technical skills, our vision encompasses the holistic development of individuals. We strive to produce graduates who not only excel in their professional endeavors but also exhibit a strong sense of ethical responsibility, leadership qualities, and a commitment to social causes.`)}>
          <IonCardHeader>
            <IonCardTitle>Our Vision</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        {/* Our Mission Section */}
        <IonCard onClick={() => openModal('Our Mission', 'https://t4.ftcdn.net/jpg/00/96/54/53/360_F_96545306_cX6N4Fv2TTVRMKahA3aoCvxlUOGm2KkV.jpg', `Academic Excellence:
Our primary mission is to provide a world-class academic environment that promotes excellence in teaching, learning, and research. Through continuous curriculum enhancement and faculty development, we ensure that our students receive the highest quality education.

Research and Innovation Hub:
We are on a mission to establish SPIT as a prominent research and innovation hub. We encourage faculty and students to engage in impactful research, collaborate with industry partners, and contribute to breakthroughs that address real-world challenges.

Industry Integration:
To bridge the gap between academia and industry, we are committed to providing students with practical exposure to the professional world. Industry internships, guest lectures, and collaborative projects with leading companies are integral parts of our mission to produce industry-ready professionals.

Ethical Leadership:
We are dedicated to developing ethical leaders who uphold integrity, social responsibility, and sustainability. Our mission is to instill a strong sense of ethics, professionalism, and a commitment to making a positive impact on society.

As we embark on our mission, SPIT remains steadfast in its dedication to shaping the future of technology and empowering individuals to lead with knowledge, integrity, and a global perspective.`)}>
          <IonCardHeader>
            <IonCardTitle>Our Mission</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        {/* Modal for About Us, Our Vision, Our Mission */}
        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonCard>
            <IonCardHeader>
              <IonTitle>{modalHeader}</IonTitle>
            </IonCardHeader>
            <IonImg src={modalImage} alt={`${modalHeader} Image`} />
            <IonCardContent>{modalContent}</IonCardContent>
            <IonButton expand="full" onClick={() => setShowModal(false)}>
              Close
            </IonButton>
          </IonCard>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
