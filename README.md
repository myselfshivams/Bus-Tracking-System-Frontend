## 🚌 Bus Tracking and Management System

### Introduction

- This project is a comprehensive Bus Tracking and Management System designed for PSIT campus. It provides various features to efficiently manage the transportation system, ensuring smooth operations and enhanced user experience.

### Features

1. **Live Tracking**: 📍 Real-time tracking of buses using GPS data allows users to know the exact location of the bus.
2. **Occupancy Monitoring**: 🚶‍♂️ Users can check the current occupancy status of the bus to plan their commute accordingly.
3. **Request System**: 🙋‍♂️ Students can raise requests if they miss their bus, facilitating better communication and assistance.
4. **Admin Panel**: 👨‍💼 Administrators can add and manage drivers and students within the system, ensuring proper organization and oversight.

### Technology Stack

- **Frontend**: React.js
- **Backend**: Golang

### How It Works

1. **Live Tracking**:
    - The driver's mobile device continuously sends GPS data to the backend server.
    - React.js frontend fetches this data and updates the user interface to display the current bus location.
2. **Occupancy Monitoring**:
    - The backend keeps track of the number of occupied seats in each bus.
    - This information is relayed to the frontend, allowing users to see the available capacity.
3. **Request System**:
    - Students can submit requests through the frontend interface.
    - Admins receive these requests and can take appropriate actions, such as notifying the driver or arranging alternative transportation.
4. **Admin Panel**:
    - Admins can access a dedicated panel to add and manage drivers and students.
    - This panel provides tools for user management, route planning, and system configuration.

### Installation

1. Clone the repository:

```terminal
git clone https://github.com/myselfshivams/Bus-Tracking-System-Frontend.git
```

2. Navigate to the project directory:

```terminal
cd bus-tracking-system-frontend // For frontend

cd bus-tracking-system-backend // For backend
```

3. Install dependencies:

```terminal
npm install // For frontend 

go mod tidy // For backend
```

4. Start the frontend and backend servers:

```terminal
npm run dev // Start React.js frontend 

go run main.go // Start Golang backend
```


### Contributors

- [Shivam](https://github.com/myselfshivams)
- [Ritik Gupta](https://github.com/ritikgupta06)
- [Sanskar Soni](https://github.com/sunscar-sony)
- [Saksham Gupta](https://github.com/Sakshamgupta110)
- [Divyanshi Sengar](https://github.com/Divyanshi0908)


### License

- This project is licensed under the MIT License.

### Support or Contact

For any inquiries or support regarding the project, feel free to [contact us](https://www.linkedin.com/in/itshivam/).

### Acknowledgments

Special thanks to [PSIT KANPUR](https://psit.ac.in/) for providing tools and support assisted in creating this Project.
