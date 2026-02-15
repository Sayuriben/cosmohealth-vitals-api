export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const vitals = [
    {
      patientId: "P001",
      temperature: 36.8,
      heartRate: 75,
      bloodPressure: "120/80",
      o2Saturation: 98,
      respiratoryRate: 16,
      timestamp: "2024-02-15T10:30:00Z"
    },
    {
      patientId: "P002",
      temperature: 37.2,
      heartRate: 88,
      bloodPressure: "125/82",
      o2Saturation: 96,
      respiratoryRate: 18,
      timestamp: "2024-02-15T10:30:00Z"
    },
    {
      patientId: "P003",
      temperature: 36.9,
      heartRate: 72,
      bloodPressure: "118/79",
      o2Saturation: 99,
      respiratoryRate: 15,
      timestamp: "2024-02-15T10:30:00Z"
    }
  ];

  const path = req.url || '/';
  
  if (path === '/' || path === '/api/vitals') {
    return res.status(200).json(vitals);
  }

  const patientId = path.split('/').pop();
  const vital = vitals.find(v => v.patientId === patientId);
  
  if (vital) {
    return res.status(200).json(vital);
  }
  
  return res.status(404).json({ error: 'Not found' });
}
