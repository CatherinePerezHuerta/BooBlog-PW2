
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DashboardLayout from '../Templates/DashboardLayout';
import Card from '../Organisms/Card'; 
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="card-container">
        <Card 
          title="usuario 1"
          text="ejemplo1"
          imgSrc="/imagenes/conecta.jpg"
          date="3 mins ago"
        />
        <Card 
          title="usuario 2"
          text="ejemplo2."
          imgSrc="/imagenes/conecta.jpg"
          date="5 mins ago"
        />
      </div>
      <div className="card-container">
        <Card 
          title="usuario 3"
          text="ejemplo3"
          imgSrc="/imagenes/conecta.jpg"
          date="3 mins ago"
        />
        <Card 
          title="usuario 4"
          text="ejemplo4"
          imgSrc="/imagenes/conecta.jpg"
          date="5 mins ago"
        />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

