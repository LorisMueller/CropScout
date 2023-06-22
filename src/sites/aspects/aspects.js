import "./aspects.css"
import Navbar from "../../components/navbar/navbar";

function Aspects() {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet"></link>
            <Navbar />
            <div className="aspectContent">
                Data Privacy Statement:<br /><br />

                Protecting your privacy and ensuring the security of your personal data are fundamental principles at CropScout AG. As a trusted provider of agricultural solutions, we are committed to collecting and utilizing your personal information solely for the purpose of delivering our exceptional services and ensuring a seamless and secure browsing experience for you.

                At CropScout AG, we understand the importance of maintaining the confidentiality of your data. We never share your information with third parties without your explicit consent, as we believe that your privacy should be respected and protected. You can rest assured that your data is handled with the utmost care and in compliance with applicable data protection laws.

                To safeguard your information, we implement and maintain industry-standard security measures. Our advanced systems and protocols are designed to protect against unauthorized access, data breaches, and any potential risks. We continuously strive to stay up-to-date with the latest security advancements, ensuring that your personal data remains secure at all times.

                For more detailed information on how we handle your personal data, we encourage you to get in touch with our dedicated support team. We are here to address any questions or concerns you may have regarding our data privacy practices. Your trust and satisfaction are our top priorities, and we are committed to maintaining the highest standards of privacy and data protection for all our valued users.            </div>
        </div>
    )
}

export default Aspects;