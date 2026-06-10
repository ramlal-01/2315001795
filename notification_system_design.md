# Campus Notifications Microservice - Stage 2

## Overview

This project is a React-based frontend application developed for the Campus Notifications Platform.

The application consumes the provided Notifications API and displays:

- All Notifications
- Priority Notifications
- Notification Type Filtering
- Pagination Support
- Responsive UI for Desktop and Mobile Devices

Material UI has been used for building the interface as required.

---

## Features

### All Notifications Page

Displays notifications fetched from:

http://4.224.186.213/evaluation-service/notifications

Features:

- Paginated notification listing
- Notification type filtering
- Responsive card layout
- Error handling
- Loading states

Supported notification types:

- Placement
- Event
- Result

---

### Priority Notifications Page

Displays the highest priority notifications based on predefined weights.

Priority Weights:

| Notification Type | Weight |
|------------------|----------|
| Placement | 3 |
| Event | 2 |
| Result | 1 |

The notifications are sorted using:

1. Priority Weight
2. Latest Timestamp

Top 10 notifications are displayed.

---

## Project Structure

src/

├── components/

│ ├── Navbar.jsx

│ └── NotificationCard.jsx

│

├── pages/

│ ├── AllNotifications.jsx

│ └── PriorityNotifications.jsx

│

├── services/

│ └── notificationService.js

│

├── utils/

│ ├── logger.js

│ └── priorityCalculator.js

│

├── App.jsx

└── main.jsx

---

## API Integration

### Base URL

http://4.224.186.213/evaluation-service

### Endpoint

GET /notifications

Supported Query Parameters:

- page
- limit
- notification_type

Example:

GET /notifications?page=1&limit=10

GET /notifications?page=1&limit=10&notification_type=Placement

---

## Logging Middleware Integration

The application integrates the custom Logging Middleware developed during the pre-test setup.

Logs are generated for:

- API request success
- API request failure
- Component rendering
- Error handling

No console-based logging is used for application events.

---

## Responsive Design

The application is designed to work on:

- Desktop
  <img width="1433" height="913" alt="image" src="https://github.com/user-attachments/assets/7f11c1a8-b90c-4ee4-b9e0-b93f5006c824" />

- Tablet
- Mobile Devices
  <img width="478" height="840" alt="image" src="https://github.com/user-attachments/assets/de9c822a-3ece-4cb9-a926-1af8daf4f4f2" />
  <img width="493" height="803" alt="image" src="https://github.com/user-attachments/assets/d2c2d034-4adc-4ce4-8e58-f91c36fbb574" />


Material UI components and responsive layouts are used throughout the application.

---

## Error Handling

Implemented handling for:

- Invalid API responses
- Unauthorized requests
- Network failures
- Empty notification lists

User-friendly messages are displayed whenever errors occur.

---

## Technologies Used

- React
- Vite
- Axios
- Material UI
- React Router DOM

---

## Running the Application

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Application URL:

```txt
http://localhost:3000
```

---

## Assumptions

- Users are already authenticated as specified in the assessment.
- Notifications are fetched only from the provided API.
- No notification data is hardcoded.
- No database storage is used.
- Priority notifications are calculated dynamically on the client side.
