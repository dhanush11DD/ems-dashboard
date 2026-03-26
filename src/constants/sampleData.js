// Sample data with multiple ATM sites for dynamic switching
const sampleData = [
  {
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
  },
  {
    "variant_id": 2,
    "location": {
      "atm_id": "ATM-DEL-CP-042",
      "address": "Block A, Connaught Place, New Delhi - 110001"
    },
    "bank_details": {
      "bank_name": "HDFC Bank"
    },
    "service_provider": {
      "company_name": "PowerGrid ATM Services"
    },
    "contacts": {
      "regional_manager": {
        "name": "Anita Verma",
        "contact_number": "+91-9988776655"
      },
      "channel_manager": {
        "name": "Suresh Mehta",
        "contact_number": "+91-9988776656"
      }
    },
    "site_status": {
      "overall_status": "online",
      "uptime_percentage": 97.5,
      "device_health": "good"
    },
    "power_monitoring": {
      "power_type": "three_phase",
      "input_voltage": {
        "red_phase": { "voltage": 228.3 },
        "yellow_phase": { "voltage": 231.0 },
        "blue_phase": { "voltage": 225.7 }
      },
      "input_current": {
        "red_phase": { "current": 10.2 },
        "yellow_phase": { "current": 9.8 },
        "blue_phase": { "current": 10.5 }
      },
      "earth_voltage": {
        "value": 5.1,
        "status": "warning"
      }
    },
    "atm_status": {
      "operational_status": "running",
      "transactions_today": 412
    },
    "air_conditioning": {
      "ac_units": [
        { "ac_id": "AC1", "status": "running", "health": "good", "current_temperature": 22.0 },
        { "ac_id": "AC2", "status": "running", "health": "excellent", "current_temperature": 22.5 }
      ],
      "room_temperature": 22.3
    },
    "ups_system": {
      "status": "online",
      "battery_charge": 88,
      "output_ac": { "voltage": 228.0 },
      "output_dc": { "voltage": 47.8 },
      "load_percentage": 62
    },
    "current_power_source": "raw_power"
  },
  {
    "variant_id": 3,
    "location": {
      "atm_id": "ATM-BLR-KOR-019",
      "address": "MG Road, Koramangala, Bengaluru, Karnataka - 560034"
    },
    "bank_details": {
      "bank_name": "ICICI Bank"
    },
    "service_provider": {
      "company_name": "TechVault Systems Ltd"
    },
    "contacts": {
      "regional_manager": {
        "name": "Priya Nair",
        "contact_number": "+91-9123456789"
      },
      "channel_manager": {
        "name": "Karthik Reddy",
        "contact_number": "+91-9123456790"
      }
    },
    "site_status": {
      "overall_status": "offline",
      "uptime_percentage": 78.2,
      "device_health": "error"
    },
    "power_monitoring": {
      "power_type": "three_phase",
      "input_voltage": {
        "red_phase": { "voltage": 0 },
        "yellow_phase": { "voltage": 0 },
        "blue_phase": { "voltage": 0 }
      },
      "input_current": {
        "red_phase": { "current": 0 },
        "yellow_phase": { "current": 0 },
        "blue_phase": { "current": 0 }
      },
      "earth_voltage": {
        "value": 0,
        "status": "offline"
      }
    },
    "atm_status": {
      "operational_status": "error",
      "transactions_today": 53
    },
    "air_conditioning": {
      "ac_units": [
        { "ac_id": "AC1", "status": "error", "health": "error", "current_temperature": 38.5 },
        { "ac_id": "AC2", "status": "error", "health": "error", "current_temperature": 39.1 }
      ],
      "room_temperature": 38.8
    },
    "ups_system": {
      "status": "offline",
      "battery_charge": 12,
      "output_ac": { "voltage": 0 },
      "output_dc": { "voltage": 11.2 },
      "load_percentage": 0
    },
    "current_power_source": "battery_backup"
  },
  {
    "variant_id": 4,
    "location": {
      "atm_id": "ATM-CHN-TNR-007",
      "address": "Anna Salai, T Nagar, Chennai, Tamil Nadu - 600017"
    },
    "bank_details": {
      "bank_name": "Axis Bank"
    },
    "service_provider": {
      "company_name": "SecureATM Solutions Pvt Ltd"
    },
    "contacts": {
      "regional_manager": {
        "name": "Venkatesh Iyer",
        "contact_number": "+91-9445566778"
      },
      "channel_manager": {
        "name": "Lakshmi Sundaram",
        "contact_number": "+91-9445566779"
      }
    },
    "site_status": {
      "overall_status": "online",
      "uptime_percentage": 95.3,
      "device_health": "warning"
    },
    "power_monitoring": {
      "power_type": "three_phase",
      "input_voltage": {
        "red_phase": { "voltage": 212.4 },
        "yellow_phase": { "voltage": 240.8 },
        "blue_phase": { "voltage": 218.6 }
      },
      "input_current": {
        "red_phase": { "current": 12.1 },
        "yellow_phase": { "current": 7.3 },
        "blue_phase": { "current": 11.8 }
      },
      "earth_voltage": {
        "value": 8.7,
        "status": "warning"
      }
    },
    "atm_status": {
      "operational_status": "running",
      "transactions_today": 198
    },
    "air_conditioning": {
      "ac_units": [
        { "ac_id": "AC1", "status": "running", "health": "warning", "current_temperature": 27.8 },
        { "ac_id": "AC2", "status": "standby", "health": "good", "current_temperature": 28.5 }
      ],
      "room_temperature": 28.1
    },
    "ups_system": {
      "status": "online",
      "battery_charge": 74,
      "output_ac": { "voltage": 225.3 },
      "output_dc": { "voltage": 46.5 },
      "load_percentage": 78
    },
    "current_power_source": "raw_power"
  },
  {
    "variant_id": 5,
    "location": {
      "atm_id": "ATM-HYD-JBH-033",
      "address": "Jubilee Hills Road No 36, Hyderabad, Telangana - 500033"
    },
    "bank_details": {
      "bank_name": "Punjab National Bank"
    },
    "service_provider": {
      "company_name": "PowerGrid ATM Services"
    },
    "contacts": {
      "regional_manager": {
        "name": "Mohammed Faisal",
        "contact_number": "+91-9300112233"
      },
      "channel_manager": {
        "name": "Srinivas Rao",
        "contact_number": "+91-9300112234"
      }
    },
    "site_status": {
      "overall_status": "online",
      "uptime_percentage": 99.1,
      "device_health": "good"
    },
    "power_monitoring": {
      "power_type": "three_phase",
      "input_voltage": {
        "red_phase": { "voltage": 232.1 },
        "yellow_phase": { "voltage": 233.5 },
        "blue_phase": { "voltage": 231.9 }
      },
      "input_current": {
        "red_phase": { "current": 7.8 },
        "yellow_phase": { "current": 7.5 },
        "blue_phase": { "current": 7.9 }
      },
      "earth_voltage": {
        "value": 2.8,
        "status": "good"
      }
    },
    "atm_status": {
      "operational_status": "running",
      "transactions_today": 341
    },
    "air_conditioning": {
      "ac_units": [
        { "ac_id": "AC1", "status": "running", "health": "excellent", "current_temperature": 21.5 },
        { "ac_id": "AC2", "status": "standby", "health": "good", "current_temperature": 23.0 }
      ],
      "room_temperature": 22.0
    },
    "ups_system": {
      "status": "online",
      "battery_charge": 100,
      "output_ac": { "voltage": 231.0 },
      "output_dc": { "voltage": 48.0 },
      "load_percentage": 38
    },
    "current_power_source": "raw_power"
  }
];

export default sampleData;
