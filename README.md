# Music Library App 🎵  

I developed this music library app using the MERN stack as a practice project. The application allows users to manage and rate music albums while following specific business rules for deletion restrictions.  

## Features  

### Backend  
- **RESTful API**: Provides endpoints to retrieve, add, update, and delete albums  
- **Database**: Stores album data (name, artist, release date, rating, etc.) in MongoDB  
- **Business Logic**: Prevents deletion of highly rated albums unless they have fewer than 10 ratings  
- **Unit Tests**: Ensures backend functionality and reliability  

### Frontend  
- **Album Display**: Shows albums in a responsive grid layout (up to 4 per row)  
- **Album Management**: Users can add, edit, and delete albums  
- **Ratings**: Users can rate albums on a scale of 1 to 5  
- **Album Details**: Clicking an album displays more information (large image, details)  
- **Responsive Design**: Layout gracefully adjusts to different screen sizes  
- **Web Fonts**: Uses Google Fonts for improved UI aesthetics  
- **Unit Tests**: Validates frontend functionality  

This repository contains the **backend** of the application. You can find the backend repository here: [Frontend Repository](https://github.com/bistorben/cs-interview-frontend)  
