import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    // Translation object for multi-language support
    const translations = {
        en: {
            title: "Advanced Farm Calculator",
            subtitle: "Estimate your farm's needs and potential profit.",
            selectCrop: "Select Crop",
            other: "Other (Custom)",
            landArea: "Land Area",
            acres: "Acres",
            hectares: "Hectares",
            location: "Location",
            sowingDate: "Sowing Date",
            costPerAcre: "Cost per Acre (₹)",
            calculate: "Calculate",
            error: {
                area: "Please enter a valid land area (a positive number).",
                custom: "Please fill out all custom crop details.",
            },
            resultsTitle: "📊 Calculation Results",
            waterRequired: "Water Required",
            timeToHarvest: "Time to Harvest",
            expectedYield: "Expected Yield",
            estimatedProfit: "Estimated Profit",
            profitBreakdown: "Profit Breakdown",
            grossProfit: "Gross Profit",
            totalCost: "Total Cost",
            netProfit: "Net Profit",
            yieldUnit: "quintals",
            yieldUnitTons: "tons",
            irrigationTitle: "💧 Irrigation & Nutrient Recommendations",
            irrigationMethod: "Recommended Irrigation Method",
            irrigationCycles: "Irrigation Cycles",
            nutrientTitle: "🧪 Nutrient Recommendations (NPK)",
            fertilizer: "Recommended Fertilizer Quantity",
            weatherTitle: "🌦 Weather & Risk Alerts",
            rainfall: "Rainfall Forecast",
            temperature: "Temperature Range",
            alertWarning: "Warning: High rainfall in the forecast. Delay irrigation to avoid crop damage.",
            waterComparison: "Water Usage Comparison (L/acre)",
            profitComparison: "Profit Comparison (₹)",
            downloadReport: "Download Report (PDF)",
            language: "Language",
            mandiPrice: "Mock Market Price",
            profitMargin: "Profit Margin",
            sowingToHarvest: "Sowing to Harvest Calendar",
            harvestDate: "Estimated Harvest Date",
            sowingWarning: "Warning: Check weather forecast before sowing."
        },
        hi: {
            title: "उन्नत कृषि कैलकुलेटर",
            subtitle: "अपनी खेत की ज़रूरतों और संभावित लाभ का अनुमान लगाएं।",
            selectCrop: "फसल चुनें",
            other: "अन्य (कस्टम)",
            landArea: "भूमि क्षेत्र",
            acres: "एकड़",
            hectares: "हेक्टेयर",
            location: "स्थान",
            sowingDate: "बुवाई की तारीख",
            costPerAcre: "प्रति एकड़ लागत (₹)",
            calculate: "गणना करें",
            error: {
                area: "कृपया एक वैध भूमि क्षेत्र (एक सकारात्मक संख्या) दर्ज करें।",
                custom: "कृपया सभी कस्टम फसल विवरण भरें।",
            },
            resultsTitle: "📊 गणना के परिणाम",
            waterRequired: "आवश्यक पानी",
            timeToHarvest: "फसल काटने का समय",
            expectedYield: "अनुमानित उपज",
            estimatedProfit: "अनुमानित लाभ",
            profitBreakdown: "लाभ का विवरण",
            grossProfit: "कुल लाभ",
            totalCost: "कुल लागत",
            netProfit: "शुद्ध लाभ",
            yieldUnit: "क्विंटल",
            yieldUnitTons: "टन",
            irrigationTitle: "💧 सिंचाई और पोषक तत्व सुझाव",
            irrigationMethod: "अनुशंसित सिंचाई विधि",
            irrigationCycles: "सिंचाई चक्र",
            nutrientTitle: "🧪 पोषक तत्व सुझाव (एनपीके)",
            fertilizer: "अनुशंसित उर्वरक मात्रा",
            weatherTitle: "🌦 मौसम और जोखिम अलर्ट",
            rainfall: "वर्षा का पूर्वानुमान",
            temperature: "तापमान सीमा",
            alertWarning: "चेतावनी: पूर्वानुमान में भारी वर्षा है। फसल को नुकसान से बचाने के लिए सिंचाई में देरी करें।",
            waterComparison: "पानी के उपयोग की तुलना (L/एकड़)",
            profitComparison: "लाभ की तुलना (₹)",
            downloadReport: "रिपोर्ट डाउनलोड करें (पीडीएफ)",
            language: "भाषा",
            mandiPrice: "बाजार मूल्य",
            profitMargin: "लाभ मार्जिन",
            sowingToHarvest: "बुवाई से कटाई का कैलेंडर",
            harvestDate: "अनुमानित कटाई की तारीख",
            sowingWarning: "चेतावनी: बुवाई से पहले मौसम का पूर्वानुमान जांचें।"
        },
    };

    // Static data for crops and locations
    const cropData = {
        wheat: { water: 4500, harvest: 120, yield: 25, unit: "quintals", irrigation: "Sprinkler/Flood", cycles: 4, npk: "120-60-40 kg/acre" },
        rice: { water: 11000, harvest: 150, yield: 30, unit: "quintals", irrigation: "Flood", cycles: 8, npk: "120-40-40 kg/acre" },
        banana: { water: 8000, harvest: 300, yield: 50, unit: "tons", irrigation: "Drip", cycles: 20, npk: "100-30-200 kg/acre" },
        corn: { water: 4000, harvest: 100, yield: 20, unit: "quintals", irrigation: "Sprinkler", cycles: 5, npk: "150-70-50 kg/acre" },
        soybean: { water: 4500, harvest: 120, yield: 22, unit: "quintals", irrigation: "Sprinkler", cycles: 4, npk: "30-80-40 kg/acre" },
    };

    const locationData = {
        'Multai, India': {
            rainfall: 'Low (0-5 mm)',
            temperature: '25-30°C',
            marketPrice: 2500
        },
        'Ludhiana, India': {
            rainfall: 'Moderate (10-15 mm)',
            temperature: '20-28°C',
            marketPrice: 2700
        },
        'Pune, India': {
            rainfall: 'High (20-30 mm)',
            temperature: '22-26°C',
            marketPrice: 2300
        },
    };

    // State management using React hooks
    const [language, setLanguage] = useState('en');
    const t = translations[language];

    const [selectedCrop, setSelectedCrop] = useState("wheat");
    const [landArea, setLandArea] = useState("");
    const [areaUnit, setAreaUnit] = useState("acres");
    const [manualLocation, setManualLocation] = useState("");
    const [sowingDate, setSowingDate] = useState("");
    const [costPerAcre, setCostPerAcre] = useState("");
    const [customCropName, setCustomCropName] = useState("");
    const [customCropValues, setCustomCropValues] = useState({ water: "", harvest: "", yield: "" });
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    // Dynamically load jspdf and html2canvas scripts
    useEffect(() => {
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = () => resolve(script);
                script.onerror = () => reject(new Error(`Script load error for ${src}`));
                document.head.appendChild(script);
            });
        };

        const loadLibraries = async () => {
            try {
                if (!window.jspdf) {
                    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
                }
                if (!window.html2canvas) {
                    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js");
                }
            } catch (err) {
                console.error("Failed to load PDF libraries:", err);
            }
        };

        loadLibraries();
    }, []);

    // Function to handle the calculation logic
    const handleCalculate = () => {
        if (!landArea || isNaN(landArea) || landArea <= 0) {
            setError(t.error.area);
            setResult(null);
            return;
        }

        let waterRequired, timeToHarvest, expectedYield;
        let profitPerUnit = 2500;
        let rainfall = "N/A";
        let temperature = "N/A";

        // If manual location matches a known location, use its data
        if (locationData[manualLocation]) {
            profitPerUnit = locationData[manualLocation].marketPrice || 2500;
            rainfall = locationData[manualLocation].rainfall;
            temperature = locationData[manualLocation].temperature;
        }

        const currentCrop = selectedCrop === "other"
            ? {
                water: parseFloat(customCropValues.water) || 0,
                harvest: parseFloat(customCropValues.harvest) || 0,
                yield: parseFloat(customCropValues.yield) || 0,
                unit: t.yieldUnit,
                irrigation: "Manual",
                cycles: "Varies",
                npk: "Varies"
            }
            : cropData[selectedCrop];

        if (!currentCrop || (selectedCrop === "other" && (!customCropName || !customCropValues.water || !customCropValues.harvest || !customCropValues.yield))) {
            setError(t.error.custom);
            setResult(null);
            return;
        }

        const areaInAcres = areaUnit === "hectares" ? landArea * 2.47105 : landArea;

        waterRequired = areaInAcres * currentCrop.water;
        timeToHarvest = currentCrop.harvest;
        expectedYield = areaInAcres * currentCrop.yield;

        const totalProduction = expectedYield;
        const totalCost = areaInAcres * (parseFloat(costPerAcre) || 0);
        const grossProfit = totalProduction * profitPerUnit;
        const netProfit = grossProfit - totalCost;
        const profitMargin = totalCost > 0 ? (netProfit / grossProfit) * 100 : 0;

        const harvestDate = sowingDate ? new Date(new Date(sowingDate).getTime() + timeToHarvest * 24 * 60 * 60 * 1000).toDateString() : 'N/A';

        setResult({
            waterRequired: waterRequired.toFixed(2),
            timeToHarvest,
            expectedYield: expectedYield.toFixed(2),
            totalProduction: totalProduction.toFixed(2),
            grossProfit: grossProfit.toLocaleString('en-IN'),
            totalCost: totalCost.toLocaleString('en-IN'),
            netProfit: netProfit.toLocaleString('en-IN'),
            profitMargin: profitMargin.toFixed(2),
            yieldUnit: currentCrop.unit,
            irrigation: currentCrop.irrigation,
            cycles: currentCrop.cycles,
            npk: currentCrop.npk,
            harvestDate,
            marketPrice: profitPerUnit.toLocaleString('en-IN'),
            location: manualLocation,
            rainfall,
            temperature,
        });
        setError("");
    };

    // Function to handle PDF report generation
    const handleDownloadReport = () => {
        if (!window.jspdf || !window.html2canvas) {
            console.error("PDF libraries not loaded yet.");
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        doc.setFontSize(20);
        doc.text(t.title, 10, 20);
        doc.setFontSize(12);
        doc.text("Report Date: " + new Date().toLocaleDateString(), 10, 30);
        
        let y = 45;
        const addText = (label, value) => {
            doc.text(`${label}: ${value}`, 10, y);
            y += 7;
        };

        addText("Crop", selectedCrop);
        addText("Land Area", `${landArea} ${areaUnit}`);
    addText("Location", manualLocation);
        addText("Sowing Date", sowingDate || "N/A");
        
        y += 10;
        doc.setFontSize(16);
        doc.text(t.resultsTitle, 10, y);
        y += 10;
        doc.setFontSize(12);
        
        if (result) {
            addText(t.waterRequired, `${result.waterRequired} L`);
            addText(t.timeToHarvest, `${result.timeToHarvest} days`);
            addText(t.harvestDate, result.harvestDate);
            addText(t.expectedYield, `${result.expectedYield} ${result.yieldUnit}`);
            addText(t.estimatedProfit, `₹${result.netProfit}`);
        }

        doc.save("FarmReport.pdf");
    };

    // Render the main application UI
    return (
        <div className="min-h-screen py-12 px-4 flex flex-col items-center justify-center font-['Inter']">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-green-700 mb-2">
                        🌱 {t.title}
                    </h1>
                    <p className="text-gray-500">
                        {t.subtitle}
                    </p>
                </div>

                {/* Language Selection */}
                <div className="flex justify-end">
                    <label className="text-gray-700 mr-2">{t.language}:</label>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="border border-gray-300 rounded-md px-2 py-1"
                    >
                        <option value="en">English</option>
                        <option value="hi">हिंदी</option>
                    </select>
                </div>

                {/* User Input Section */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-semibold mb-2">{t.selectCrop}</label>
                        <select
                            value={selectedCrop}
                            onChange={(e) => {
                                setSelectedCrop(e.target.value);
                                setResult(null); setError("");
                            }}
                            className="bg-gray-100 border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            {Object.keys(cropData).map(key => (
                                <option key={key} value={key}>
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </option>
                            ))}
                            <option value="other">{t.other}</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-semibold mb-2">{t.landArea}</label>
                        <div className="flex bg-gray-100 border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-green-400">
                            <input
                                type="number"
                                placeholder="Enter area"
                                value={landArea}
                                onChange={(e) => setLandArea(e.target.value)}
                                className="w-full p-3 bg-transparent text-gray-800 focus:outline-none"
                            />
                            <select
                                value={areaUnit}
                                onChange={(e) => setAreaUnit(e.target.value)}
                                className="bg-gray-200 p-3 text-gray-700 border-l border-gray-300 focus:outline-none"
                            >
                                <option value="acres">{t.acres}</option>
                                <option value="hectares">{t.hectares}</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-semibold mb-2">{t.location}</label>
                        <input
                            type="text"
                            placeholder="Enter your location manually"
                            value={manualLocation}
                            onChange={e => { setManualLocation(e.target.value); setResult(null); setError(""); }}
                            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-semibold mb-2">{t.sowingDate}</label>
                        <input
                            type="date"
                            value={sowingDate}
                            onChange={(e) => setSowingDate(e.target.value)}
                            className="bg-gray-100 border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>
                    <div className="md:col-span-2 flex flex-col">
                        <label className="text-gray-700 font-semibold mb-2">{t.costPerAcre}</label>
                        <input
                            type="number"
                            placeholder="e.g. 50000"
                            value={costPerAcre}
                            onChange={(e) => setCostPerAcre(e.target.value)}
                            className="bg-gray-100 border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>
                </div>

                {/* Custom Crop Inputs */}
                {selectedCrop === "other" && (
                    <div className="bg-gray-50 rounded-lg p-4 space-y-4 border border-dashed border-gray-300">
                        <h3 className="text-lg font-bold text-gray-700">Custom Crop Details</h3>
                        <input
                            type="text"
                            placeholder="Crop Name (e.g., 'Coffee')"
                            value={customCropName}
                            onChange={(e) => setCustomCropName(e.target.value)}
                            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <div className="grid md:grid-cols-3 gap-4">
                            <input
                                type="number"
                                placeholder="Water (L/acre)"
                                value={customCropValues.water}
                                onChange={(e) => setCustomCropValues({ ...customCropValues, water: e.target.value })}
                                className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <input
                                type="number"
                                placeholder="Harvest (days)"
                                value={customCropValues.harvest}
                                onChange={(e) => setCustomCropValues({ ...customCropValues, harvest: e.target.value })}
                                className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <input
                                type="number"
                                placeholder="Yield (quintals/acre)"
                                value={customCropValues.yield}
                                onChange={(e) => setCustomCropValues({ ...customCropValues, yield: e.target.value })}
                                className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                    </div>
                )}

                {error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg" role="alert">
                        <p>{error}</p>
                    </div>
                )}
                
                {/* Weather Alert */}
                {manualLocation && locationData[manualLocation] && locationData[manualLocation].rainfall.includes('High') && (
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg" role="alert">
                        <p className="font-semibold">{t.alertWarning}</p>
                    </div>
                )}
                {sowingDate && (new Date(sowingDate).getMonth() >= 6 && new Date(sowingDate).getMonth() <= 9) && (
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg mt-4" role="alert">
                        <p className="font-semibold">{t.sowingWarning}</p>
                    </div>
                )}

                <button
                    onClick={handleCalculate}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-200 transform hover:scale-105"
                >
                    {t.calculate}
                </button>

                {/* Results Display */}
                {result && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-6 space-y-6">
                        <h2 className="text-2xl font-bold text-green-800 text-center">
                            {t.resultsTitle}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                            <div className="bg-green-100 p-4 rounded-lg shadow-sm">
                                <p className="text-gray-500 text-sm">{t.waterRequired}</p>
                                <p className="text-green-700 text-xl font-bold">{result.waterRequired} L</p>
                            </div>
                            <div className="bg-green-100 p-4 rounded-lg shadow-sm">
                                <p className="text-gray-500 text-sm">{t.timeToHarvest}</p>
                                <p className="text-green-700 text-xl font-bold">{result.timeToHarvest} days</p>
                            </div>
                            <div className="bg-green-100 p-4 rounded-lg shadow-sm">
                                <p className="text-gray-500 text-sm">{t.expectedYield}</p>
                                <p className="text-green-700 text-xl font-bold">{result.expectedYield} {result.yieldUnit}</p>
                            </div>
                            <div className="bg-green-100 p-4 rounded-lg shadow-sm">
                                <p className="text-gray-500 text-sm">{t.estimatedProfit}</p>
                                <p className="text-green-700 text-xl font-bold">₹{result.netProfit}</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-green-700">{t.profitBreakdown}</h3>
                            <ul className="text-gray-700 space-y-2 text-base">
                                <li><strong>Location:</strong> {result.location}</li>
                                <li><strong>{t.sowingToHarvest}:</strong> {sowingDate} to {result.harvestDate}</li>
                                <li><strong>{t.mandiPrice}:</strong> ₹{result.marketPrice} / {selectedCrop === "banana" ? t.yieldUnitTons : t.yieldUnit} (Mock data)</li>
                                <li><strong>{t.grossProfit}:</strong> ₹{result.grossProfit}</li>
                                <li><strong>{t.totalCost}:</strong> ₹{result.totalCost}</li>
                                <li className="font-bold"><strong>{t.netProfit}:</strong> ₹{result.netProfit}</li>
                                <li><strong>{t.profitMargin}:</strong> {result.profitMargin}%</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-green-700">{t.irrigationTitle}</h3>
                            <ul className="text-gray-700 space-y-2 text-base">
                                <li><strong>{t.irrigationMethod}:</strong> {result.irrigation}</li>
                                <li><strong>{t.irrigationCycles}:</strong> {result.cycles}</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-green-700">{t.nutrientTitle}</h3>
                            <ul className="text-gray-700 space-y-2 text-base">
                                <li><strong>NPK Required:</strong> {result.npk}</li>
                                <li><strong>{t.fertilizer}:</strong> Consult with a local agri-expert for specific recommendations based on soil type.</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-green-700">{t.weatherTitle}</h3>
                            <ul className="text-gray-700 space-y-2 text-base">
                                <li><strong>{t.rainfall}:</strong> {result.rainfall}</li>
                                <li><strong>{t.temperature}:</strong> {result.temperature}</li>
                                <li><strong>Pest/Disease Alert:</strong> Low risk based on current data.</li>
                            </ul>
                        </div>
                        <div className="mt-6 space-y-4">
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">{t.waterComparison}</h3>
                            <div className="flex items-end justify-around h-32 space-x-2">
                                {Object.entries(cropData).map(([key, data]) => (
                                    <div key={key} className="flex-1 flex flex-col items-center">
                                        <div
                                            style={{ height: `${(data.water / 15000) * 100}%` }}
                                            className="bg-blue-400 w-full rounded-t-lg transition-all duration-500 ease-in-out hover:bg-blue-500"
                                        ></div>
                                        <p className="mt-2 text-xs text-gray-600 font-medium text-center">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                                    </div>
                                ))}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">{t.profitComparison}</h3>
                            <div className="flex items-end justify-around h-32 space-x-2">
                                {Object.entries(cropData).map(([key, data]) => {
                                    let mockProfit = 0;
                                    if (manualLocation && locationData[manualLocation]) {
                                        mockProfit = (data.yield * 1.5 * locationData[manualLocation].marketPrice);
                                    } else {
                                        mockProfit = (data.yield * 1.5 * 2500);
                                    }
                                    return (
                                        <div key={key} className="flex-1 flex flex-col items-center">
                                            <div
                                                style={{ height: `${(mockProfit / 100000) * 100}%` }}
                                                className="bg-green-400 w-full rounded-t-lg transition-all duration-500 ease-in-out hover:bg-green-500"
                                            ></div>
                                            <p className="mt-2 text-xs text-gray-600 font-medium text-center">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <button
                            onClick={handleDownloadReport}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-200 transform hover:scale-105 mt-6"
                        >
                            {t.downloadReport}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
