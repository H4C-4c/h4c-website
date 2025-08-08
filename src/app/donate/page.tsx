// ✅ File: /src/app/donate/page.tsx

export default function DonatePage() {
  return (
    <section className="min-h-screen bg-white text-jungle py-20 px-4 font-body">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-jungle">Support Our Mission</h1>
        <p className="mb-10 text-gray-700">
          Your donation helps us empower youth, promote health, and build climate-resilient communities.
        </p>

        <div className="text-left space-y-10">
          {/* Bank Transfer Section */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-jungle">Bank Transfer</h2>
            <ul className="space-y-2 text-gray-800">
              <li><strong>Bank Name:</strong> KCB BANK</li>
              <li><strong>Account Number:</strong> 1335703845</li>
              <li><strong>Bank Code:</strong> 01</li>
              <li><strong>Branch Code:</strong> 315</li>
              <li><strong>SWIFT Code:</strong> KCBLKENX</li>
              <li><strong>Branch:</strong> Changamwe Branch</li>
            </ul>
          </div>

          {/* Mpesa Section */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-jungle">Donate via M-Pesa</h2>
            <ul className="space-y-2 text-gray-800">
              <li><strong>Paybill Number:</strong> 522533 (Lipa na KCB)</li>
              <li><strong>Account Number:</strong> 7937967</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
