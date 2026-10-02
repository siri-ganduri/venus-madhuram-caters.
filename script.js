/* ==========================================================================
   script.js - Dynamic Multilingual Translation Engine
   ========================================================================== */

let currentLang = 'en';

const menuData = [
    { 
        title: {
            en: "Paneer Butter Masala",
            hi: "पनीर बटर मसाला",
            te: "పనీర్ బటర్ మసాలా"
        }, 
        type: "veg", 
        badge: {
            en: "VEG",
            hi: "शाकाहारी",
            te: "వెజ్"
        },
        category: "veg", 
        img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80",
        desc: {
            en: "Cottage cheese in rich tomato butter gravy.",
            hi: "स्वादिष्ट टमाटर और बटर ग्रेवी में बना पनीर।",
            te: "రుచికరమైన టమాటో మరియు బటర్ గ్రేవీలో చేసిన పనీర్."
        }
    },
    { 
        title: {
            en: "Hyderabadi Chicken Biryani",
            hi: "हैदराबादी चिकन बिरयानी",
            te: "హైదరాబాదీ చికెన్ బిర్యానీ"
        }, 
        type: "nonveg", 
        badge: {
            en: "NON-VEG",
            hi: "मांसाहारी",
            te: "నాన్-వెజ్"
        },
        category: "nonveg", 
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80",
        desc: {
            en: "Aromatic basmati rice cooked with marinated chicken.",
            hi: "मसालेदार चिकन के साथ पकाई गई सुगंधित बासमती चावल।",
            te: "సుగంధ ద్రవ్యాలతో వండిన రుచికరమైన చికెన్ బిర్యానీ."
        }
    },
    { 
        title: {
            en: "Mutton Dum Curry",
            hi: "मटन दम करी",
            te: "మటన్ దమ్ కర్రీ"
        }, 
        type: "nonveg", 
        badge: {
            en: "NON-VEG",
            hi: "मांसाहारी",
            te: "నాన్-వెజ్"
        },
        category: "nonveg", 
        img: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=500&q=80",
        desc: {
            en: "Succulent mutton cooked in traditional Telangana spices.",
            hi: "पारंपरिक तेलंगाना मसालों में पकाया गया मटन।",
            te: "సాంప్రదాయ తెలంగాణ మసాలాలతో వండిన మటన్ కూర."
        }
    },
    { 
        title: {
            en: "Live Dosa Station",
            hi: "लाइव डोसा काउंटर",
            te: "లైవ్ దోశ కౌంటర్"
        }, 
        type: "veg", 
        badge: {
            en: "VEG",
            hi: "शाकाहारी",
            te: "వెజ్"
        },
        category: "live", 
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80",
        desc: {
            en: "Crisp Masala, Butter & Cheese Dosas made fresh.",
            hi: "ताजा और करारे मसाला, बटर और चीज़ डोसे।",
            te: "వేడివేడిగా చేసే మసాలా, బటర్ మరియు చీజ్ దోశలు."
        }
    },
    { 
        title: {
            en: "Chicken 65 Starter",
            hi: "चिकन 65 स्टार्टर",
            te: "చికెన్ 65 స్టార్టర్"
        }, 
        type: "nonveg", 
        badge: {
            en: "NON-VEG",
            hi: "मांसाहारी",
            te: "నాన్-వెజ్"
        },
        category: "nonveg", 
        img: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=500&q=80",
        desc: {
            en: "Crispy fried boneless chicken tossed with spices.",
            hi: "मसालेदार और क्रिस्पी फ्राइड बोनलेस चिकन।",
            te: "క్రిస్పీగా వేయించిన స్పైసీ బోన్‌లెస్ చికెన్."
        }
    },
    { 
        title: {
            en: "Gulab Jamun & Sweets",
            hi: "गुलाब जामुन और मिठाइयां",
            te: "గులాబ్ జామున్ & మిఠాయిలు"
        }, 
        type: "veg", 
        badge: {
            en: "VEG",
            hi: "शाकाहारी",
            te: "వెజ్"
        },
        category: "dessert", 
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80",
        desc: {
            en: "Soft milk dumplings soaked in cardamom syrup.",
            hi: "इलायची चाशनी में डूबे हुए नरम गुलाब जामुन।",
            te: "యాలకుల పాకంలో నానబెట్టిన మెత్తని గులాబ్ జామున్లు."
        }
    }
];

const translations = {
    en: {
        "top-location": "Hyderabad, Telangana",
        "top-purity": "Pure Veg & Non-Veg Catering",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-services": "Services",
        "nav-menu": "Menu",
        "nav-gallery": "Gallery",
        "nav-reviews": "Reviews",
        "nav-faq": "FAQs",
        "nav-contact": "Contact",
        "nav-getquote": "Get Quote",

        "hero-title": "Royal Flavors for Unforgettable Celebrations",
        "hero-desc": "Hyderabad’s premier Veg & Non-Veg catering service for weddings, corporate banquets, and private occasions.",
        "btn-quote": "Get A Custom Quote",
        "btn-menu": "Explore Menu",
        "btn-call": "Call Now",

        "about-tag": "About Us",
        "about-title": "Crafting Authentic Taste Across Hyderabad",
        "about-desc1": "At Venus Madhuram Caters, we believe every grand event deserves extraordinary culinary presentation. Rooted in Hyderabad, we specialize in authentic South Indian traditional feasts, North Indian royal curries, rich Hyderabadi Non-Veg specialties, and interactive modern live food stations.",
        "about-desc2": "Whether you need a dedicated pure vegetarian banana leaf spread or a lavish non-vegetarian wedding feast featuring authentic Biryani, our dishes are prepared with uncompromised hygiene, raw fresh spices, and timeless passion.",
        "about-feat1": "Separate dedicated preparation & cooking standards for Veg & Non-Veg menus.",
        "about-feat2": "Master chefs skilled in South & North Indian regional authentic dishes.",
        "about-feat3": "Elegant buffet layouts, live food counters, and trained uniformed service staff.",

        "services-tag": "Services",
        "services-title": "Catering Solutions For Every Occasion",
        "serv-birthday-head": "Birthday Parties",
        "serv-birthday-desc": "Fun, vibrant menus featuring live counters, mocktails, and delicious treats for all age groups.",
        "serv-wedding-head": "Weddings & Engagements",
        "serv-wedding-desc": "Grand multi-course Veg & Non-Veg feast setups, live counters, and welcome drinks engineered for grand receptions.",
        "serv-corp-head": "Corporate Events",
        "serv-corp-desc": "Executive lunch buffets and dinner setups for annual meetings, conferences, and corporate galas.",
        "serv-house-head": "Housewarmings & Pujas",
        "serv-house-desc": "Traditional, authentic South Indian breakfast and lunch spreads served with ritualistic care and purity.",

        "menu-tag": "Our Menu",
        "menu-title": "Signature Delicacies",
        "menu-desc": "All menu packages are customized and quote-driven based on your choice of dishes.",
        "tab-all": "All Items",
        "tab-veg": "Vegetarian",
        "tab-nonveg": "Non-Vegetarian",
        "tab-live": "Live Counters",
        "tab-dessert": "Desserts",

        "gallery-tag": "Gallery",
        "gallery-title": "Food Presentation & Setups",
        "gal-1": "Royal Buffet Setup",
        "gal-2": "Live Snack Counters",
        "gal-3": "Live South Indian Counter",
        "gal-4": "North Indian Main Course",
        "gal-6": "Traditional Dessert Counters",
        "gal-7": "Hyderabadi Dum Biryani",

        "reviews-tag": "Reviews",
        "reviews-title": "What Our Guests Say About Us",
        "rating-text": "rating based on verified Google Reviews",
        "rev1-text": "\"Venus Madhuram Caters handled our wedding reception of 600 guests in Hyderabad. The Mutton Dum Biryani, Paneer Butter Masala, and Live Dosa counter were praised by every single guest.\"",
        "rev1-sub": "Wedding Host • Gachibowli",
        "rev2-text": "\"We booked them for our Gruhapravesam function. The traditional South Indian meals were authentic with rich homemade flavor. On-time setup and polite staff.\"",
        "rev2-sub": "Housewarming • Kukatpally",
        "rev3-text": "\"Professionalism at its best! Managed our corporate annual meet dinner with extreme discipline. Both the Veg and Non-Veg counters were managed smoothly.\"",
        "rev3-sub": "Event Lead • HITEC City",

        "faq-tag": "FAQs",
        "faq-title": "Frequently Asked Questions",
        "faq1-q": "Do you offer both Vegetarian and Non-Vegetarian catering?",
        "faq1-a": "Yes! We specialize in both Pure Vegetarian and Non-Vegetarian catering. For mixed events, we maintain strict separate preparation, cooking, and serving arrangements.",
        "faq2-q": "What type and scale of events do you cater for?",
        "faq2-a": "We cater for all events ranging from intimate family gatherings and small pujas to grand wedding receptions and corporate banquets across Hyderabad.",

        "contact-tag": "Contact",
        "contact-title": "Plan Your Culinary Experience With Us",
        "contact-desc": "Fill out the inquiry form to receive an instant quote or reach out directly via Phone/WhatsApp.",
        "contact-ph-head": "Phone Number",
        "contact-call-link": "Call Now (+91 9000055229)",
        "contact-wa-head": "WhatsApp Support",
        "contact-loc-head": "Kitchen & Operations Base",
        "form-title": "Request an Event Quote",
        "lbl-name": "Full Name *",
        "lbl-phone": "Phone Number *",
        "lbl-date": "Event Date *",
        "lbl-eventtype": "Event Type *",
        "lbl-foodpref": "Food Preference *",
        "lbl-guests": "Estimated Guests *",
        "form-btn": "Submit Quote Request via WhatsApp",
        "footer-copy": "© 2026 Venus Madhuram Caters. All Rights Reserved. Hyderabad, Telangana."
    },
    hi: {
        "top-location": "हैदराबाद, तेलंगाना",
        "top-purity": "शुद्ध शाकाहारी और मांसाहारी कैटरिंग",
        "nav-home": "होम",
        "nav-about": "हमारे बारे में",
        "nav-services": "सेवाएं",
        "nav-menu": "मेन्यू",
        "nav-gallery": "गैलरी",
        "nav-reviews": "समीक्षाएं",
        "nav-faq": "प्रश्न",
        "nav-contact": "संपर्क करें",
        "nav-getquote": "कोटेशन लें",

        "hero-title": "विशेष समारोहों के लिए शानदार और शाही स्वाद",
        "hero-desc": "शादियों, कॉर्पोरेट आयोजनों और निजी समारोहों के लिए हैदराबाद की प्रमुख वेज और नॉन-वेज कैटरिंग सेवा।",
        "btn-quote": "कोटेशन प्राप्त करें",
        "btn-menu": "मेन्यू देखें",
        "btn-call": "अभी कॉल करें",

        "about-tag": "हमारे बारे में",
        "about-title": "हैदराबाद में बेहतरीन स्वाद का अनुभव",
        "about-desc1": "वीनस मधुरम कैटरर्स में, हमारा मानना है कि हर बड़े आयोजन में बेहतरीन भोजन और प्रस्तुति होनी चाहिए। हम दक्षिण भारतीय पारंपरिक भोजन, उत्तर भारतीय करी और हैदराबादी व्यंजनों में विशेषज्ञ हैं।",
        "about-desc2": "चाहे आपको पारंपरिक केले के पत्ते पर शुद्ध शाकाहारी भोजन चाहिए या प्रामाणिक बिरयानी वाला भव्य मांसाहारी शादी का दावत, हम उच्च स्वच्छता के साथ भोजन तैयार करते हैं।",
        "about-feat1": "शाकाहारी और मांसाहारी व्यंजनों के लिए अलग और समर्पित तैयारी मानक।",
        "about-feat2": "दक्षिण और उत्तर भारतीय प्रामाणिक व्यंजनों में कुशल मास्टर शेफ।",
        "about-feat3": "शानदार बुफे लेआउट, लाइव फ़ूड काउंटर और प्रशिक्षित सेवा दल।",

        "services-tag": "सेवाएं",
        "services-title": "हर अवसर के लिए कैटरिंग समाधान",
        "serv-birthday-head": "जन्मदिन की पार्टियां",
        "serv-birthday-desc": "सभी आयु वर्गों के लिए लाइव काउंटर, मॉकटेल और स्वादिष्ट व्यंजनों से भरपूर मेन्यू।",
        "serv-wedding-head": "शादी और सगाई",
        "serv-wedding-desc": "आपकी शादी को यादगार बनाने के लिए बहु-व्यंजन वेज और नॉन-वेज दावत और लाइव काउंटर।",
        "serv-corp-head": "कॉर्पोरेट कार्यक्रम",
        "serv-corp-desc": "वार्षिक बैठकों और सम्मेलनों के लिए पेशेवर बुफे और दोपहर का भोजन।",
        "serv-house-head": "गृह प्रवेश और पूजा",
        "serv-house-desc": "पारंपरिक और प्रामाणिक दक्षिण भारतीय नाश्ता और दोपहर का भोजन।",

        "menu-tag": "हमारा मेन्यू",
        "menu-title": "हमारे विशेष व्यंजन",
        "menu-desc": "सभी मेन्यू पैकेज आपकी पसंद के व्यंजनों के आधार पर कस्टमाइज किए जाते हैं।",
        "tab-all": "सभी व्यंजन",
        "tab-veg": "शाकाहारी",
        "tab-nonveg": "मांसाहारी",
        "tab-live": "लाइव काउंटर",
        "tab-dessert": "मिठाइयां",

        "gallery-tag": "गैलरी",
        "gallery-title": "भोजन और सेटअप प्रदर्शन",
        "gal-1": "रॉयल बुफे सेटअप",
        "gal-2": "लाइव स्नैक काउंटर",
        "gal-3": "लाइव साउथ इंडियन काउंटर",
        "gal-4": "नॉर्थ इंडियन मेन कोर्स",
        "gal-6": "पारंपरिक मिठाई काउंटर",
        "gal-7": "हैदराबादी दम बिरयानी",

        "reviews-tag": "समीक्षाएं",
        "reviews-title": "हमारे ग्राहक हमारे बारे में क्या कहते हैं",
        "rating-text": "सत्यापित गूगल समीक्षाओं पर आधारित रेटिंग",
        "rev1-text": "\"वीनस मधुरम कैटरर्स ने हैदराबाद में हमारे 600 मेहमानों के रिसेप्शन का प्रबंधन किया। मटन बिरयानी और लाइव डोसा काउंटर की सभी ने प्रशंसा की।\"",
        "rev1-sub": "शादी के मेजबान • गचीबोवली",
        "rev2-text": "\"हमने उन्हें अपने गृह प्रवेश समारोह के लिए बुक किया था। पारंपरिक दक्षिण भारतीय भोजन घर जैसा स्वादिष्ट था।\"",
        "rev2-sub": "गृह प्रवेश • कुकटपल्ली",
        "rev3-text": "\"उत्कृष्ट व्यावसायिकता! हमारे कॉर्पोरेट वार्षिक सम्मेलन के रात्रिभोज का प्रबंधन किया।\"",
        "rev3-sub": "इवेंट लीड • हाईटेक सिटी",

        "faq-tag": "प्रश्न",
        "faq-title": "अक्सर पूछे जाने वाले प्रश्न",
        "faq1-q": "क्या आप शाकाहारी और मांसाहारी दोनों कैटरिंग प्रदान करते हैं?",
        "faq1-a": "हाँ! हम शुद्ध शाकाहारी और मांसाहारी दोनों प्रकार की कैटरिंग में विशेषज्ञ हैं।",
        "faq2-q": "आप किस प्रकार के आयोजनों के लिए कैटरिंग प्रदान करते हैं?",
        "faq2-a": "हम छोटे पारिवारिक समारोहों से लेकर बड़ी शादियों तक सभी आयोजनों के लिए व्यवस्था करते हैं।",

        "contact-tag": "संपर्क करें",
        "contact-title": "अपने मेन्यू की योजना बनाएं",
        "contact-desc": "तत्काल कोटेशन प्राप्त करने के लिए फॉर्म भरें या सीधे फोन/व्हाट्सएप के माध्यम से संपर्क करें।",
        "contact-ph-head": "फोन नंबर",
        "contact-call-link": "अभी कॉल करें (+91 9000055229)",
        "contact-wa-head": "व्हाट्सएप सपोर्ट",
        "contact-loc-head": "रसोई और संचालन केंद्र",
        "form-title": "इवेंट कोटेशन का अनुरोध करें",
        "lbl-name": "पूरा नाम *",
        "lbl-phone": "फोन नंबर *",
        "lbl-date": "कार्यक्रम की तिथि *",
        "lbl-eventtype": "कार्यक्रम का प्रकार *",
        "lbl-foodpref": "भोजन की पसंद *",
        "lbl-guests": "अनुमानित अतिथि *",
        "form-btn": "व्हाट्सएप के माध्यम से कोटेशन भेजें",
        "footer-copy": "© 2026 वीनस मधुरम कैटरर्स। सर्वाधिकार सुरक्षित। हैदराबाद, तेलंगाना।"
    },
    te: {
        "top-location": "హైదరాబాద్, తెలంగాణ",
        "top-purity": "శుద్ధ వెజ్ & నాన్-వెజ్ కేటరింగ్",
        "nav-home": "హోమ్",
        "nav-about": "మా గురించి",
        "nav-services": "సేవలు",
        "nav-menu": "మెనూ",
        "nav-gallery": "గ్యాలరీ",
        "nav-reviews": "రివ్యూస్",
        "nav-faq": "ప్రశ్నలు",
        "nav-contact": "సంప్రదించండి",
        "nav-getquote": "ధరలు తెలుసుకోండి",

        "hero-title": "మీ ప్రత్యేక వేడుకల కోసం రాజభవన తరహా రుచులు",
        "hero-desc": "వివాహాలు, కార్పొరేట్ ఈవెంట్లు మరియు కుటుంబ వేడుకలకు హైదరాబాద్‌లో అత్యుత్తమ వెజ్ & నాన్-వెజ్ కేటరింగ్.",
        "btn-quote": "ధరల వివరాలు పొందండి",
        "btn-menu": "మెనూ చూడండి",
        "btn-call": "ఇప్పుడే కాల్ చేయండి",

        "about-tag": "మా గురించి",
        "about-title": "హైదరాబాద్ అంతటా అద్భుతమైన రుచులు",
        "about-desc1": "వీనస్ మధురం కేటరర్స్‌లో ప్రతీ శుభకార్యానికి అద్భుతమైన రుచికరమైన వంటకాలను అందించడమే మా లక్ష్యం. సాంప్రదాయ సౌత్ ఇండియన్, నార్త్ ఇండియన్ మరియు హైదరాబాదీ స్పెషల్స్ వండటంలో మాకు ప్రత్యేక అనుభవం ఉంది.",
        "about-desc2": "సాంప్రదాయ అరటి ఆకు భోజనం అయినా లేదా రుచికరమైన దమ్ బిర్యానీతో కూడిన నాన్-వెజ్ విందు అయినా, మేము ఎంతో పరిశుభ్రంగా వంటకాలను సిద్ధం చేస్తాము.",
        "about-feat1": "వెజ్ మరియు నాన్-వెజ్ వంటకాలకు ప్రత్యేక పరిశుభ్రత మరియు తయారీ ప్రమాణాలు.",
        "about-feat2": "సౌత్ & నార్త్ ఇండియన్ రుచులలో అనుభవజ్ఞులైన మాస్టర్ షెఫ్‌లు.",
        "about-feat3": "అనుభవజ్ఞులైన సర్వింగ్ సిబ్బంది & ప్రత్యక్ష లైవ్ అమరికలు.",

        "services-tag": "సేవలు",
        "services-title": "ప్రతి శుభకార్యానికి కేటరింగ్ సేవలు",
        "serv-birthday-head": "బర్త్‌డే పార్టీలు",
        "serv-birthday-desc": "అన్ని వయసుల వారికీ నచ్చే లైవ్ కౌంటర్లు, మాక్‌టైల్స్ మరియు రుచికరమైన వంటకాలతో కూడిన మెనూ.",
        "serv-wedding-head": "వివాహాలు & నిశ్చితార్థాలు",
        "serv-wedding-desc": "మీ వివాహ వేడుకను మరపురానిదిగా మార్చే బహుళ వంటకాల వెజ్ & నాన్-వెజ్ విందు అమరికలు.",
        "serv-corp-head": "కార్పొరేట్ ఈవెంట్లు",
        "serv-corp-desc": "వార్షిక సమావేశాలు మరియు మీటింగ్‌‌ల కోసం ప్రొఫెషనల్ బఫెట్ లంచ్/డిన్నర్ ఏర్పాట్లు.",
        "serv-house-head": "గృహప్రవేశం & పూజలు",
        "serv-house-desc": "సాంప్రదాయకమైన సౌత్ ఇండియన్ టిఫిన్స్ మరియు భోజన వసతి.",

        "menu-tag": "మా మెనూ",
        "menu-title": "ప్రత్యేకమైన వంటకాలు",
        "menu-desc": "మీకు కావలసిన వంటకాలను బట్టి మెనూ ప్యాకేజీలు కస్టమైజ్ చేయబడతాయి.",
        "tab-all": "అన్ని వంటకాలు",
        "tab-veg": "శాకాహారం",
        "tab-nonveg": "మాంసాహారం",
        "tab-live": "లైవ్ కౌంటర్లు",
        "tab-dessert": "మిఠాయిలు",

        "gallery-tag": "గ్యాలరీ",
        "gallery-title": "విందు ఏర్పాట్ల ప్రదర్శన",
        "gal-1": "రాయల్ బఫెట్ అమరిక",
        "gal-2": "లైవ్ స్నాక్ కౌంటర్లు",
        "gal-3": "లైవ్ సౌత్ ఇండియన్ కౌంటర్",
        "gal-4": "నార్త్ ఇండియన్ మెయిన్ కోర్స్",
        "gal-6": "సాంప్రదాయ మిఠాయి కౌంటర్లు",
        "gal-7": "హైదరాబాదీ దమ్ బిర్యానీ",

        "reviews-tag": "రివ్యూస్",
        "reviews-title": "వినియోగదారుల అభిప్రాయాలు",
        "rating-text": "రేటింగ్స్ ఆధారంగా ధృవీకరించబడిన రివ్యూస్",
        "rev1-text": "\"వీనస్ మధురం కేటరర్స్ గచ్ఛిబౌలిలో మా పెళ్లి రిసెప్షన్‌కి 600 మందికి విందు అందించారు. మటన్ బిర్యానీ, లైవ్ దోశ కౌంటర్ అద్భుతంగా ఉన్నాయి.\"",
        "rev1-sub": "వివాహ శుభకార్యం • గచ్ఛిబౌలి",
        "rev2-text": "\"మా గృహప్రవేశం కార్యక్రమానికి వీరిని బుక్ చేశాము. సాంప్రదాయ సౌత్ ఇండియన్ భోజనం ఇంట్లో చేసినట్లే చాలా రుచిగా ఉంది.\"",
        "rev2-sub": "గృహప్రవేశం • కూకట్‌పల్లి",
        "rev3-text": "\"అత్యుత్తమ క్రమశిక్షణ! మా కార్పొరేట్ డిన్నర్‌ను చాలా సమర్థవంతంగా నిర్వహించారు.\"",
        "rev3-sub": "ఈవెంట్ లీడ్ • హైటెక్ సిటీ",

        "faq-tag": "ప్రశ్నలు",
        "faq-title": "తరచుగా అడిగే ప్రశ్నలు",
        "faq1-q": "మీరు వెజ్ మరియు నాన్-వెజ్ రెండింటికీ కేటరింగ్ చేస్తారా?",
        "faq1-a": "అవును! మేము వెజ్ మరియు నాన్-వెజ్ రెండింటిలోనూ ప్రత్యేకత కలిగి ఉన్నాము. రెంటినీ వేర్వేరుగా పరిశుభ్రంగా సిద్ధం చేస్తాము.",
        "faq2-q": "మీరు ఏ రకమైన ఈవెంట్లకు కేటరింగ్ చేస్తారు?",
        "faq2-a": "మేము చిన్న కుటుంబ వేడుకల నుండి పెద్ద పెళ్లిళ్ల వరకు అన్నింటికీ కేటరింగ్ అందిస్తాము.",

        "contact-tag": "సంప్రదించండి",
        "contact-title": "మీ విందును మాతో ప్లాన్ చేసుకోండి",
        "contact-desc": "కొటేషన్ పొందడానికి ఫారమ్ నింపండి లేదా ఫోన్/వాట్సాప్ ద్వారా నేరుగా సంప్రదించండి.",
        "contact-ph-head": "ఫోన్ నంబర్",
        "contact-call-link": "ఇప్పుడే కాల్ చేయండి (+91 9000055229)",
        "contact-wa-head": "వాట్సాప్ సపోర్ట్",
        "contact-loc-head": "వంటశాల & ఆపరేషన్స్ సెంటర్",
        "form-title": "కేటరింగ్ కొటేషన్ అడగండి",
        "lbl-name": "పూర్తి పేరు *",
        "lbl-phone": "ఫోన్ నంబర్ *",
        "lbl-date": "ఈవెంట్ తేదీ *",
        "lbl-eventtype": "ఈవెంట్ రకం *",
        "lbl-foodpref": "ఆహార ప్రాధాన్యత *",
        "lbl-guests": "అతిథుల సంఖ్య *",
        "form-btn": "వాట్సాప్ ద్వారా కొటేషన్ పంపండి",
        "footer-copy": "© 2026 వీనస్ మధురం కేటరర్స్. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి. హైదరాబాద్, తెలంగాణ."
    }
};

document.addEventListener('DOMContentLoaded', () => {

    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    const menuGrid = document.getElementById('menu-grid');
    const tabBtns = document.querySelectorAll('.tab-btn');

    function renderMenu(filter = 'all') {
        if (!menuGrid) return;
        menuGrid.innerHTML = '';

        let filtered = menuData;
        if (filter === 'veg') {
            filtered = menuData.filter(item => item.type === 'veg');
        } else if (filter === 'nonveg') {
            filtered = menuData.filter(item => item.type === 'nonveg');
        } else if (filter !== 'all') {
            filtered = menuData.filter(item => item.category === filter);
        }

        filtered.forEach(item => {
            const card = document.createElement('div');
            card.className = 'visual-menu-card';
            
            const titleText = item.title[currentLang] || item.title['en'];
            const badgeText = item.badge[currentLang] || item.badge['en'];
            const descText = item.desc[currentLang] || item.desc['en'];

            card.innerHTML = `
                <img src="${item.img}" alt="${titleText}" class="visual-menu-img">
                <div class="visual-menu-content">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                        <h4 style="font-size:1.05rem;">${titleText}</h4>
                        <span class="${item.type === 'veg' ? 'badge-veg' : 'badge-nonveg'}">
                            ${badgeText}
                        </span>
                    </div>
                    <p style="font-size:0.85rem; color:#666;">${descText}</p>
                </div>
            `;
            menuGrid.appendChild(card);
        });
    }

    renderMenu('all');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(btn.dataset.category);
        });
    });

    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLang = btn.dataset.lang;

            document.querySelectorAll('[data-key]').forEach(elem => {
                const key = elem.dataset.key;
                if (translations[currentLang] && translations[currentLang][key]) {
                    elem.textContent = translations[currentLang][key];
                }
            });

            const activeTab = document.querySelector('.tab-btn.active');
            renderMenu(activeTab ? activeTab.dataset.category : 'all');
        });
    });

    const enquiryForm = document.getElementById('enquiry-form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('fullName').value;
            const phone = document.getElementById('phone').value;
            const eventDate = document.getElementById('eventDate').value;
            const eventType = document.getElementById('eventType').value;
            const foodPref = document.getElementById('foodPref').value;
            const guestCount = document.getElementById('guestCount').value;

            const text = `Hello Venus Madhuram Caters!%0A%0AI would like to request a catering quote:%0A- *Name:* ${name}%0A- *Phone:* ${phone}%0A- *Event Date:* ${eventDate}%0A- *Event Type:* ${eventType}%0A- *Food Preference:* ${foodPref}%0A- *Guest Count:* ${guestCount}`;

            window.open(`https://wa.me/919000055229?text=${text}`, '_blank');
        });
    }
});