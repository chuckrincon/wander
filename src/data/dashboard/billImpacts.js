export const usage = ['0 kWh', '10 kWh', '100 kWh', '1,000 kWh', '10,000 kWh', '100,000 kWh', '1,000,000 kWh'];

export const loadFactor = ['1.0', '0.85', '0.70', '0.55', '0.40', '0.25', '0.10'];

export const billImpacts = {
  totalBillImpact: [4, 1, 6, 2, 7, 10, 4].map(d => (d * 3.14).toFixed(2)),
  percentBillImpact: [3, 1, 4, 7, 5, 8, 2].map(d => (d * 3.14).toFixed(2)),
  loadFactor: [14, 13, 12, 10, 7, 3, 1].map(d => (d * 2.14).toFixed(2))
};
