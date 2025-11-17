import pythonCert from "../../assets/python.png";
import orgCert from "../../assets/org.png";
import aiCert from "../../assets/AI.png";
import sqlCert from "../../assets/sql.png";

function Certificates() {
    const certs = [
        { img: pythonCert, text: "Programming in Python - Meta" },
        { img: orgCert, text: "Organisational Design - Macquarie" },
        { img: aiCert, text: "Gen AI for Front-End Developers" },
        { img: sqlCert, text: "SQL & Relational Databases - IBM Skills" }
    ];

    return (
        <section id="certificates" className="py-20  bg-slate-100">
            <div className="max-w-6xl mx-auto px-4">
                
                <h2 className="text-3xl font-bold text-center">Certificates</h2>

                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {certs.map((c, i) => (
                        <div 
                            key={i}
                            className="cert-card bg-white rounded-xl p-4 shadow hover:shadow-xl transition"
                        >
                            <img 
                                src={c.img}
                                alt={c.text}
                                className="rounded-lg w-full object-cover"
                            />
                            <p className="text-center mt-3 text-sm font-medium">
                                {c.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certificates;