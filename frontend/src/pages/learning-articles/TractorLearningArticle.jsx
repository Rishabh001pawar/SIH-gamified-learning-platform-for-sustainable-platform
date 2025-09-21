import React from "react";

export default function TractorLearningArticle() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-green-700 text-center">
        Calibrating Your Tractor's GPS for Precision Planting
      </h1>
      <p className="text-gray-600 mb-6 text-center">Machinery | Read Time: 10 min</p>

      {/* Cover Image */}
      <img
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
        alt="Tractor"
        className="rounded-2xl mb-8 w-full h-72 object-cover shadow-lg"
      />

      {/* Introduction */}
      <p className="text-lg text-gray-700 mb-6">
        Modern tractors are more than just engines on wheels—they are sophisticated machines equipped with GPS technology, sensors, and automation systems designed to optimize farming efficiency. 
        Precision planting relies on accurate GPS calibration to ensure seeds are planted at the right depth, spacing, and location. Proper calibration maximizes crop yields, reduces waste, and saves time.
      </p>

      {/* Why GPS Calibration Matters */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">Why GPS Calibration Matters</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li><b>Consistent Row Spacing:</b> Seeds are evenly distributed across the field.</li>
        <li><b>Optimal Planting Depth:</b> Each seed receives the correct soil coverage.</li>
        <li><b>Reduced Input Costs:</b> Minimizes seed, fertilizer, and fuel waste.</li>
        <li><b>Data Accuracy:</b> Reliable field maps for monitoring and planning.</li>
      </ul>

      {/* Calibration Steps */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">Steps to Calibrate Your Tractor GPS</h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-4 mb-6">
        <li>
          <b>Prepare the Tractor and Field:</b> Ensure the tractor is clean and functional, check the planter or seeder alignment, and select a flat, open test area.
        </li>
        <li>
          <b>Update GPS and Software:</b> Make sure the firmware and software are up to date and the GPS has a strong satellite signal.
        </li>
        <li>
          <b>Check Wheel Settings:</b> Measure wheel circumference and input it into the GPS system for accurate distance calculation.
        </li>
        <li>
          <b>Align the Seeder:</b> Level and attach the planter properly, adjusting according to manufacturer specifications.
        </li>
        <li>
          <b>Conduct a Test Run:</b> Drive a short test row, monitor GPS display, and adjust steering or offsets as needed.
        </li>
        <li>
          <b>Fine-Tune for Field Conditions:</b> Consider slopes, curves, and irregular terrain, and calibrate guidance lines for consistent planting.
        </li>
      </ol>

      {/* Tips */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">Tips for Effective GPS-Based Precision Planting</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>Regularly check GPS calibration before each planting season.</li>
        <li>Monitor satellite signals; trees, buildings, or weather can interfere.</li>
        <li>Use RTK GPS for 1–2 cm accuracy.</li>
        <li>Document calibration settings for each tractor and field.</li>
      </ul>

      {/* Benefits Beyond Planting */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">Benefits Beyond Planting</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>Efficient field coverage, reducing overlap and skips.</li>
        <li>Enhanced data collection for performance tracking and rotation planning.</li>
        <li>Seamless integration with auto-steering and variable-rate application systems.</li>
      </ul>

      {/* Common Challenges */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">Common Challenges</h2>
      <table className="w-full text-left border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Challenge</th>
            <th className="border border-gray-300 px-4 py-2">Cause</th>
            <th className="border border-gray-300 px-4 py-2">Solution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Seed spacing errors</td>
            <td className="border border-gray-300 px-4 py-2">GPS misalignment</td>
            <td className="border border-gray-300 px-4 py-2">Recalibrate GPS, check planter</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">Overlapping rows</td>
            <td className="border border-gray-300 px-4 py-2">Incorrect offsets</td>
            <td className="border border-gray-300 px-4 py-2">Adjust software and implement settings</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Poor signal</td>
            <td className="border border-gray-300 px-4 py-2">Trees, buildings, or weather</td>
            <td className="border border-gray-300 px-4 py-2">Move to open area, use RTK or correction services</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">Uneven depth</td>
            <td className="border border-gray-300 px-4 py-2">Planter misalignment</td>
            <td className="border border-gray-300 px-4 py-2">Check and level planting mechanism</td>
          </tr>
        </tbody>
      </table>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold mb-2 mt-6 text-green-700">Conclusion</h2>
      <p className="text-gray-700 mb-6">
        GPS technology has transformed modern farming, making precision planting more efficient, accurate, and productive. 
        Proper calibration ensures seeds are planted correctly, reducing waste and boosting yields. By following these steps, farmers can fully harness the potential of GPS-equipped tractors for smarter, data-driven agriculture.
      </p>
    </div>
  );
}
