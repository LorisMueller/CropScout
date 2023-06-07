import "./imprint.css"
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
                <div>
                    <strong>CropScout AG</strong><br></br>
                    Farming Street 23<br></br>
                    Zürich, Switzerland<br></br><br></br>

                    <strong>Phone:</strong> +1 (123) 456-7890<br></br>
                    <strong>Email:</strong> info@cropscout.com<br></br><br></br>

                    <strong>Managing Director:</strong> Loris Mueller<br></br><br></br>

                    Registered in: Switzerland<br></br>
                    Registration Number: CH-123456789<br></br><br></br>

                    VAT Identification Number: CH-987654321<br></br><br></br>

                    <em>Please note that the information provided in this imprint is for general informational purposes only. For any specific inquiries or concerns, please contact us directly using the provided contact details.</em>
                </div>

            </div>
        </div>
    )
}

export default Aspects;