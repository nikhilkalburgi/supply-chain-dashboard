# Supply Chain Analytics Dashboard

## Overview

The Supply Chain Analytics Dashboard is a comprehensive tool designed to help users manage and analyze procurement activities efficiently. It provides insights into procurement trends, anomalies, and detailed data analysis, making it an invaluable resource for procurement managers and analysts.

## Tech Stack

- ReactJS
- Tanstack/react-query
- React-Router-Dom
- Chart.JS
- API is simulated

## Features

- **User Authentication**: Secure login to access the dashboard.
- **Dashboard Setup**: Customize the dashboard with filters and dimensions.
- **Procurement Data Management**: Add, view, and analyze procurement data.

## User Guide

### 1. Logging In

- **Access the Login Page**: Users start by entering their credentials on the login page. Use `admin` as username and `password` as password.
- **Authentication**: Upon successful login, users are redirected to the main dashboard.

### 2. Setting Up the Dashboard

- **Navigation**: Use the navbar to navigate between different sections: Dashboard Home, Anomalies, Data Insights.
- **Filters**: Each section has specific filters accessible via the sidebar. Users can filter data by date range, region, supplier, and amount(Depends on the example data)
- **Select Dimension**: In the Data Insights section, users can choose to view data aggregated by region or supplier.

### 3. Adding Procurement Data

- **Data Entry**: Users can add new procurement activities through a form, specifying details like supplier, region, amount, and date. This can be improved to importing the csv file as well.

### 4. Analyzing

- **Trends and Anomalies**: Use interactive charts to identify trends and anomalies in procurement data.
- **Detailed Insights**: Drill down into specific data points for a more detailed analysis.

## Design Choices

### Usability

- **Intuitive Interface**: The dashboard is designed with non-experts in mind, featuring a clean layout and easy navigation.
- **Interactive Elements**: Charts and tables are interactive, allowing users to click and explore data points.

### Scalability

- **Data Handling**: The system efficiently handles increasing data volumes with caching and efficient state management.
- **User Management**: It can support multiple users with role-based access, ensuring scalability as the user base grows.

### Data Complexity

- **Insights Presentation**: Data is presented using pivot tables and filters, allowing users to explore complex datasets without being overwhelmed.
- **Visual Cues**: Use of charts and color coding to highlight key insights and anomalies.

## Accessibility

- **High Contrast and Readability**: The dashboard uses high contrast colors and readable fonts.
- **Color Variables**: Primary, secondary, and background colors are defined using CSS variables to ensure consistency and accessibility.

## Installation and Deployment

### Installation Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/nikhilkalburgi/supply-chain-dashboard.git
   cd supply-chain-dashboard
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Application**:

   ```bash
   npm start
   ```

4. **Build for Production**:

   ```bash
   npm run build
   ```

### Deployment on GitHub Pages

1. **Install `gh-pages`**:

   ```bash
   npm install gh-pages --save-dev
   ```

2. **Add Deployment Scripts**: Add the following scripts to your `package.json`:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy**:

   ```bash
   npm run deploy
   ```

4. **Access the Dashboard**: The application will be available at `https://nikhilkalburgi.github.io/supply-chain-dashboard`.

By following these steps, you can set up and deploy the Supply Chain Analytics Dashboard, providing users with a powerful tool for managing and analyzing procurement activities. Adjust the configuration and styling as needed to fit your specific requirements.

### Structure of the Example Data

The structure of the data is very simple but can expand based on needs. As of now, it has 4 fields:

1. Date
2. Supplier
3. Region
4. Amount
