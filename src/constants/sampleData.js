// Sample data from the JSON (using Variant 1 - Healthy Site)
const sampleData = {
  "variant_id": 1,
  "location": {
    "atm_id": "ATM-MUM-BND-001",
    "address": "Shop No 12, Bandra West, Mumbai, Maharashtra - 400050"
  },
  "bank_details": {
    "bank_name": "State Bank of India"
  },
  "service_provider": {
    "company_name": "SecureATM Solutions Pvt Ltd"
  },
  "contacts": {
    "regional_manager": {
      "name": "Rajesh Kumar Sharma",
      "contact_number": "+91-9876543210"
    },
    "channel_manager": {
      "name": "Deepak Kumar",
      "contact_number": "+91-9876543211"
    }
  },
  "site_status": {
    "overall_status": "online",
    "uptime_percentage": 99.8,
    "device_health": "excellent"
  },
  "power_monitoring": {
    "power_type": "three_phase",
    "input_voltage": {
      "red_phase": { "voltage": 235.5 },
      "yellow_phase": { "voltage": 237.2 },
      "blue_phase": { "voltage": 236.8 }
    },
    "input_current": {
      "red_phase": { "current": 8.5 },
      "yellow_phase": { "current": 8.7 },
      "blue_phase": { "current": 8.4 }
    },
    "earth_voltage": {
      "value": 3.2,
      "status": "good"
    }
  },
  "atm_status": {
    "operational_status": "running",
    "transactions_today": 287
  },
  "air_conditioning": {
    "ac_units": [
      { "ac_id": "AC1", "status": "running", "health": "good", "current_temperature": 23.5 },
      { "ac_id": "AC2", "status": "standby", "health": "good", "current_temperature": 25.2 }
    ],
    "room_temperature": 23.5
  },
  "ups_system": {
    "status": "online",
    "battery_charge": 100,
    "output_ac": { "voltage": 230.5 },
    "output_dc": { "voltage": 48.2 },
    "load_percentage": 45
  },
  "current_power_source": "raw_power"
};

export default sampleData;