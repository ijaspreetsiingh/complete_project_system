import React, { useState, useEffect, useRef } from "react";
import { FiSearch, FiSettings, FiPlus, FiArchive, FiTrash2, FiSend, FiPaperclip, FiSmile, FiStar, FiInbox, FiUsers, FiBold, FiItalic, FiUnderline, FiLink, FiAlignLeft, FiAlignCenter, FiAlignRight, FiList, FiImage, FiCode, FiMail, FiChevronDown, FiArrowLeft, FiMoreVertical, FiPhone, FiVideo, FiClock, FiTag, FiUser, FiMessageSquare, FiChevronsLeft } from "react-icons/fi";
import { BsWhatsapp, BsEnvelope, BsReply, BsReplyAll, BsForward } from "react-icons/bs";
import { formatDistanceToNow } from 'date-fns';

// --- Mock Data ---
const generateInitialData = () => ({
  whatsapp: [
    {
      id: 1,
      sender: "Chirag Sharma",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      phone: "+91 98765 43210",
      email: "chirag.sharma@example.com",
      status: "Online",
      lastMessage: "Congratulations, you are verified! Please find attached your verification documents.",
      time: formatDistanceToNow(new Date(Date.now() - 3600000)) + " ago",
      unread: true,
      starred: false,
      isGroup: false,
      conversation: [
        { text: "Congratulations, you are verified! Please find attached your verification documents.", time: formatDistanceToNow(new Date(Date.now() - 3600000)) + " ago", isSent: false },
      ]
    },
    {
      id: 2,
      sender: "Jitender Kumar",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      phone: "+91 87654 32109",
      email: "jitender.k@example.com",
      status: "Last seen 2 hours ago",
      lastMessage: "Your account verification is still pending. We need additional documents to complete the process.",
      time: formatDistanceToNow(new Date(Date.now() - 7200000)) + " ago",
      unread: false,
      starred: true,
      isGroup: false,
      conversation: [
        { text: "Your account verification is still pending. We need additional documents to complete the process.", time: formatDistanceToNow(new Date(Date.now() - 7200000)) + " ago", isSent: false },
      ]
    },
    {
        id: 5,
        sender: "WA Group: Project Alpha",
        avatar: "https://placehold.co/48x48/8a2be2/ffffff?text=PA",
        phone: null,
        email: null,
        status: "5 members",
        lastMessage: "Meeting at 10 AM tomorrow to discuss Q3 strategy. Please be prepared.",
        time: formatDistanceToNow(new Date(Date.now() - 1200000)) + " ago",
        unread: true,
        starred: false,
        isGroup: true,
        conversation: [
          { text: "Meeting at 10 AM tomorrow to discuss Q3 strategy. Please be prepared.", time: formatDistanceToNow(new Date(Date.now() - 1200000)) + " ago", isSent: false },
        ]
    },
  ],
  email: [
    {
      id: 1,
      sender: "Herbalife Support",
      avatar: "https://placehold.co/48x48/22c55e/ffffff?text=H",
      email: "support@herbalife.com",
      subject: "Congratulations! Your account is verified",
      preview: "Thank you for completing the verification process. Your account is now fully active...",
      time: formatDistanceToNow(new Date(Date.now() - 7200000)) + " ago",
      unread: true,
      starred: false,
      body: `<p>Dear Customer,</p><p>Thank you for completing the verification process. Your account is now fully active with all features available.</p><p>You can now:</p><ul><li>Access all products</li><li>Place orders</li><li>View your transaction history</li></ul><p>If you have any questions, please don't hesitate to contact our support team.</p><p>Best regards,<br/>Herbalife Support Team</p>`,
      attachments: [{ type: 'document', name: 'welcome_guide.pdf', size: '1.2 MB' }]
    },
    {
      id: 2,
      sender: "Account Security",
      avatar: "https://placehold.co/48x48/f97316/ffffff?text=S",
      email: "security@notice.com",
      subject: "Your request has been received",
      preview: "We've received your password reset request. If you didn't make this request, please ignore this email...",
      time: formatDistanceToNow(new Date(Date.now() - 10800000)) + " ago",
      unread: false,
      starred: true,
      body: `<p>Hello,</p><p>We've received a request to reset your password. Click the link below to proceed:</p><p><a href="#" class="text-blue-600">Reset Password</a></p><p>If you didn't request this, please ignore this email or contact support if you have questions.</p><p>Thank you,<br/>Security Team</p>`
    },
  ]
});

// --- Components ---

const DeleteConfirmationModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in font-inter">
      <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full transform transition-all duration-300 scale-100 opacity-100 border border-gray-100 animate-scale-in">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Confirm Deletion</h3>
        <p className="text-gray-700 mb-6">Are you sure you want to delete this? This action cannot be undone.</p>
        <div className="flex justify-end space-x-3">
          <button onClick={onClose} className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 shadow-sm">Cancel</button>
          <button onClick={onConfirm} className="px-5 py-2.5 rounded-xl bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200 shadow-md">Delete</button>
        </div>
      </div>
    </div>
  );
};

const UserProfile = ({ user, onClose }) => {
    if (!user) return null;
    return (
        <div className="absolute inset-0 bg-white z-20 flex flex-col animate-slide-in-right border-l border-gray-200">
            <div className="p-4 border-b border-gray-200 flex items-center bg-gray-50">
                <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 mr-4"><FiArrowLeft className="h-6 w-6 text-gray-700" /></button>
                <h3 className="text-xl font-bold text-gray-900">Profile</h3>
            </div>
            <div className="flex-grow overflow-y-auto p-6 text-center">
                <img src={user.avatar} alt={user.sender} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg border-4 border-white" />
                <h2 className="text-2xl font-bold text-gray-900">{user.sender}</h2>
                <p className="text-base text-green-600 font-semibold">{user.status}</p>
                <div className="mt-6 text-left space-y-4">
                    <div className="bg-gray-50 p-4 rounded-xl">
                        <label className="text-sm font-semibold text-gray-500">Email Address</label>
                        <p className="text-base text-gray-800">{user.email || 'Not available'}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                        <label className="text-sm font-semibold text-gray-500">Phone Number</label>
                        <p className="text-base text-gray-800">{user.phone || 'Not available'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MessageList = ({ messages, onSelect, onMarkAsRead, selectedMessageId, searchTerm, activeFilter, type, onViewProfile }) => {
  const filteredMessages = messages.filter(msg => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = msg.sender.toLowerCase().includes(searchLower) ||
                          (msg.lastMessage && msg.lastMessage.toLowerCase().includes(searchLower)) ||
                          (msg.subject && msg.subject.toLowerCase().includes(searchLower));
    
    let matchesFilter = true;
    if (activeFilter === 'starred') matchesFilter = msg.starred;
    else if (activeFilter === 'unread') matchesFilter = msg.unread;
    else if (activeFilter === 'wa_groups') matchesFilter = msg.isGroup;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="divide-y divide-gray-100 flex-grow overflow-y-auto custom-scrollbar">
      {filteredMessages.length > 0 ? filteredMessages.map(message => (
        <div key={message.id}
             className={`p-4 hover:bg-gray-50 cursor-pointer transition-all duration-200 flex items-center ${selectedMessageId === message.id ? 'bg-blue-100 border-l-4 border-blue-600' : ''} rounded-lg`}
             onClick={() => { onSelect(message); if (message.unread) onMarkAsRead(message.id); }}>
          <img onClick={(e) => { e.stopPropagation(); onViewProfile(message); }}
               className="h-11 w-11 rounded-full object-cover mr-3 flex-shrink-0 shadow-sm border border-gray-200 transform transition-transform duration-200 hover:scale-105"
               src={message.avatar} alt={message.sender}
               onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/44x44/6B7280/ffffff?text=${message.sender.charAt(0).toUpperCase()}` }} />
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center">
              <p className={`text-base font-semibold ${message.unread ? 'text-blue-800' : 'text-gray-900'} truncate`}>{message.sender}</p>
              <p className="text-xs text-gray-500 ml-2">{message.time}</p>
            </div>
            <div className="flex justify-between items-center mt-0.5">
              <p className={`text-sm ${message.unread ? 'font-semibold text-gray-900' : 'text-gray-600'} truncate`}>{type === 'whatsapp' ? message.lastMessage : message.subject}</p>
              {message.unread && <div className="ml-2 flex-shrink-0"><span className="h-2 w-2 rounded-full bg-blue-600 block shadow animate-pulse"></span></div>}
            </div>
          </div>
        </div>
      )) : <div className="p-8 text-center text-gray-500">No messages found.</div>}
    </div>
  );
};

const MessageDetail = ({ message, type, onSendMessage, onArchive, onDelete, onStar, onViewProfile }) => {
  const [replyInput, setReplyInput] = useState("");
  const [emailContent, setEmailContent] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);
  
  const emojis = ['😀', '😂', '❤️', '👍', '🙏', '🎉', '🔥', '😊', '😢', '🤔'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
        setShowEmojiPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setReplyInput("");
    setEmailContent("");
    setShowEmojiPicker(false);
  }, [message]);

  const handleSendClick = () => {
    if (type === 'whatsapp' && replyInput.trim()) {
      onSendMessage(message.id, replyInput.trim(), 'whatsapp');
      setReplyInput('');
    } else if (type === 'email' && emailContent.trim()) {
      onSendMessage(message.id, { content: emailContent }, 'email');
      setEmailContent('');
    }
  };
  
  const handleEmojiClick = (emoji) => {
    setReplyInput(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  if (!message) {
    return (
      <div className="bg-white rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center shadow-lg border border-gray-100 animate-fade-in font-inter">
        <div className="w-48 h-48 mb-6 text-gray-300"><FiMessageSquare size="100%" strokeWidth="0.5"/></div>
        <h3 className="mt-2 text-2xl font-bold text-gray-900">Select a conversation</h3>
        <p className="mt-2 text-base text-gray-600 mb-8">Choose a chat from the left panel to view its details.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg h-full flex flex-col border border-gray-100 animate-fade-in font-inter relative">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
        <div className="flex items-center cursor-pointer" onClick={() => onViewProfile(message)}>
          <img className="h-12 w-12 rounded-full object-cover mr-3 shadow-sm border border-gray-200" src={message.avatar} alt={message.sender} />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{message.sender}</h3>
            <p className="text-sm text-gray-500">{type === 'whatsapp' ? message.status : `From: ${message.email}`}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          {type === 'whatsapp' && <button className="p-2.5 rounded-full text-gray-600 hover:bg-gray-200" title="Call"><FiPhone /></button>}
          {type === 'whatsapp' && <button className="p-2.5 rounded-full text-gray-600 hover:bg-gray-200" title="Video Call"><FiVideo /></button>}
          <button onClick={() => onStar(message.id)} className="p-2.5 rounded-full text-gray-600 hover:bg-gray-200" title="Star">{message.starred ? <FiStar className="fill-yellow-400 text-yellow-500"/> : <FiStar />}</button>
          <button onClick={() => onArchive(message.id)} className="p-2.5 rounded-full text-gray-600 hover:bg-gray-200" title="Archive"><FiArchive /></button>
          <button onClick={() => onDelete(message.id)} className="p-2.5 rounded-full text-gray-600 hover:bg-gray-200" title="Delete"><FiTrash2 /></button>
        </div>
      </div>
      
      <div className="p-6 flex-grow overflow-y-auto bg-gray-50 custom-scrollbar">
        {type === 'whatsapp' ? (
          <div className="space-y-4">
            {message.conversation.map((msg, index) => (
              <div key={index} className={`flex ${msg.isSent ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-xl shadow-md ${msg.isSent ? 'bg-blue-600 text-white animate-slide-in-right' : 'bg-white text-gray-800 animate-slide-in-left'}`}>
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.isSent ? 'text-blue-200' : 'text-gray-500'} text-right`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="prose max-w-none bg-white p-6 rounded-xl shadow-md animate-fade-in">
            <h2 className="text-2xl font-bold mb-2">{message.subject}</h2>
            <div className="flex items-center text-sm text-gray-500 border-b pb-4 mb-4">
                <p><strong>From:</strong> {message.sender} ({message.email})</p>
                <p className="ml-auto">{message.time}</p>
            </div>
            <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: message.body }} />
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-100">
        {type === 'whatsapp' ? (
          <div className="relative flex items-center space-x-2">
            {showEmojiPicker && (
              <div ref={emojiPickerRef} className="absolute bottom-16 left-0 bg-white border rounded-2xl shadow-lg p-2 grid grid-cols-5 gap-2">
                {emojis.map(emoji => <button key={emoji} onClick={() => handleEmojiClick(emoji)} className="p-2 text-2xl rounded-lg hover:bg-gray-100">{emoji}</button>)}
              </div>
            )}
            <button onClick={() => setShowEmojiPicker(p => !p)} className="p-2.5 rounded-full text-gray-600 hover:bg-gray-200" title="Emoji"><FiSmile className="h-6 w-6" /></button>
            <button className="p-2.5 rounded-full text-gray-600 hover:bg-gray-200" title="Attach"><FiPaperclip className="h-6 w-6" /></button>
            <input type="text" className="flex-grow border border-gray-300 rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Type a message..." value={replyInput} onChange={(e) => setReplyInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendClick()} />
            <button className="bg-blue-600 text-white p-2.5 rounded-full hover:bg-blue-700" onClick={handleSendClick} title="Send"><FiSend className="h-6 w-6" /></button>
          </div>
        ) : (
          <div className="space-y-4 p-4 bg-white rounded-xl shadow-inner border">
            <div className="flex items-center space-x-2 text-gray-700">
                <button className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100"><BsReply className="mr-2"/> Reply</button>
                <button className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100"><BsReplyAll className="mr-2"/> Reply All</button>
                <button className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-100"><BsForward className="mr-2"/> Forward</button>
            </div>
            <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <div className="flex flex-wrap items-center p-2 border-b bg-gray-50">
                <button className="p-2 rounded-md hover:bg-gray-200"><FiBold /></button>
                <button className="p-2 rounded-md hover:bg-gray-200"><FiItalic /></button>
                <button className="p-2 rounded-md hover:bg-gray-200"><FiUnderline /></button>
                <button className="p-2 rounded-md hover:bg-gray-200"><FiLink /></button>
                <button className="p-2 rounded-md hover:bg-gray-200"><FiImage /></button>
                <button className="p-2 rounded-md hover:bg-gray-200"><FiList /></button>
              </div>
              <textarea className="w-full p-4 resize-y min-h-[150px] focus:outline-none" placeholder="Type your reply..." value={emailContent} onChange={(e) => setEmailContent(e.target.value)}></textarea>
            </div>
            <div className="flex justify-end items-center mt-4">
                <button className="p-2.5 rounded-full text-gray-600 hover:bg-gray-200" title="Attach"><FiPaperclip/></button>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 flex items-center" onClick={handleSendClick}><FiSend className="mr-2"/> Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [activeInbox, setActiveInbox] = useState("whatsapp");
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [messages, setMessages] = useState(generateInitialData());
  const [loading, setLoading] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState(null);
  const [viewingProfile, setViewingProfile] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  }, [activeInbox]);

  const handleMarkAsRead = (id) => {
    setMessages(prev => ({
      ...prev,
      [activeInbox]: prev[activeInbox].map(msg => msg.id === id ? { ...msg, unread: false } : msg)
    }));
  };
  
  const handleSendMessage = (messageId, content) => {
    const newMessage = {
        text: content,
        time: formatDistanceToNow(new Date()) + " ago",
        isSent: true,
    };
    const updatedMessages = messages[activeInbox].map(msg => {
        if (msg.id === messageId) {
            return {
                ...msg,
                conversation: [...msg.conversation, newMessage],
                lastMessage: content,
                time: formatDistanceToNow(new Date()) + " ago",
                unread: false,
            };
        }
        return msg;
    });
    setMessages(prev => ({ ...prev, [activeInbox]: updatedMessages }));
    setSelectedMessage(prev => ({...prev, conversation: [...prev.conversation, newMessage]}));
  };

  const handleStarMessage = (id) => {
    const updatedMessages = messages[activeInbox].map(msg => 
      msg.id === id ? { ...msg, starred: !msg.starred } : msg
    );
    setMessages(prev => ({...prev, [activeInbox]: updatedMessages}));
    if (selectedMessage?.id === id) {
        setSelectedMessage(prev => ({...prev, starred: !prev.starred}));
    }
  };

  const handleDelete = (id) => {
    setMessageToDelete(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (messageToDelete) {
      setMessages(prev => ({
        ...prev,
        [activeInbox]: prev[activeInbox].filter(msg => msg.id !== messageToDelete)
      }));
      if (selectedMessage?.id === messageToDelete) setSelectedMessage(null);
      setMessageToDelete(null);
      setShowDeleteConfirm(false);
    }
  };

  const unreadCounts = {
    whatsapp: messages.whatsapp.filter(m => m.unread).length,
    email: messages.email.filter(m => m.unread).length,
  };
  const totalUnread = unreadCounts.whatsapp + unreadCounts.email;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-inter antialiased">
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scale-in { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes slide-in-left { from { transform: translateX(-20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slide-in-right { from { transform: translateX(20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-scale-in { animation: scale-in 0.3s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.3s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.3s ease-out; }
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #555; }
      `}</style>

      <header className="bg-white shadow-sm py-3 px-6 border-b border-gray-200">
        <div className="max-w-full mx-auto flex justify-end space-x-4">
          <button className="px-6 py-3 rounded-full bg-green-500 text-white font-medium shadow-md transition transform hover:scale-105 flex items-center"><FiSettings className="mr-2"/>WhatsApp Setup</button>
          <button className="px-6 py-3 rounded-full bg-blue-500 text-white font-medium shadow-md transition transform hover:scale-105 flex items-center"><FiSettings className="mr-2"/>Email Setup</button>
        </div>
      </header>

      <main className="flex-grow max-w-full mx-auto w-full flex h-[calc(100vh-80px)] p-4 gap-4">
        <div className={`bg-white border border-gray-200 flex flex-col shadow-xl rounded-2xl overflow-hidden transition-all duration-300 ${sidebarCollapsed ? 'w-20' : 'w-1/3 min-w-[350px] max-w-[450px]'}`}>
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            {!sidebarCollapsed && <h2 className="text-2xl font-bold text-gray-900">Conversations</h2>}
            <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="p-2 rounded-full hover:bg-gray-100"><FiChevronsLeft className={`transition-transform duration-300 ${sidebarCollapsed ? 'rotate-180' : ''}`} /></button>
          </div>
          
          {!sidebarCollapsed && (
            <>
              <div className="p-4 border-b border-gray-200">
                <div className="relative mb-4">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-full bg-gray-50" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div className="flex justify-around">
                    <button onClick={() => { setActiveInbox("whatsapp"); setSelectedMessage(null); }} className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeInbox === 'whatsapp' ? 'bg-green-100 text-green-700' : ''}`}><BsWhatsapp/>WhatsApp</button>
                    <button onClick={() => { setActiveInbox("email"); setSelectedMessage(null); }} className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeInbox === 'email' ? 'bg-blue-100 text-blue-700' : ''}`}><FiMail/>Email</button>
                </div>
              </div>
              <div className="p-2 flex flex-wrap gap-2 border-b border-gray-200">
                  <button onClick={() => setActiveFilter("all")} className={`px-3 py-1 text-sm rounded-full ${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>All</button>
                  <button onClick={() => setActiveFilter("unread")} className={`px-3 py-1 text-sm rounded-full flex items-center gap-1 ${activeFilter === 'unread' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Unread {totalUnread > 0 && <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">{totalUnread}</span>}</button>
                  <button onClick={() => setActiveFilter("starred")} className={`px-3 py-1 text-sm rounded-full ${activeFilter === 'starred' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Starred</button>
                  {activeInbox === 'whatsapp' && <button onClick={() => setActiveFilter("wa_groups")} className={`px-3 py-1 text-sm rounded-full ${activeFilter === 'wa_groups' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Groups</button>}
              </div>
            </>
          )}

          {loading ? (
            <div className="flex justify-center items-center flex-grow"><div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div></div>
          ) : (
            <MessageList messages={messages[activeInbox]} onSelect={setSelectedMessage} onMarkAsRead={handleMarkAsRead} selectedMessageId={selectedMessage?.id} searchTerm={searchTerm} activeFilter={activeFilter} type={activeInbox} onViewProfile={setViewingProfile} />
          )}
        </div>

        <div className="flex-grow bg-white rounded-2xl shadow-xl overflow-hidden relative">
          <MessageDetail message={selectedMessage} type={activeInbox} onSendMessage={handleSendMessage} onArchive={handleDelete} onDelete={handleDelete} onStar={handleStarMessage} onViewProfile={setViewingProfile} />
          {viewingProfile && <UserProfile user={viewingProfile} onClose={() => setViewingProfile(null)} />}
        </div>
      </main>

      <DeleteConfirmationModal show={showDeleteConfirm} onClose={() => setShowDeleteConfirm(false)} onConfirm={confirmDelete} />
    </div>
  );
}

export default App;
