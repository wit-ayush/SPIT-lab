export interface Message {
  image: string;
  museumPoint: string;
  activities: string;
  timing: string;
  id: number;
  summary: string;
  detailDescription: string;
}

const messages: Message[] = [
  {
    image: 'https://i.pinimg.com/736x/65/2e/18/652e181ce66e223505c89c94f4cb633a.jpg',
    museumPoint: 'The Enchanted Gallery',
    activities: 'Art Exhibition Opening',
    timing: '9:00 AM - 10:30 AM',
    summary: 'Join us for the grand opening of our latest art exhibition!',
    detailDescription: 'The Enchanted Gallery welcomes art enthusiasts to experience the mesmerizing world of creativity. Explore a diverse collection of artworks from local and international artists. Engage in discussions with the creators and immerse yourself in the magic of artistic expression.',
    id: 0
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9oVaVOcK2N7wn5NaO1ZksnpCk0Ab2Ps_ZyakyFJ3NR23vIbnoikiF3fdE2NDkeB0ERk&usqp=CAU',
    museumPoint: 'Kids Creativity Corner',
    activities: 'Interactive Workshop: Sculpture',
    timing: '10:30 AM - 11:45 AM',
    summary: 'Hands-on sculpting workshop for young artists!',
    detailDescription: 'The Kids Creativity Corner invites children to unleash their imagination in a hands-on sculpture workshop. Our skilled instructors will guide participants in creating their own sculptures, fostering creativity and artistic expression in a fun and educational environment.',
    id: 1
  },
  {
    image: 'https://photographer.paulewilliams.com/img-get2/I0000aXywK5.pcNk/fit=1000x750/88772-87-Ferrara-Treasure-Hall-Paintings.jpg',
    museumPoint: 'Historical Treasures Hall',
    activities: 'Historical Artifacts Tour',
    timing: '11:45 AM - 2:00 PM',
    summary: 'Journey through time with our Historical Artifacts Tour!',
    detailDescription: 'Explore the richness of history in the Historical Treasures Hall. Our expert guides will take you on a captivating tour, showcasing artifacts from different eras. Gain insights into the stories behind each piece and appreciate the cultural heritage preserved in our museum.',
    id: 2
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9w1IksPb8G8WJoWqRU_lHt54Xes48T0vO224rotmRYZwWq4XP5rIg7u2tXWpxvvDJysE&usqp=CAU',
    museumPoint: 'Young Artists Studio',
    activities: 'Children’s Art Class',
    timing: '2:00 PM - 3:30 PM',
    summary: 'Nurture young talents in our Children’s Art Class!',
    detailDescription: 'The Young Artists Studio provides a nurturing environment for children to explore their artistic potential. In this art class, kids will engage in various creative activities, learning fundamental art techniques and expressing themselves through vibrant artworks.',
    id: 3
  },
  {
    image: 'https://i0.wp.com/magzoid.com/wp-content/uploads/2021/09/Mobility-Pavilion.jpg?fit=800%2C620&ssl=1',
    museumPoint: 'Architectural Wonders Pavilion',
    activities: 'Guided Architecture Tour',
    timing: '3:30 PM - 5:00 PM',
    summary: 'Discover the marvels of architecture in our guided tour!',
    detailDescription: 'Embark on a journey through architectural history at the Architectural Wonders Pavilion. Our knowledgeable guides will walk you through the evolution of architectural styles, highlighting iconic structures and their significance. A must-attend for architecture enthusiasts!',
    id: 4
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnjqvnrY2GAbFkYEsAxCTILO-mt3FTxpa0kU-kC0MXaG5pj0VDhbUG03JaFaSVd7fN2lk&usqp=CAU',
    museumPoint: 'Digital Art Showcase Zone',
    activities: 'Digital Art Showcase',
    timing: '5:00 PM - 6:15 PM',
    summary: 'Immerse yourself in the world of digital art!',
    detailDescription: 'Experience the future of art in the Digital Art Showcase Zone. This exhibition features cutting-edge digital artworks created by talented artists. Witness the fusion of technology and creativity, exploring new dimensions in the ever-evolving landscape of digital art.',
    id: 5
  },
  {
    image: 'https://www.stewartslaw.com/wp-content/uploads/2022/06/World-Culture-Day.jpg',
    museumPoint: 'Cultural Diversity Gallery',
    activities: 'Cultural Diversity Exhibition',
    timing: '6:15 PM - 7:45 PM',
    summary: 'Celebrate cultural diversity through art!',
    detailDescription: 'The Cultural Diversity Gallery is a celebration of various cultures through art. Immerse yourself in a diverse range of artworks that reflect the beauty and uniqueness of different traditions. This exhibition aims to promote understanding and appreciation of cultural diversity.',
    id: 6
  },
  {
    image: 'https://static.wixstatic.com/media/9c965c_ece7331107c94729a73de6977c08caab~mv2.jpg/v1/fit/w_2500,h_1330,al_c/9c965c_ece7331107c94729a73de6977c08caab~mv2.jpg',
    museumPoint: 'Harmony of Arts Auditorium',
    activities: 'Music and Art Fusion Event',
    timing: '7:45 PM - 9:00 PM',
    summary: 'An evening of harmonious fusion between music and art!',
    detailDescription: 'Join us for a magical evening at the Harmony of Arts Auditorium, where music and art unite in perfect harmony. Experience live performances that seamlessly blend different forms of artistic expression, creating a unique and captivating sensory experience.',
    id: 7
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Fwho0uhjUSOz8WgWS1OLmIRbVLnfKTlVhSu7tbvy1yz6S86E4VG4PF8MlbAaBnCXqzk&usqp=CAU',
    museumPoint: 'Abstract Art Symposium Hall',
    activities: 'Abstract Art Symposium',
    timing: '9:00 PM - 10:30 PM',
    summary: 'Dive into the world of abstract art and creativity!',
    detailDescription: 'The Abstract Art Symposium Hall is a haven for enthusiasts of abstract art. Engage in thought-provoking discussions, explore the diverse interpretations of abstract artworks, and gain insights from leading artists in this immersive symposium dedicated to the world of abstraction.',
    id: 8
  },
  {
    image: 'https://images.prismic.io/artsplace/a3f96326-9f93-43bd-9ad2-e99ceaa9f23f_Starry+Night+Paint+Night+Lucie+Bause+Winter+2024.jpeg?auto=compress,format&rect=0,23,607,436&w=1448&h=1040',
    museumPoint: 'Starry Canvas Workshop Area',
    activities: 'Night Sky Painting Workshop',
    timing: '10:30 PM - 12:00 AM',
    summary: 'Unleash your creativity under the starry night sky!',
    detailDescription: 'Join our Night Sky Painting Workshop in the open-air workshop area. Let the serene night sky inspire your creativity as you paint under the stars. This unique experience combines art and nature, offering a tranquil space for artistic expression.',
    id: 9
  }
];

const upcomingEvent: Message[] = [
  {
    image: 'https://i.pinimg.com/736x/65/2e/18/652e181ce66e223505c89c94f4cb633a.jpg',
    museumPoint: 'The Enchanted Gallery',
    activities: 'Art Exhibition Opening',
    timing: '9:00 AM - 10:30 AM',
    summary: 'Join us for the grand opening of our latest art exhibition!',
    detailDescription: 'The Enchanted Gallery welcomes art enthusiasts to experience the mesmerizing world of creativity. Explore a diverse collection of artworks from local and international artists. Engage in discussions with the creators and immerse yourself in the magic of artistic expression.',
    id: 0
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9oVaVOcK2N7wn5NaO1ZksnpCk0Ab2Ps_ZyakyFJ3NR23vIbnoikiF3fdE2NDkeB0ERk&usqp=CAU',
    museumPoint: 'Kids Creativity Corner',
    activities: 'Interactive Workshop: Sculpture',
    timing: '10:30 AM - 11:45 AM',
    summary: 'Hands-on sculpting workshop for young artists!',
    detailDescription: 'The Kids Creativity Corner invites children to unleash their imagination in a hands-on sculpture workshop. Our skilled instructors will guide participants in creating their own sculptures, fostering creativity and artistic expression in a fun and educational environment.',
    id: 1
  },
  {
    image: 'https://photographer.paulewilliams.com/img-get2/I0000aXywK5.pcNk/fit=1000x750/88772-87-Ferrara-Treasure-Hall-Paintings.jpg',
    museumPoint: 'Historical Treasures Hall',
    activities: 'Historical Artifacts Tour',
    timing: '11:45 AM - 2:00 PM',
    summary: 'Journey through time with our Historical Artifacts Tour!',
    detailDescription: 'Explore the richness of history in the Historical Treasures Hall. Our expert guides will take you on a captivating tour, showcasing artifacts from different eras. Gain insights into the stories behind each piece and appreciate the cultural heritage preserved in our museum.',
    id: 2
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9w1IksPb8G8WJoWqRU_lHt54Xes48T0vO224rotmRYZwWq4XP5rIg7u2tXWpxvvDJysE&usqp=CAU',
    museumPoint: 'Young Artists Studio',
    activities: 'Children’s Art Class',
    timing: '2:00 PM - 3:30 PM',
    summary: 'Nurture young talents in our Children’s Art Class!',
    detailDescription: 'The Young Artists Studio provides a nurturing environment for children to explore their artistic potential. In this art class, kids will engage in various creative activities, learning fundamental art techniques and expressing themselves through vibrant artworks.',
    id: 3
  },
  {
    image: 'https://i0.wp.com/magzoid.com/wp-content/uploads/2021/09/Mobility-Pavilion.jpg?fit=800%2C620&ssl=1',
    museumPoint: 'Architectural Wonders Pavilion',
    activities: 'Guided Architecture Tour',
    timing: '3:30 PM - 5:00 PM',
    summary: 'Discover the marvels of architecture in our guided tour!',
    detailDescription: 'Embark on a journey through architectural history at the Architectural Wonders Pavilion. Our knowledgeable guides will walk you through the evolution of architectural styles, highlighting iconic structures and their significance. A must-attend for architecture enthusiasts!',
    id: 4
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnjqvnrY2GAbFkYEsAxCTILO-mt3FTxpa0kU-kC0MXaG5pj0VDhbUG03JaFaSVd7fN2lk&usqp=CAU',
    museumPoint: 'Digital Art Showcase Zone',
    activities: 'Digital Art Showcase',
    timing: '5:00 PM - 6:15 PM',
    summary: 'Immerse yourself in the world of digital art!',
    detailDescription: 'Experience the future of art in the Digital Art Showcase Zone. This exhibition features cutting-edge digital artworks created by talented artists. Witness the fusion of technology and creativity, exploring new dimensions in the ever-evolving landscape of digital art.',
    id: 5
  },
  {
    image: 'https://www.stewartslaw.com/wp-content/uploads/2022/06/World-Culture-Day.jpg',
    museumPoint: 'Cultural Diversity Gallery',
    activities: 'Cultural Diversity Exhibition',
    timing: '6:15 PM - 7:45 PM',
    summary: 'Celebrate cultural diversity through art!',
    detailDescription: 'The Cultural Diversity Gallery is a celebration of various cultures through art. Immerse yourself in a diverse range of artworks that reflect the beauty and uniqueness of different traditions. This exhibition aims to promote understanding and appreciation of cultural diversity.',
    id: 6
  },
  {
    image: 'https://static.wixstatic.com/media/9c965c_ece7331107c94729a73de6977c08caab~mv2.jpg/v1/fit/w_2500,h_1330,al_c/9c965c_ece7331107c94729a73de6977c08caab~mv2.jpg',
    museumPoint: 'Harmony of Arts Auditorium',
    activities: 'Music and Art Fusion Event',
    timing: '7:45 PM - 9:00 PM',
    summary: 'An evening of harmonious fusion between music and art!',
    detailDescription: 'Join us for a magical evening at the Harmony of Arts Auditorium, where music and art unite in perfect harmony. Experience live performances that seamlessly blend different forms of artistic expression, creating a unique and captivating sensory experience.',
    id: 7
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Fwho0uhjUSOz8WgWS1OLmIRbVLnfKTlVhSu7tbvy1yz6S86E4VG4PF8MlbAaBnCXqzk&usqp=CAU',
    museumPoint: 'Abstract Art Symposium Hall',
    activities: 'Abstract Art Symposium',
    timing: '9:00 PM - 10:30 PM',
    summary: 'Dive into the world of abstract art and creativity!',
    detailDescription: 'The Abstract Art Symposium Hall is a haven for enthusiasts of abstract art. Engage in thought-provoking discussions, explore the diverse interpretations of abstract artworks, and gain insights from leading artists in this immersive symposium dedicated to the world of abstraction.',
    id: 8
  },
  {
    image: 'https://images.prismic.io/artsplace/a3f96326-9f93-43bd-9ad2-e99ceaa9f23f_Starry+Night+Paint+Night+Lucie+Bause+Winter+2024.jpeg?auto=compress,format&rect=0,23,607,436&w=1448&h=1040',
    museumPoint: 'Starry Canvas Workshop Area',
    activities: 'Night Sky Painting Workshop',
    timing: '10:30 PM - 12:00 AM',
    summary: 'Unleash your creativity under the starry night sky!',
    detailDescription: 'Join our Night Sky Painting Workshop in the open-air workshop area. Let the serene night sky inspire your creativity as you paint under the stars. This unique experience combines art and nature, offering a tranquil space for artistic expression.',
    id: 9
  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);

export const getUpcomingEvents = () => upcomingEvent;

export const getUpcomingEvent = (id: number) => upcomingEvent.find(m => m.id === id);
