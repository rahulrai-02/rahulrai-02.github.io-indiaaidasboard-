/**
 * lang-support.js
 * Multi-language Translation Support (English, Hindi, Punjabi) for IndiaAI Dashboard
 * Persists selected language in localStorage and applies changes dynamically.
 */

const translations = {
  // Common Navbar & Brand
  "Home": { "hi": "होम", "pb": "ਹੋਮ" },
  "Team": { "hi": "टीम", "pb": "ਟੀਮ" },
  "Courses": { "hi": "पाठ्यक्रम", "pb": "ਕੋਰਸ" },
  "Insights": { "hi": "अंतरदृष्टि", "pb": "ਅੰਤਰਦ੍ਰਿਸ਼ਟੀ" },
  "Gallery": { "hi": "गैलरी", "pb": "ਗੈਲਰੀ" },
  "Login": { "hi": "लॉगिन", "pb": "ਲੌਗਇਨ" },
  "Logout": { "hi": "लॉग आउट", "pb": "ਲੌਗ ਆਉਟ" },
  "About": { "hi": "हमारे बारे में", "pb": "ਸਾਡੇ ਬਾਰੇ" },
  "Training": { "hi": "प्रशिक्षण", "pb": "ਸਿਖਲਾਈ" },
  "Contact": { "hi": "संपर्क", "pb": "ਸੰਪਰਕ" },
  
  // Hero section
  "Govt. of India Initiative": { "hi": "भारत सरकार की पहल", "pb": "ਭਾਰਤ ਸਰਕਾਰ ਦੀ ਪਹਿਲ" },
  "Nationwide Coverage": { "hi": "राष्ट्रव्यापी कवरेज", "pb": "ਦੇਸ਼ ਵਿਆਪੀ ਕਵਰੇਜ" },
  "Building Bharat's": { "hi": "भारत की", "pb": "ਭਾਰਤ ਦੀ" },
  "AI Workforce": { "hi": "एआई कार्यबल का निर्माण", "pb": "ਏਆਈ ਵਰਕਫੋਰਸ ਦਾ ਨਿਰਮਾਣ" },
  "for Tomorrow": { "hi": "कल के लिए", "pb": "ਕੱਲ੍ਹ ਲਈ" },
  "IndiaAI Skill Development Initiative by NIELIT Ropar — empowering candidates with hands-on training in Artificial Intelligence, Robotics, and Digital Hardware across every state and union territory.": {
    "hi": "नाइलिट रोपड़ द्वारा इंडियाएआई कौशल विकास पहल — हर राज्य और केंद्र शासित प्रदेश में आर्टिफिशियल इंटेलिजेंस, रोबोटिक्स और डिजिटल हार्डवेयर में व्यावहारिक प्रशिक्षण के साथ उम्मीदवारों को सशक्त बनाना।",
    "pb": "ਨਾਈਲਿਟ ਰੋਪੜ ਦੁਆਰਾ ਇੰਡੀਆਏਆਈ ਹੁਨਰ ਵਿਕਾਸ ਪਹਿਲਕਦਮੀ — ਹਰੇਕ ਰਾਜ ਅਤੇ ਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼ ਵਿੱਚ ਆਰਟੀਫੀਸ਼ੀਅਲ ਇੰਟੈਲੀਜੈਂਸ, ਰੋਬੋਟਿਕਸ ਅਤੇ ਡਿਜੀਟਲ ਹਾਰਡਵੇਅਰ ਵਿੱਚ ਵਿਹਾਰਕ ਸਿਖਲਾਈ ਦੇ ਨਾਲ ਉਮੀਦਵਾਰਾਂ ਨੂੰ ਸ਼ਕਤੀਮਾਨ ਕਰਨਾ।"
  },
  "View Insights": { "hi": "डेटा देखें", "pb": "ਵੇਰਵੇ ਦੇਖੋ" },
  "Program Gallery": { "hi": "कार्यक्रम गैलरी", "pb": "ਪ੍ਰੋਗਰਾਮ ਗੈਲਰੀ" },
  
  // Floating cards
  "Candidates Trained": { "hi": "प्रशिक्षित उम्मीदवार", "pb": "ਸਿਖਲਾਈ ਪ੍ਰਾਪਤ ਉਮੀਦਵਾਰ" },
  "Across India": { "hi": "पूरे भारत में", "pb": "ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ" },
  "Certification Rate": { "hi": "प्रमाणन दर", "pb": "ਸਰਟੀਫਿਕੇਸ਼ਨ ਦਰ" },
  "Industry Recognized": { "hi": "उद्योग मान्यता प्राप्त", "pb": "ਉਦਯੋਗ ਦੁਆਰਾ ਮਾਨਤਾ ਪ੍ਰਾਪਤ" },

  // Stats Bar Labels
  "Total Candidates": { "hi": "कुल उम्मीदवार", "pb": "ਕੁੱਲ ਉਮੀਦਵਾਰ" },
  "Training Batches": { "hi": "प्रशिक्षण बैच", "pb": "ਸਿਖਲਾਈ ਬੈਚ" },
  "States & UTs": { "hi": "राज्य और केंद्र शासित प्रदेश", "pb": "ਰਾਜ ਅਤੇ ਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼" },
  "Certified / Passed": { "hi": "प्रमाणित / उत्तीर्ण", "pb": "ਸਰਟੀਫਾਈਡ / ਪਾਸ" },
  "LIVE": { "hi": "लाइव", "pb": "ਲਾਈਵ" },

  // Coordinators Section
  "Leadership": { "hi": "नेतृत्व", "pb": "ਲੀਡਰਸ਼ਿਪ" },
  "Program Coordinators": { "hi": "कार्यक्रम समन्वयक", "pb": "ਪ੍ਰੋਗਰਾਮ ਕੋਆਰਡੀਨੇਟਰ" },
  "Experienced professionals steering the IndiaAI mission with academic rigor and industry expertise.": {
    "hi": "शैक्षणिक कठोरता और उद्योग विशेषज्ञता के साथ इंडियाएआई मिशन का संचालन करने वाले अनुभवी पेशेवर।",
    "pb": "ਅਕਾਦਮਿਕ ਕਠੋਰਤਾ ਅਤੇ ਉਦਯੋਗ ਦੀ ਮੁਹਾਰਤ ਦੇ ਨਾਲ ਇੰਡੀਆਏਆਈ ਮਿਸ਼ਨ ਦਾ ਸੰਚਾਲਨ ਕਰਨ ਵਾਲੇ ਤਜਰਬੇਕਾਰ ਪੇਸ਼ੇਵਰ।"
  },
  "Head Coordinator": { "hi": "प्रधान समन्वयक", "pb": "ਮੁੱਖ ਕੋਆਰਡੀਨੇਟਰ" },
  "NIELIT Training Specialist": { "hi": "नाइलिट प्रशिक्षण विशेषज्ञ", "pb": "ਨਾਈਲਿਟ ਸਿਖਲਾਈ ਮਾਹਰ" },
  "Leading overall training operations and curriculum delivery across all centres, ensuring quality standards and candidate outcomes.": {
    "hi": "गुणवत्ता मानकों और उम्मीदवारों के परिणामों को सुनिश्चित करते हुए, सभी केंद्रों में समग्र प्रशिक्षण संचालन और पाठ्यक्रम वितरण का नेतृत्व करना।",
    "pb": "ਸਾਰੇ ਕੇਂਦਰਾਂ ਵਿੱਚ ਸਮੁੱਚੀ ਸਿਖਲਾਈ ਕਾਰਵਾਈਆਂ ਅਤੇ ਪਾਠਕ੍ਰਮ ਦੀ ਡਿਲਿਵਰੀ ਦੀ ਅਗਵਾਈ ਕਰਨਾ, ਗੁਣਵੱਤਾ ਦੇ ਮਿਆਰ ਅਤੇ ਉਮੀਦਵਾਰਾਂ ਦੇ ਨਤੀਜੇ ਯਕੀਨੀ ਬਣਾਉਣਾ।"
  },
  "Training Operations": { "hi": "प्रशिक्षण संचालन", "pb": "ਸਿਖਲਾਈ ਸੰਚਾਲਨ" },
  "Quality Assurance": { "hi": "गुणवत्ता आश्वासन", "pb": "ਗੁਣਵੱਤਾ ਭਰੋਸਾ" },

  "Co-Head Coordinator": { "hi": "सह-प्रधान समन्वयक", "pb": "ਸਹਿ-ਮੁੱਖ ਕੋਆਰਡੀਨੇਟਰ" },
  "Scientist 'D', NIELIT": { "hi": "वैज्ञानिक 'डी', नाइलिट", "pb": "ਵਿਗਿਆਨੀ 'ਡੀ', ਨਾਈਲਿਟ" },
  "Driving technical research, AI lab infrastructure, and industry partnerships to bridge academia and real-world applications.": {
    "hi": "अकादमिक और वास्तविक दुनिया के अनुप्रयोगों को जोड़ने के लिए तकनीकी अनुसंधान, एआई लैब बुनियादी ढांचे और उद्योग भागीदारी को बढ़ावा देना।",
    "pb": "ਅਕਾਦਮਿਕਤਾ ਅਤੇ ਅਸਲ-ਸੰਸਾਰ ਐਪਲੀਕੇਸ਼ਨਾਂ ਨੂੰ ਜੋੜਨ ਲਈ ਤਕਨੀਕੀ ਖੋਜ, ਏਆਈ ਲੈਬ ਬੁਨਿਆਦੀ ਢਾਂਚੇ ਅਤੇ ਉਦਯੋਗ ਦੀਆਂ ਭਾਈਵਾਲੀਆਂ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨਾ।"
  },
  "AI Research": { "hi": "एआई अनुसंधान", "pb": "ਏਆਈ ਰਿਸਰਚ" },
  "Lab Infrastructure": { "hi": "लैब अवसंरचना", "pb": "ਲੈਬ ਬੁਨਿਆਦੀ ਢਾਂਚਾ" },

  "Centre Coordinator": { "hi": "केंद्र समन्वयक", "pb": "ਕੇਂਦਰ ਕੋਆਰਡੀਨੇਟਰ" },
  "IT Faculty, NIELIT Ropar": { "hi": "आईटी संकाय, नाइलिट रोपड़", "pb": "ਆਈਟੀ ਫੈਕਲਟੀ, ਨਾਈਲਿਟ ਰੋਪੜ" },
  "Managing day-to-day centre operations, student engagement, and coordinating between faculty, candidates, and the central team.": {
    "hi": "दैनिक केंद्र संचालन, छात्र जुड़ाव का प्रबंधन और संकाय, उम्मीदवारों और केंद्रीय टीम के बीच समन्वय।",
    "pb": "ਰੋਜ਼ਾਨਾ ਕੇਂਦਰ ਦੇ ਕੰਮਕਾਜ, ਵਿਦਿਆਰਥੀਆਂ ਦੀ ਸ਼ਮੂਲੀਅਤ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰਨਾ ਅਤੇ ਫੈਕਲਟੀ, ਉਮੀਦਵਾਰਾਂ ਅਤੇ ਕੇਂਦਰੀ ਟੀਮ ਵਿਚਕਾਰ ਤਾਲਮੇਲ ਕਰਨਾ।"
  },
  "Student Engagement": { "hi": "छात्र जुड़ाव", "pb": "ਵਿਦਿਆਰਥੀ ਸ਼ਮੂਲੀਅਤ" },
  "Centre Operations": { "hi": "केंद्र संचालन", "pb": "ਕੇਂਦਰ ਕਾਰਜ" },

  // Courses Section
  "Learning Tracks": { "hi": "सीखने के पाठ्यक्रम", "pb": "ਸਿੱਖਣ ਦੇ ਟਰੈਕ" },
  "Featured Courses": { "hi": "विशेष पाठ्यक्रम", "pb": "ਵਿਸ਼ੇਸ਼ ਕੋਰਸ" },
  "Hands-on, industry-relevant programs designed to build India's next generation of AI and technology professionals.": {
    "hi": "भारत की अगली पीढ़ी के एआई और प्रौद्योगिकी पेशेवरों के निर्माण के लिए डिज़ाइन किए गए व्यावहारिक, उद्योग-प्रासंगिक कार्यक्रम।",
    "pb": "ਭਾਰਤ ਦੀ ਅਗਲੀ ਪੀੜ੍ਹੀ ਦੇ ਏਆਈ ਅਤੇ ਤਕਨਾਲੋਜੀ ਪੇਸ਼ੇਵਰਾਂ ਦੇ ਨਿਰਮਾਣ ਲਈ ਤਿਆਰ ਕੀਤੇ ਗਏ ਵਿਹਾਰਕ, ਉਦਯੋਗ-ਪ੍ਰਸੰਗਿਕ ਪ੍ਰੋਗਰਾਮ।"
  },
  "View Details": { "hi": "विवरण देखें", "pb": "ਵੇਰਵੇ ਦੇਖੋ" },
  "Courses are currently being updated.": { "hi": "पाठ्यक्रम वर्तमान में अपडेट किए जा रहे हैं।", "pb": "ਕੋਰਸ ਵਰਤਮਾਨ ਵਿੱਚ ਅਪਡੇਟ ਕੀਤੇ ਜਾ ਰਹੇ ਹਨ।" },

  // Insights / Dashboard
  "Live Data": { "hi": "लाइव डेटा", "pb": "ਲਾਈਵ ਡੇਟਾ" },
  "National & Regional Impact": { "hi": "राष्ट्रीय और क्षेत्रीय प्रभाव", "pb": "ਰਾਸ਼ਟਰੀ ਅਤੇ ਖੇਤਰੀ ਪ੍ਰਭਾਵ" },
  "Real-time enrollment and performance insights powered by our integrated candidate management system.": {
    "hi": "हमारे एकीकृत उम्मीदवार प्रबंधन प्रणाली द्वारा संचालित वास्तविक समय नामांकन और प्रदर्शन अंतर्दृष्टि।",
    "pb": "ਸਾਡੀ ਏਕੀਕ੍ਰਿਤ ਉਮੀਦਵਾਰ ਪ੍ਰਬੰਧਨ ਪ੍ਰਣਾਲੀ ਦੁਆਰਾ ਸੰਚਾਲਿਤ ਰੀਅਲ-ਟਾਈਮ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਅਤੇ ਪ੍ਰਦਰਸ਼ਨ ਦੀ ਜਾਣਕਾਰੀ।"
  },
  "Loading candidate insights from the configured data source...": {
    "hi": "कॉन्फ़िगर किए गए डेटा स्रोत से उम्मीदवार अंतर्दृष्टि लोड हो रही है...",
    "pb": "ਕੌਂਫਿਗਰ ਕੀਤੇ ਡੇਟਾ ਸਰੋਤ ਤੋਂ ਉਮੀਦਵਾਰ ਦੀ ਜਾਣਕਾਰੀ ਲੋਡ ਹੋ ਰਹੀ ਹੈ..."
  },
  "Active Batches": { "hi": "सक्रिय बैच", "pb": "ਸਰਗਰਮ ਬੈਚ" },
  "States Reached": { "hi": "पहुंचे हुए राज्य", "pb": "ਪਹੁੰਚੇ ਰਾਜ" },
  "Full India coverage including all states, union territories, and district-level touchpoints.": {
    "hi": "सभी राज्यों, केंद्र शासित प्रदेशों और जिला-स्तरीय संपर्कों सहित पूर्ण भारत कवरेज।",
    "pb": "ਸਾਰੇ ਰਾਜਾਂ, ਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼ਾਂ ਅਤੇ ਜ਼ਿਲ੍ਹਾ-ਪੱਧਰੀ ਸੰਪਰਕ ਬਿੰਦੂਆਂ ਸਮੇਤ ਪੂਰਾ ਭਾਰਤ ਕਵਰੇਜ।"
  },

  // Gallery
  "Moments": { "hi": "क्षण", "pb": "ਪਲ" },
  "Glimpses from training sessions, workshops, and celebrations across India.": {
    "hi": "पूरे भारत में प्रशिक्षण सत्रों, कार्यशालाओं और समारोहों की झलकियां।",
    "pb": "ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਸਿਖਲਾਈ ਸੈਸ਼ਨਾਂ, ਵਰਕਸ਼ਾਪਾਂ ਅਤੇ ਜਸ਼ਨਾਂ ਦੀਆਂ ਝਲਕੀਆਂ।"
  },
  "View Full Gallery": { "hi": "पूरी गैलरी देखें", "pb": "ਪੂਰੀ ਗੈਲਰੀ ਦੇਖੋ" },

  // Footer
  "Ministry of Electronics & Information Technology, Govt. of India": {
    "hi": "इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय, भारत सरकार",
    "pb": "ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਅਤੇ ਸੂਚਨਾ ਤਕਨਾਲੋਜੀ ਮੰਤਰਾਲਾ, ਭਾਰਤ ਸਰਕਾਰ"
  },
  "IndiaAI Skill Development Initiative by NIELIT Ropar, funded by MeitY, Government of India. Building Bharat's technology workforce.": {
    "hi": "नाइलिट रोपड़ द्वारा इंडियाएआई कौशल विकास पहल, इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय, भारत सरकार द्वारा वित्त पोषित। भारत के तकनीकी कार्यबल का निर्माण।",
    "pb": "ਨਾਈਲਿਟ ਰੋਪੜ ਦੁਆਰਾ ਇੰਡੀਆਏਆਈ ਹੁਨਰ ਵਿਕਾਸ ਪਹਿਲਕਦਮੀ, MeitY, ਭਾਰਤ ਸਰਕਾਰ ਦੁਆਰਾ ਫੰਡ ਕੀਤੀ ਗਈ। ਭਾਰਤ ਦੇ ਤਕਨਾਲੋਜੀ ਵਰਕਫੋਰਸ ਦਾ ਨਿਰਮਾਣ।"
  },

  // Login Page / Form Labels
  "Access Portal": { "hi": "एक्सेस पोर्टल", "pb": "ਐਕਸੈਸ ਪੋਰਟਲ" },
  "Manage candidates and view analytics": { "hi": "उम्मीदवारों का प्रबंधन करें और विश्लेषण देखें", "pb": "ਉਮੀਦਵਾਰਾਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ਣ ਦੇਖੋ" },
  "Admin Access": { "hi": "एडमिन पहुंच", "pb": "ਐਡਮਿਨ ਪਹੁੰਚ" },
  "Username": { "hi": "उपयोगकर्ता नाम", "pb": "ਯੂਜ਼ਰ ਨੇਮ" },
  "Password": { "hi": "पासवर्ड", "pb": "ਪਾਸਵਰਡ" },
  "Sign In": { "hi": "साइन इन करें", "pb": "ਸਾਈਨ ਇਨ ਕਰੋ" },
  "Candidate Portal": { "hi": "उम्मीदवार पोर्टल", "pb": "ਉਮੀਦਵਾਰ ਪੋਰਟਲ" },
  "Sign in to view your profile and results": { "hi": "अपना प्रोफ़ाइल और परिणाम देखने के लिए साइन इन करें", "pb": "ਆਪਣਾ ਪ੍ਰੋਫਾਈਲ ਅਤੇ ਨਤੀਜੇ ਦੇਖਣ ਲਈ ਸਾਈਨ ਇਨ ਕਰੋ" },
  "Registration Number": { "hi": "पंजीकरण संख्या", "pb": "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨੰਬਰ" },
  "Email or Mobile Number": { "hi": "ईमेल या मोबाइल नंबर", "pb": "ਈਮੇਲ ਜਾਂ ਮੋਬਾਈਲ ਨੰਬਰ" },
  "Date of Birth (Password)": { "hi": "जन्म तिथि (पासवर्ड)", "pb": "ਜਨਮ ਮਿਤੀ (ਪਾਸਵਰਡ)" },
  "Secure Login": { "hi": "सुरक्षित लॉगिन", "pb": "ਸੁਰੱਖਿਅਤ ਲੌਗਇਨ" },
  "New Student?": { "hi": "नए छात्र?", "pb": "ਨਵੇਂ ਵਿਦਿਆਰਥੀ?" },
  "Register Here": { "hi": "यहाँ पंजीकरण करें", "pb": "ਇੱਥੇ ਰਜਿਸਟਰ ਕਰੋ" },

  // Registration Form
  "Student Registration": { "hi": "छात्र पंजीकरण", "pb": "ਵਿਦਿਆਰਥੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ" },
  "Enroll in a new IndiaAI training program": { "hi": "एक नए इंडियाएआई प्रशिक्षण कार्यक्रम में नामांकन करें", "pb": "ਇੱਕ ਨਵੇਂ ਇੰਡੀਆਏਆਈ ਸਿਖਲਾਈ ਪ੍ਰੋਗਰਾਮ ਵਿੱਚ ਦਾਖਲਾ ਲਓ" },
  "Full Name": { "hi": "पूरा नाम", "pb": "ਪੂਰਾ ਨਾਮ" },
  "Email Address": { "hi": "ईमेल पता", "pb": "ਈਮੇਲ ਪਤਾ" },
  "Mobile Number": { "hi": "मोबाइल नंबर", "pb": "ਮੋਬਾਈਲ ਨੰਬਰ" },
  "Date of Birth": { "hi": "जन्म तिथि", "pb": "ਜਨਮ ਮਿਤੀ" },
  "Course Selection": { "hi": "पाठ्यक्रम चयन", "pb": "ਕੋਰਸ ਦੀ ਚੋਣ" },
  "City / State": { "hi": "शहर / राज्य", "pb": "ਸ਼ਹਿਰ / ਰਾਜ" },
  "Submit Registration": { "hi": "पंजीकरण जमा करें", "pb": "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਜਮ੍ਹਾਂ ਕਰੋ" },
  "Already registered?": { "hi": "पहले से पंजीकृत?", "pb": "ਪਹਿਲਾਂ ਹੀ ਰਜਿਸਟਰਡ ਹੋ?" },
  "Login Here": { "hi": "यहाँ लॉगिन करें", "pb": "ਇੱਥੇ ਲੌਗਇਨ ਕਰੋ" }
};

// Injection execution on script load
document.addEventListener("DOMContentLoaded", () => {
  // 1. Inject language dropdown into the navbar/header
  injectLanguageSelector();
  
  // 2. Read language choice from LocalStorage or fallback to 'en'
  const currentLang = localStorage.getItem("selectedLanguage") || "en";
  
  // 3. Switch selector to active language
  const selectors = document.querySelectorAll(".lang-selector");
  selectors.forEach(sel => sel.value = currentLang);
  
  // 4. Translate page elements
  translatePage(currentLang);

  // 5. Setup unified navbar features (scroll class, active link highlight, mobile hamburger)
  setupNavbarFeatures();
});

function injectLanguageSelector() {
  // Search for the navbar navigation container
  const navContainer = 
    document.querySelector(".nav-links") || 
    document.querySelector("header nav") || 
    document.querySelector(".header-links") || 
    document.querySelector(".nav-container");

  if (!navContainer) return;

  // Prevent duplicate insertion
  if (document.querySelector(".lang-selector")) return;

  const select = document.createElement("select");
  select.className = "lang-selector";
  select.ariaLabel = "Change language";
  select.innerHTML = `
    <option value="en">English</option>
    <option value="hi">हिन्दी (Hindi)</option>
    <option value="pb">ਪੰਜਾਬੀ (Punjabi)</option>
  `;

  // Attach change listener to update all elements
  select.addEventListener("change", (e) => {
    const lang = e.target.value;
    localStorage.setItem("selectedLanguage", lang);
    
    // Sync other selectors on the page if they exist
    const allSel = document.querySelectorAll(".lang-selector");
    allSel.forEach(s => s.value = lang);
    
    translatePage(lang);
  });

  // Append dropdown at the appropriate place in the nav menu
  if (navContainer.classList.contains("nav-links") && document.querySelector(".nav-cta")) {
    // Insert just before Login button
    const cta = document.querySelector(".nav-cta");
    navContainer.insertBefore(select, cta);
  } else {
    navContainer.appendChild(select);
  }
}

function translatePage(lang) {
  // If english, restore default texts from original attributes or mapping
  const isEn = lang === "en";

  // Translate elements marked with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n.trim();
    applyTranslation(el, key, lang, isEn);
  });

  // Fallback translation: search for specific elements containing translatable texts directly
  // This avoids requiring data-i18n on absolutely every standard element like nav links
  const textNodes = document.querySelectorAll("a, button, p, h1, h2, h3, span, label, option");
  textNodes.forEach(el => {
    if (el.children.length > 0) return; // Only translate leaf text nodes
    
    // If we've translated this before, the original English key is saved in dataset.origText
    const key = el.dataset.origText || el.textContent.trim();
    
    if (translations[key]) {
      // Store original English text if not already stored
      if (!el.dataset.origText) {
        el.dataset.origText = key;
      }
      
      const t = translations[key];
      if (t) {
        el.textContent = isEn ? key : (t[lang] || key);
      }
    }
  });

  // Handle placeholders in input elements
  document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(input => {
    const key = input.dataset.origPlaceholder || input.placeholder.trim();
    if (translations[key]) {
      if (!input.dataset.origPlaceholder) {
        input.dataset.origPlaceholder = key;
      }
      const t = translations[key];
      if (t) {
        input.placeholder = isEn ? key : (t[lang] || key);
      }
    }
  });
}

function applyTranslation(el, key, lang, isEn) {
  const t = translations[key];
  if (!t) return;

  // Cache original text for restoration when switching back to English
  if (!el.dataset.origText) {
    el.dataset.origText = el.innerHTML.trim();
  }

  if (isEn) {
    el.innerHTML = el.dataset.origText;
  } else {
    el.innerHTML = t[lang] || el.dataset.origText;
  }
}

function setupNavbarFeatures() {
  // A. Navbar Scroll shadow toggle
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
    // Trigger once on load in case page is already scrolled
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }

  // B. Highlight active navbar link dynamically based on location pathname
  const path = window.location.pathname;
  const pageName = path.substring(path.lastIndexOf('/') + 1) || "index.html";
  
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === pageName) {
      link.classList.add("active");
    } else if (pageName === "index.html" && href.startsWith("index.html#")) {
      // Don't mark dashboard hashes as active unless specifically clicked,
      // but keep Home highlighted on the homepage.
      if (href === "index.html") {
        link.classList.add("active");
      }
    } else if ((pageName === "index.html" || pageName === "") && href === "index.html") {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // C. Mobile Hamburger Menu Toggle
  const toggleBtn = document.getElementById('nav-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  if (toggleBtn && navLinksContainer) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBtn.classList.toggle('active');
      navLinksContainer.classList.toggle('active');
    });

    // Close mobile menu if clicked outside
    document.addEventListener('click', (e) => {
      if (navLinksContainer.classList.contains('active') && !navLinksContainer.contains(e.target) && e.target !== toggleBtn) {
        toggleBtn.classList.remove('active');
        navLinksContainer.classList.remove('active');
      }
    });

    // Close mobile menu when links are clicked
    navLinksContainer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.classList.remove('active');
        navLinksContainer.classList.remove('active');
      });
    });
  }
}
