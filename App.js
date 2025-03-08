import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [applications, setApplications] = useState([]);
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] = useState("Applied");

    const addApplication = (e) => {
        e.preventDefault();
        const newApplication = { company, position, status };
        setApplications([...applications, newApplication]);
        setCompany("");
        setPosition("");
        setStatus("Applied");
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">🚀 Job Application Tracker</h1>

            {/* Job Application Form */}
            <form className="card p-4 shadow-sm" onSubmit={addApplication}>
                <div className="mb-3">
                    <label className="form-label">Company Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Job Position</label>
                    <input
                        type="text"
                        className="form-control"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Application Status</label>
                    <select
                        className="form-select"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option>Applied</option>
                        <option>Interview</option>
                        <option>Rejected</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Add Job Application
                </button>
            </form>

            {/* Job Applications Table */}
            <div className="mt-5">
                <h2>📋 Tracked Applications</h2>
                {applications.length === 0 ? (
                    <p className="text-muted">No applications added yet.</p>
                ) : (
                    <table className="table table-bordered mt-3">
                        <thead className="table-dark">
                            <tr>
                                <th>Company</th>
                                <th>Position</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((app, index) => (
                                <tr key={index}>
                                    <td>{app.company}</td>
                                    <td>{app.position}</td>
                                    <td>
                                        <span
                                            className={`badge ${
                                                app.status === "Applied"
                                                    ? "bg-warning"
                                                    : app.status === "Interview"
                                                    ? "bg-success"
                                                    : "bg-danger"
                                            }`}
                                        >
                                            {app.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default App;

