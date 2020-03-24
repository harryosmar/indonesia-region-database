db.country.drop()
db.createCollection("country", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "code", "provinces"],
            properties: {
                name: {
                    bsonType: "string",
                    "description": "'name' must be a string and is required"
                },
                code: {
                    enum: ["AFG", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "BRN", "BGR", "BFA", "BDI", "CPV", "KHM", "CMR", "CAN", "CYM", "CAF", "TCD", "CHL", "CHN", "CXR", "CCK", "COL", "COM", "COD", "COG", "COK", "CRI", "HRV", "CUB", "CUW", "CYP", "CZE", "CIV", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "SWZ", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "PRK", "KOR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "MKD", "ROU", "RUS", "RWA", "REU", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "UMI", "USA", "URY", "UZB", "VUT", "VEN", "VNM", "VGB", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE", "ALA"],
                    "description": "'code' must be a valid 3 chars 'country code' and is required"
                },
                provinces: {
                    bsonType: "array",
                    uniqueItems: true,
                    items: {
                        bsonType: "object",
                        required: ["id", "name"],
                        properties: {
                            id: {
                                bsonType: "number",
                                description: "'provinces[i].id' must be an integer and is required"
                            },
                            name: {
                                bsonType: "string",
                                "description": "'provinces[i].name' must be a string and is required"
                            }
                        }
                    }
                }
            }
        }
    }
})
db.country.createIndex({"code": 1}, {unique: true})

db.country.insert({
    "name": "INDONESIA",
    "code": "IDN",
    "provinces": [
        {
            "id": 11,
            "name": "ACEH"
        },
        {
            "id": 12,
            "name": "SUMATERA UTARA"
        },
        {
            "id": 13,
            "name": "SUMATERA BARAT"
        },
        {
            "id": 14,
            "name": "RIAU"
        },
        {
            "id": 15,
            "name": "JAMBI"
        },
        {
            "id": 16,
            "name": "SUMATERA SELATAN"
        },
        {
            "id": 17,
            "name": "BENGKULU"
        },
        {
            "id": 18,
            "name": "LAMPUNG"
        },
        {
            "id": 19,
            "name": "KEPULAUAN BANGKA BELITUNG"
        },
        {
            "id": 21,
            "name": "KEPULAUAN RIAU"
        },
        {
            "id": 31,
            "name": "DKI JAKARTA"
        },
        {
            "id": 32,
            "name": "JAWA BARAT"
        },
        {
            "id": 33,
            "name": "JAWA TENGAH"
        },
        {
            "id": 34,
            "name": "DI YOGYAKARTA"
        },
        {
            "id": 35,
            "name": "JAWA TIMUR"
        },
        {
            "id": 36,
            "name": "BANTEN"
        },
        {
            "id": 51,
            "name": "BALI"
        },
        {
            "id": 52,
            "name": "NUSA TENGGARA BARAT"
        },
        {
            "id": 53,
            "name": "NUSA TENGGARA TIMUR"
        },
        {
            "id": 61,
            "name": "KALIMANTAN BARAT"
        },
        {
            "id": 62,
            "name": "KALIMANTAN TENGAH"
        },
        {
            "id": 63,
            "name": "KALIMANTAN SELATAN"
        },
        {
            "id": 64,
            "name": "KALIMANTAN TIMUR"
        },
        {
            "id": 65,
            "name": "KALIMANTAN UTARA"
        },
        {
            "id": 71,
            "name": "SULAWESI UTARA"
        },
        {
            "id": 72,
            "name": "SULAWESI TENGAH"
        },
        {
            "id": 73,
            "name": "SULAWESI SELATAN"
        },
        {
            "id": 74,
            "name": "SULAWESI TENGGARA"
        },
        {
            "id": 75,
            "name": "GORONTALO"
        },
        {
            "id": 76,
            "name": "SULAWESI BARAT"
        },
        {
            "id": 81,
            "name": "MALUKU"
        },
        {
            "id": 82,
            "name": "MALUKU UTARA"
        },
        {
            "id": 91,
            "name": "PAPUA BARAT"
        },
        {
            "id": 94,
            "name": "PAPUA"
        }
    ]
})