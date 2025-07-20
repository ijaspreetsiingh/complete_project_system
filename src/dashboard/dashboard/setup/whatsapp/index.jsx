import React, { useState } from "react";

const sampleWhatsappMessages = [
  {
    id: 1,
    sender: "Chirag",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    message: "Congratulations, you are verified!",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 2,
    sender: "Jitender",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    message: "Your account verification is still pending...",
    time: "2 hours ago",
    unread: false,
  },
  // Add more sample WhatsApp messages as needed
];

function WhatsAppSetup() {
  const [deviceName, setDeviceName] = useState("");

  const handleCreateDevice = () => {
    // Logic to create device
    console.log("Device Created:", deviceName);
    alert(`Device ${deviceName} created!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold">WhatsApp Account Setup</h2>
          <p className="mt-2 text-sm text-gray-600">Create a new device for WhatsApp:</p>
          <input
            type="text"
            placeholder="Device Name"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            className="mt-4 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <button onClick={handleCreateDevice} className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Create Device
          </button>

          {/* Display Sample WhatsApp Messages */}
          <div className="mt-6">
            <h3 className="text-lg font-medium">Sample WhatsApp Messages</h3>
            <div className="divide-y divide-gray-200">
              {sampleWhatsappMessages.map((msg) => (
                <div key={msg.id} className={`p-4 ${msg.unread ? "bg-blue-50" : ""}`}>
                  <div className="flex items-start">
                    <img className="h-10 w-10 rounded-full" src={msg.avatar} alt="" />
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-900">{msg.sender}</p>
                        <p className="text-sm text-gray-500">{msg.time}</p>
                      </div>
                      <p className="text-sm text-gray-500 truncate">{msg.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsAppSetup;