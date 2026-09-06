import { useState } from "react";

function Contact() {
    // 1. Form Data State
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        subject: "",
        message: ""
    });

    // 2. Card Hover State
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Input handle করার ফাংশন
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Form Submit handle করার ফাংশন
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        alert(`Thank you, ${formData.name || 'User'}! Your message has been sent successfully.`);

        // রিসেট ফর্ম
        setFormData({
            name: "",
            mobile: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    // Card Hover Style Function
    const cardStyle = (index: number) => ({
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
        transform: hoveredCard === index ? "translateY(-10px)" : "translateY(0)",
        boxShadow: hoveredCard === index
            ? "0 1rem 3rem rgba(0,0,0,0.175)"
            : "0 0.125rem 0.25rem rgba(0,0,0,0.075)"
    });

    return (
        <div className="bg-light w-100 min-vh-100 d-flex flex-column justify-content-between">
            <div>
                {/* Header Banner */}
                <div
                    className="text-white text-center py-5 px-3 w-100"
                    style={{
                        backgroundColor: "#081b3b",
                        backgroundImage: "radial-gradient(circle at 50% 50%, #0d2859 0%, #030c1b 100%)",
                        paddingBottom: "110px"
                    }}
                >
                    <h1 className="fw-bold fs-1 mb-3">Get in Touch</h1>
                    <p className="lead mx-auto fs-6 fs-md-5" style={{ maxWidth: "700px" }}>
                        Have questions about the PMIT program? We are here to help. Reach out to us via phone, email, or visit our office.
                    </p>
                </div>

                {/* Main Content Container */}
                <div className="container-lg px-3 px-md-4 mb-5">
                    {/* Top Cards */}
                    <div className="row g-4 text-center mb-5" style={{ marginTop: "-80px" }}>
                        {/* Card 1 */}
                        <div className="col-12 col-md-4">
                            <div
                                className="card h-100 border-0 p-4 rounded-4"
                                style={cardStyle(1)}
                                onMouseEnter={() => setHoveredCard(1)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="card-body p-2">
                                    <div className="mb-3 fs-2 text-primary">📍</div>
                                    <h5 className="card-title fw-bold mb-3">Our Location</h5>
                                    <p className="card-text text-muted small mb-0">
                                        Institute of Information Technology (IIT)<br />
                                        Jahangirnagar University<br />
                                        Savar, Dhaka-1342
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-12 col-md-4">
                            <div
                                className="card h-100 border-0 p-4 rounded-4"
                                style={cardStyle(2)}
                                onMouseEnter={() => setHoveredCard(2)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="card-body p-2">
                                    <div className="mb-3 fs-2 text-success">📞</div>
                                    <h5 className="card-title fw-bold mb-3">Contact Info</h5>
                                    <p className="card-text text-muted small mb-0">
                                        <strong>Helpline:</strong> 01319-195766<br />
                                        <strong>Email:</strong> pmit@juniv.edu
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-12 col-md-4">
                            <div
                                className="card h-100 border-0 p-4 rounded-4"
                                style={cardStyle(3)}
                                onMouseEnter={() => setHoveredCard(3)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="card-body p-2">
                                    <div className="mb-3 fs-2 text-warning">🕒</div>
                                    <h5 className="card-title fw-bold mb-3">Office Hours</h5>
                                    <p className="card-text text-muted small mb-0">
                                        <strong>Friday:</strong> 08:30 AM - 06:30 PM<br />
                                        <strong>Saturday:</strong> 08:30 AM - 06:00 PM<br />
                                        <strong>Sunday - Thursday:</strong> 08:30 AM - 04:30 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="row g-4 align-items-start mb-4">
                        {/* Left Column (Map & Social) */}
                        <div className="col-12 col-lg-5">
                            <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-3">
                                <iframe
                                    title="Jahangirnagar University Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4239841853613!2d90.26425317606626!3d23.874558584525048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebb099684323%3A0xb35a4d33eb4f71d5!2sJahangirnagar%20University!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                                    width="100%"
                                    height="280"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>

                            <div className="card border-0 shadow-sm rounded-4 p-3" style={{ backgroundColor: "#eef5ff" }}>
                                <h6 className="fw-bold text-primary mb-2">Connect With Us</h6>
                                <div className="d-flex flex-wrap gap-2">
                                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="btn btn-light border shadow-sm rounded-pill btn-sm px-3 fw-medium text-primary">
                                        🌐 Facebook
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-light border shadow-sm rounded-pill btn-sm px-3 fw-medium text-primary">
                                        💼 LinkedIn
                                    </a>
                                    <a href="https://juniv.edu" target="_blank" rel="noreferrer" className="btn btn-light border shadow-sm rounded-pill btn-sm px-3 fw-medium text-success">
                                        🌐 JU Website
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="col-12 col-lg-7">
                            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5">
                                <h4 className="fw-bold mb-4">Send us a Message</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3 mb-3">
                                        <div className="col-12 col-md-6">
                                            <label className="form-label text-muted small fw-semibold">Your Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="form-control form-control-lg fs-6"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label className="form-label text-muted small fw-semibold">Mobile Number</label>
                                            <input
                                                type="text"
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                className="form-control form-control-lg fs-6"
                                                placeholder="01XXXXXXXXX"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label text-muted small fw-semibold">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control form-control-lg fs-6"
                                            placeholder="you@example.com"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label text-muted small fw-semibold">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="form-control form-control-lg fs-6"
                                            placeholder="Admission Inquiry"
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label text-muted small fw-semibold">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="form-control form-control-lg fs-6"
                                            rows={4}
                                            placeholder="How can we help you?"
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold py-2">
                                        ✈️ Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;