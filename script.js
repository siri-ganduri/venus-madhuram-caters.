import { db } from "./firebase.js";
import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


// =====================================================
// GOOGLE SHEETS WEB APP URL
// =====================================================

const GOOGLE_SHEETS_URL =
    "https://script.google.com/macros/s/AKfycbxCaGqJuGuRoMTHGubsCfQEGNgQjM9AbxyBamfA3HY0fvtNOFMtrI1l7I9hID1D1N5LfQ/exec";


// =====================================================
// MOBILE MENU
// =====================================================

const mobileToggle = document.getElementById("mobile-toggle");
const navMenu = document.getElementById("nav-menu");

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}


// =====================================================
// MENU DATA
// =====================================================

const menuItems = [
    {
        name: "Paneer Tikka",
        category: "veg"
    },
    {
        name: "Gobi Manchurian",
        category: "veg"
    },
    {
        name: "Veg Biryani",
        category: "veg"
    },
    {
        name: "Paneer Butter Masala",
        category: "veg"
    },
    {
        name: "Chicken 65",
        category: "nonveg"
    },
    {
        name: "Chicken Biryani",
        category: "nonveg"
    },
    {
        name: "Mutton Curry",
        category: "nonveg"
    },
    {
        name: "Fish Fry",
        category: "nonveg"
    },
    {
        name: "Live Dosa Counter",
        category: "live"
    },
    {
        name: "Live Chaat Counter",
        category: "live"
    },
    {
        name: "Gulab Jamun",
        category: "dessert"
    },
    {
        name: "Rasmalai",
        category: "dessert"
    },
    {
        name: "Ice Cream",
        category: "dessert"
    }
];


// =====================================================
// RENDER MENU
// =====================================================

const menuGrid = document.getElementById("menu-grid");

function renderMenu(category = "all") {

    if (!menuGrid) return;

    const filteredItems =
        category === "all"
            ? menuItems
            : menuItems.filter(item => item.category === category);

    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-card">
            <div class="menu-card-content">
                <h3>${item.name}</h3>
            </div>
        </div>
    `).join("");
}

renderMenu();


// =====================================================
// MENU TABS
// =====================================================

document.querySelectorAll(".tab-btn").forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelectorAll(".tab-btn")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.dataset.category;

        renderMenu(category);
    });

});


// =====================================================
// FAQ ACCORDION
// =====================================================

document.querySelectorAll(".accordion-header").forEach(header => {

    header.addEventListener("click", () => {

        const content = header.nextElementSibling;

        if (!content) return;

        content.classList.toggle("active");

        header.classList.toggle("active");
    });

});


// =====================================================
// LANGUAGE SWITCHER
// =====================================================

const translations = {

    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-services": "Services",
        "nav-menu": "Menu",
        "nav-gallery": "Gallery",
        "nav-reviews": "Reviews",
        "nav-faq": "FAQs",
        "nav-contact": "Contact",
        "nav-getquote": "Get Quote",

        "hero-title":
            "Royal Flavors for Unforgettable Celebrations",

        "hero-desc":
            "Hyderabad’s premier Veg & Non-Veg catering service for weddings, corporate banquets, and private occasions.",

        "btn-quote": "Get A Custom Quote",
        "btn-menu": "Explore Menu",
        "btn-call": "Call Now"
    },

    hi: {
        "nav-home": "होम",
        "nav-about": "हमारे बारे में",
        "nav-services": "सेवाएं",
        "nav-menu": "मेन्यू",
        "nav-gallery": "गैलरी",
        "nav-reviews": "समीक्षाएं",
        "nav-faq": "सामान्य प्रश्न",
        "nav-contact": "संपर्क",
        "nav-getquote": "कोटेशन प्राप्त करें",

        "hero-title":
            "यादगार समारोहों के लिए शानदार स्वाद",

        "hero-desc":
            "शादियों, कॉर्पोरेट कार्यक्रमों और निजी समारोहों के लिए हैदराबाद की प्रीमियर वेज और नॉन-वेज कैटरिंग सेवा।",

        "btn-quote": "कस्टम कोटेशन प्राप्त करें",
        "btn-menu": "मेन्यू देखें",
        "btn-call": "अभी कॉल करें"
    },

    te: {
        "nav-home": "హోమ్",
        "nav-about": "మా గురించి",
        "nav-services": "సేవలు",
        "nav-menu": "మెనూ",
        "nav-gallery": "గ్యాలరీ",
        "nav-reviews": "రివ్యూలు",
        "nav-faq": "తరచుగా అడిగే ప్రశ్నలు",
        "nav-contact": "సంప్రదించండి",
        "nav-getquote": "కోటేషన్ పొందండి",

        "hero-title":
            "మరపురాని వేడుకల కోసం అద్భుతమైన రుచులు",

        "hero-desc":
            "వివాహాలు, కార్పొరేట్ కార్యక్రమాలు మరియు ప్రైవేట్ వేడుకలకు హైదరాబాద్‌లో ప్రీమియర్ వెజ్ & నాన్-వెజ్ క్యాటరింగ్ సేవ.",

        "btn-quote": "కస్టమ్ కోటేషన్ పొందండి",
        "btn-menu": "మెనూ చూడండి",
        "btn-call": "ఇప్పుడు కాల్ చేయండి"
    }

};


document.querySelectorAll(".lang-btn").forEach(button => {

    button.addEventListener("click", () => {

        const language = button.dataset.lang;

        document
            .querySelectorAll(".lang-btn")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        if (!translations[language]) return;

        document
            .querySelectorAll("[data-key]")
            .forEach(element => {

                const key = element.dataset.key;

                if (translations[language][key]) {
                    element.textContent =
                        translations[language][key];
                }

            });

    });

});


// =====================================================
// ENQUIRY FORM
// =====================================================

const enquiryForm =
    document.getElementById("enquiry-form");


if (enquiryForm) {

    enquiryForm.addEventListener("submit", async function (event) {

        event.preventDefault();


        // ---------------------------------------------
        // GET FORM VALUES
        // ---------------------------------------------

        const name =
            document.getElementById("fullName").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const eventDate =
            document.getElementById("eventDate").value;

        const eventType =
            document.getElementById("eventType").value;

        const foodPref =
            document.getElementById("foodPref").value;

        const guestCount =
            document.getElementById("guestCount").value;


        // ---------------------------------------------
        // VALIDATION
        // ---------------------------------------------

        if (
            !name ||
            !phone ||
            !eventDate ||
            !eventType ||
            !foodPref ||
            !guestCount
        ) {

            alert("Please fill in all required fields.");

            return;
        }


        // ---------------------------------------------
        // DISABLE BUTTON
        // ---------------------------------------------

        const submitButton =
            document.getElementById("submit-btn");

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.innerText = "Submitting...";
        }


        try {

            // =========================================
            // 1. SAVE TO FIRESTORE
            // =========================================

            const docRef = await addDoc(
                collection(db, "quoteRequests"),
                {
                    name: name,
                    phone: phone,
                    eventDate: eventDate,
                    event: eventType,
                    foodPreference: foodPref,
                    guests: Number(guestCount),
                    message: "Website quote request",
                    createdAt: serverTimestamp()
                }
            );

            console.log(
                "Saved to Firestore:",
                docRef.id
            );


            // =========================================
            // 2. SAVE TO GOOGLE SHEETS
            // =========================================

            try {

                await fetch(
                    GOOGLE_SHEETS_URL,
                    {
                        method: "POST",
                        mode: "no-cors",

                        headers: {
                            "Content-Type":
                                "text/plain;charset=utf-8"
                        },

                        body: JSON.stringify({

                            name: name,

                            phone: phone,

                            eventDate: eventDate,

                            event: eventType,

                            foodPreference: foodPref,

                            guests: guestCount,

                            message:
                                "Website quote request"

                        })
                    }
                );

                console.log(
                    "Request sent to Google Sheets."
                );

            } catch (sheetError) {

                console.error(
                    "Google Sheets error:",
                    sheetError
                );

            }


            // =========================================
            // 3. OPEN WHATSAPP
            // =========================================

            const whatsappMessage =
                `Hello Venus Madhuram Caters!

I would like to request a catering quote:

Name: ${name}
Phone: ${phone}
Event Date: ${eventDate}
Event Type: ${eventType}
Food Preference: ${foodPref}
Guest Count: ${guestCount}`;

            const whatsappURL =
                "https://wa.me/919000055229?text=" +
                encodeURIComponent(whatsappMessage);


            window.open(
                whatsappURL,
                "_blank"
            );


            // =========================================
            // 4. RESET FORM
            // =========================================

            enquiryForm.reset();


            alert(
                "Your enquiry was saved successfully. WhatsApp will open next."
            );


        } catch (error) {

            console.error(
                "Form submission error:",
                error
            );

            alert(
                "Unable to save your enquiry. Please try again."
            );

        } finally {

            if (submitButton) {

                submitButton.disabled = false;

                submitButton.innerText =
                    "Submit Quote Request via WhatsApp";

            }

        }

    });

}