let typeCatData 

typeCatData = [{ type: "Appliances", category: "Microwaves"},
{ type: "Appliances", category: "Refrigerators"},
{ type: "Appliances", category: "Stoves"},
{ type: "Appliances", category: "Washers"},
{ type: "Appliances", category: "Dryers"},
{ type: "Appliances", category: "Clocks"},
{ type: "Appliances", category: "Other (Home or Commercial Type)"},
{ type: "Audio-Visual", category: "Equipment"},
{ type: "Audio-Visual", category: "Supplies"},
{ type: "Audio-Visual", category: "Accessories"},
{ type: "Audio-Visual", category: "Camcorders"},
{ type: "Audio-Visual", category: "Cameras"},
{ type: "Audio-Visual", category: "Darkroom Eq."},
{ type: "Audio-Visual", category: "Intercoms"},
{ type: "Audio-Visual", category: "Language Labs"},
{ type: "Audio-Visual", category: "Laser Disc"},
{ type: "Audio-Visual", category: "Microphones"},
{ type: "Audio-Visual", category: "Mounting Eq."},
{ type: "Audio-Visual", category: "Music Systems"},
{ type: "Audio-Visual", category: "Poster Printers"},
{ type: "Audio-Visual", category: "Proj. Lamps"},
{ type: "Audio-Visual", category: "Projectors"},
{ type: "Audio-Visual", category: "PA"},
{ type: "Audio-Visual", category: "Screens"},
{ type: "Audio-Visual", category: "Surveillance Equipment"},
{ type: "Audio-Visual", category: "Tape Recorders"},
{ type: "Audio-Visual", category: "TVs"},
{ type: "Audio-Visual", category: "Tripods"},
{ type: "Audio-Visual", category: "VCRs and Blank Media (Tapes and Cassettes)"},
{ type: "Building and Custodial", category: "All Supplies"},
{ type: "Building and Custodial", category: "Equipment and Services for Building and Facility Upkeep"},
{ type: "Construction related services", category: "Construction trades (roofing, paving, demolition)"},
{ type: "Construction related services", category: "Public Works Projects"},
{ type: "Computers", category: "Peripherals"},
{ type: "Computers", category: "Accessories and Parts"},
{ type: "Computers", category: "Cables"},
{ type: "Computers", category: "CD Drives"},
{ type: "Computers", category: "Computers"},
{ type: "Computers", category: "Displays"},
{ type: "Computers", category: "Forms"},
{ type: "Computers", category: "Ink Cart."},
{ type: "Computers", category: "Tables"},
{ type: "Computers", category: "Toner"},
{ type: "Computers", category: "Learning Systems"},
{ type: "Computers", category: "Memory"},
{ type: "Computers", category: "Mice"},
{ type: "Computers", category: "Modems"},
{ type: "Computers", category: "Multimedia"},
{ type: "Computers", category: "Network"},
{ type: "Computers", category: "Peripherals"},
{ type: "Computers", category: "Printers"},
{ type: "Computers", category: "Servers"},
{ type: "Computers", category: "Software"},
{ type: "Computers", category: "Tape Units"},
{ type: "Computers", category: "UPSs"},
{ type: "Floor Coverings", category: "Carpet"},
{ type: "Floor Coverings", category: "Tile"},
{ type: "Floor Coverings", category: "Floor Mats"},
{ type: "Floor Coverings", category: "Other"},
{ type: "Furniture", category: "All Furniture for office and general use"},
{ type: "Ground Maintenance", category: "All Supplies"},
{ type: "Ground Maintenance", category: "Equipment and Services for Exterior Building and Facility Upkeep"},
{ type: "Ground Maintenance", category: "Flags"},
{ type: "Ground Maintenance", category: "Signs"},
{ type: "Health, Safety, Fire, & Security", category: "Supplies and Equipment"},
{ type: "Health, Safety, Fire, & Security", category: "First Aid Supplies"},
{ type: "Health, Safety, Fire, & Security", category: "Metal Detectors"},
{ type: "Health, Safety, Fire, & Security", category: "Fire Extinguishers"},
{ type: "Health, Safety, Fire, & Security", category: "Fire Alarms"},
{ type: "Health, Safety, Fire, & Security", category: "Security Equipment"},
{ type: "Health, Safety, Fire, & Security", category: "Hazardous Waste Disposal (Surveillance Equipment see Audio-Visual)"},
{ type: "Incentives & Rewards", category: "Service Awards Ribbons"},
{ type: "Incentives & Rewards", category: "Plaques"},
{ type: "Incentives & Rewards", category: "Trophies"},
{ type: "Incentives & Rewards", category: "Hats"},
{ type: "Incentives & Rewards", category: "T-Shirts"},
{ type: "Incentives & Rewards", category: "Catered Meals"},
{ type: "Incentives & Rewards", category: "Short-Term Event Rental"},
{ type: "Incentives & Rewards", category: "Certificates Science"},
{ type: "Incentives & Rewards", category: "Special Ed."},
{ type: "Incentives & Rewards", category: "Vocational"},
{ type: "Incentives & Rewards", category: "Materials and Supplies (not books or furniture"},
{ type: "Medical Supplies", category: "Any medical supplies"},
{ type: "Material Handling", category: "Equipment and Supplies"},
{ type: "Material Handling", category: "Fork Lifts"},
{ type: "Material Handling", category: "Barrels"},
{ type: "Material Handling", category: "Kegs"},
{ type: "Material Handling", category: "Fastening"},
{ type: "Material Handling", category: "Packaging or Tying Equipment"},
{ type: "Material Handling", category: "Boxes"},
{ type: "Material Handling", category: "Strapping Tape"},
{ type: "Office Supplies/Equipment", category: "Copiers"},
{ type: "Office Supplies/Equipment", category: "Faxes"},
{ type: "Office Supplies/Equipment", category: "Shredders"},
{ type: "Office Supplies/Equipment", category: "Office Supplies"},
{ type: "Office Supplies/Equipment", category: "Laminating Equipment"},
{ type: "Office Supplies/Equipment", category: "Film"},
{ type: "Office Supplies/Equipment", category: "Other"},
{ type: "Postage", category: "Fees"},
{ type: "Postage", category: "Meters"},
{ type: "Postage", category: "Related Supplies"},
{ type: "Printing", category: "Any printing supplies/services"},
{ type: "Services", category: "Professional"},
{ type: "Services", category: "Advertisements"},
{ type: "Services", category: "Architectural"},
{ type: "Services", category: "Archival"},
{ type: "Services", category: "Communication"},
{ type: "Services", category: "Conferences/Seminars"},
{ type: "Services", category: "Consulting"},
{ type: "Services", category: "Counseling"},
{ type: "Services", category: "Day Care"},
{ type: "Services", category: "Food for Meetings"},
{ type: "Services", category: "Media"},
{ type: "Services", category: "Repair"},
{ type: "Telecommunication", category: "Equipment and Accessories"},
{ type: "Telecommunication", category: "Broadcasting Equipment"},
{ type: "Telecommunication", category: "Telecomm Measuring Equipment"},
{ type: "Telecommunication", category: "2-Way Radios"},
{ type: "Telecommunication", category: "Telephones"},
{ type: "Technology", category: "Components and Accessories"},
{ type: "Technology", category: "Hardware"},
{ type: "Technology", category: "Software"},
{ type: "Technology", category: "Other"},
{ type: "Tools", category: "Power Tools"},
{ type: "Tools", category: "Non-Power Tools"},
{ type: "Transportation", category: "Anything transportation related"},
{ type: "Vehicle", category: "Any Motor Vehicle"},
{ type: "Vehicle", category: "Related Parts"},
{ type: "Vehicle", category: "Supplies"},
{ type: "Vehicle", category: "Service or Equipment for Replacement/Repair"},
{ type: "Other", category: "Any product or services not listed above-please describe in detail the products and/or services you provide"}
];

typeCatData = JSON.stringify(typeCatData);
export {typeCatData}