import "./aspects.css"
import Navbar from "../../components/navbar/navbar";

function Aspects() {

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet"></link>
            <Navbar />
            <div className="aspectContent">
                Data Privacy Statement:<br /><br />

                Protecting your privacy is important to us at CropScout AG. We collect and use your personal data solely for the purpose of providing our services and ensuring a secure browsing experience. We do not share your information with third parties without your consent. Rest assured that we employ industry-standard security measures to safeguard your data. For more details on how we handle your information, please review our complete Data Privacy Statement.
            </div>
        </div>
    )
}

export default Aspects;