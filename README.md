#  Online Poll System (Web, Mobile, or PWA)
### **ProDev Frontend Case Study**

An interactive polling platform built with modern frontend technologies. Users can create polls, vote, and view live results with real-time updates and dynamic visualizations.

---

##  Live Demo
> link

---

##  Overview

This project focuses on building an online poll system with:

- Real-time voting updates  
- Component-driven UI  
- Dynamic data visualizations  
- Smooth and responsive user interaction  

It simulates a real-world application where performance, user experience, and frontend architecture matter.

---

##  Project Goals

### **API Integration**
- Fetch poll questions, options, and live results from an API.

### **State Management**
- Use Redux to manage global state efficiently.

### **Dynamic Visualizations**
- Implement charts to represent poll results in real-time.

---

## Technologies Used

- **React / React Native** – Component-based UI  
- **Redux / Redux Toolkit** – State management  
- **TypeScript** – Type safety & maintainability  
- **Charting Library** (e.g. Recharts) – Visualizations  
- **Tailwind CSS / Styled Components** – Styling  
- **Vercel** – Deployment  

---

## Key Features

### **1. Poll Creation & Voting**
- Create polls with customizable options  
- Vote on active polls  
- Form validation with user-friendly errors  

### **2. Real-Time Results**
- Automatically updates when votes are submitted  
- No page refresh required  

### **3. Dynamic Visualizations**
- Engaging charts  
- Responsive across devices  

### **4. Form Validation**
- Ensures complete and accurate poll creation  
- Clear error messages  

---

##  Implementation Process

##  Getting Started

### **1. Clone the repository**
```bash
git clone https://github.com/realdkd001/Project-Nexus-Frontend.git
cd poll
````

### **2. Install dependencies**

```bash
npm install
```

### **3. Run the development server**

```bash
npm run dev
```

### **4. Build for production**

```bash
npm run build
npm start
```

---

## Project Structure

```bash
src/
│── components/       # Reusable UI components
│── store/         # Redux slices
│── pages/            # Routes/screens
│── interfaces/            # TypeScript types
│── utils/            # Helper functions
│── styles/           # Global styling
```

---

##  API Endpoints (Example)

| Action        | Method | Endpoint            |
| ------------- | ------ | ------------------- |
| Get all polls | GET    | /api/polls          |
| Create poll   | POST   | /api/polls          |
| Vote on poll  | POST   | /api/polls/:id/vote |
| Poll details  | GET    | /api/polls/:id      |

---


##  Deployment

### **Vercel**

```
vercel deploy
```
---

## Evaluation Criteria

### **Functionality**

* Displays poll questions and live results
* Users can create, share, and vote

### **Code Quality**

* Clean, modular structure
* Proper Redux usage

### **User Experience**

* Responsive UI
* Smooth real-time updates

### **Version Control**

* Frequent descriptive commits
* Organized repository structure

---

##  Conclusion

This project demonstrates the ability to build a real-world, interactive polling system using React, Redux, and TypeScript. It strengthens skills in:

* Component-driven development
* State management
* UX design
* API integration
* Real-time data handling