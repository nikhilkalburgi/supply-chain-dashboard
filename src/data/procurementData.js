export const procurementData = [
    // { id: 1, supplier: 'Supplier A', region: 'North America', amount: 1000, date: '2023-01-01', status: 'normal' },
    // { id: 2, supplier: 'Supplier B', region: 'Europe', amount: 1500, date: '2023-01-02', status: 'normal' },
    // { id: 3, supplier: 'Supplier C', region: 'Asia', amount: 800, date: '2023-01-03', status: 'normal' },
    // { id: 4, supplier: 'Supplier D', region: 'North America', amount: 1200, date: '2023-01-04', status: 'normal' },
    // { id: 5, supplier: 'Supplier E', region: 'Europe', amount: 2000, date: '2023-01-05', status: 'anomaly' },
    // { id: 6, supplier: 'Supplier F', region: 'Asia', amount: 500, date: '2023-01-06', status: 'normal' },
    // { id: 7, supplier: 'Supplier G', region: 'North America', amount: 3000, date: '2023-01-07', status: 'anomaly' },
    // { id: 8, supplier: 'Supplier H', region: 'Europe', amount: 700, date: '2023-01-08', status: 'normal' },
    // { id: 9, supplier: 'Supplier I', region: 'Asia', amount: 2500, date: '2023-01-09', status: 'anomaly' },
    // { id: 10, supplier: 'Supplier J', region: 'North America', amount: 1100, date: '2023-01-10', status: 'normal' },
    // // Add more records to simulate a large dataset
    // { id: 11, supplier: 'Supplier K', region: 'Europe', amount: 950, date: '2023-01-11', status: 'normal' },
    // { id: 12, supplier: 'Supplier L', region: 'Asia', amount: 4000, date: '2023-01-12', status: 'anomaly' },
    // { id: 13, supplier: 'Supplier M', region: 'North America', amount: 1300, date: '2023-01-13', status: 'normal' },
    // { id: 14, supplier: 'Supplier N', region: 'Europe', amount: 1800, date: '2023-01-14', status: 'normal' },
    // { id: 15, supplier: 'Supplier O', region: 'Asia', amount: 600, date: '2023-01-15', status: 'normal' },
    // { id: 16, supplier: 'Supplier P', region: 'North America', amount: 2200, date: '2023-01-16', status: 'anomaly' },
    // { id: 17, supplier: 'Supplier Q', region: 'Europe', amount: 1400, date: '2023-01-17', status: 'normal' },
    // { id: 18, supplier: 'Supplier R', region: 'Asia', amount: 750, date: '2023-01-18', status: 'normal' },
    // { id: 19, supplier: 'Supplier S', region: 'North America', amount: 5000, date: '2023-01-19', status: 'anomaly' },
    // { id: 20, supplier: 'Supplier T', region: 'Europe', amount: 1600, date: '2023-01-20', status: 'normal' },
    // Continue adding more records as needed
  ];
  
  // Generate more records programmatically if needed
  for (let i = 1; i <= 30; i++) {
    procurementData.push({
      id: i,
      supplier: `Supplier ${String.fromCharCode(64 + (i % 4)).replace('@', 'D')}`,
      region: ['North America', 'Europe', 'Asia'][i % 3],
      amount: Math.floor(Math.random() * 5000) + 500, // Random amount between 500 and 5500
      date: `2023-01-${String(i).padStart(2, '0')}`,
      status: Math.random() > 0.5 ? 'anomaly' : 'normal', // Randomly assign anomalies
    });
  }