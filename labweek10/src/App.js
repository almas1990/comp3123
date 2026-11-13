
import React, { useState } from "react";

const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon",
];

const initialForm = {
  email: "",
  fullName: "",
  address: "",
  address2: "",
  city: "",
  province: "",
  postalCode: "",
  agree: false,
};

function App() {
  const [formData, setFormData] = useState(initialForm);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.agree) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    setSubmittedData({ ...formData });
  };

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#f5f6f8",
      padding: "35px 15px",
      fontFamily: "Arial, sans-serif",
      color: "#222",
      boxSizing: "border-box",
    },
    container: {
      maxWidth: "850px",
      margin: "0 auto",
      backgroundColor: "#ffffff",
      border: "2px solid #28a745",
      padding: "30px",
      boxSizing: "border-box",
    },
    title: {
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "normal",
      marginTop: "0",
      marginBottom: "30px",
    },
    row: {
      display: "flex",
      flexWrap: "wrap",
      gap: "15px",
      marginBottom: "20px",
    },
    field: {
      flex: "1 1 200px",
      minWidth: "0",
      display: "flex",
      flexDirection: "column",
    },
    label: {
      textAlign: "center",
      marginBottom: "10px",
      fontSize: "15px",
    },
    input: {
      padding: "12px",
      border: "1px solid #ced4da",
      borderRadius: "4px",
      fontSize: "15px",
      width: "100%",
      boxSizing: "border-box",
      backgroundColor: "#ffffff",
    },
    checkboxArea: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "6px",
      marginTop: "20px",
      marginBottom: "20px",
    },
    buttonArea: {
      textAlign: "center",
    },
    button: {
      backgroundColor: "#28a745",
      color: "white",
      padding: "12px 25px",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      cursor: "pointer",
    },
    result: {
      maxWidth: "850px",
      margin: "25px auto 0",
      padding: "25px",
      backgroundColor: "#ffffff",
      border: "1px solid #28a745",
      boxSizing: "border-box",
    },
    resultTitle: {
      textAlign: "center",
      fontSize: "25px",
      marginTop: "0",
      marginBottom: "20px",
    },
    resultRow: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "baseline",
      gap: "10px",
      marginBottom: "15px",
      overflowWrap: "anywhere",
      fontSize: "20px",
    },
    resultLabel: {
      color: "#00a651",
      fontWeight: "bold",
    },
  };

  const resultFields = [
    ["Email", submittedData?.email],
    ["Full Name", submittedData?.fullName],
    ["Address", submittedData?.address],
    ...(submittedData?.address2
      ? [["Address 2", submittedData.address2]]
      : []),
    ["City", submittedData?.city],
    ["Province", submittedData?.province],
    ["Postal Code", submittedData?.postalCode],
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Data Entry Form</h1>

        <form onSubmit={handleSubmit}>
          <div style={styles.row}>
            <div style={styles.field}>
              <label htmlFor="email" style={styles.label}>
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.field}>
              <label htmlFor="fullName" style={styles.label}>
                Name
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.field}>
              <label htmlFor="address" style={styles.label}>
                Address
              </label>
              <input
                id="address"
                type="text"
                name="address"
                placeholder="1234 Main St"
                value={formData.address}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.field}>
              <label htmlFor="address2" style={styles.label}>
                Address 2
              </label>
              <input
                id="address2"
                type="text"
                name="address2"
                placeholder="Apartment, studio, or floor"
                value={formData.address2}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.field}>
              <label htmlFor="city" style={styles.label}>
                City
              </label>
              <input
                id="city"
                type="text"
                name="city"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.field}>
              <label htmlFor="province" style={styles.label}>
                Province
              </label>
              <select
                id="province"
                name="province"
                value={formData.province}
                onChange={handleChange}
                style={styles.input}
                required
              >
                <option value="">Choose...</option>
                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>

            <div style={styles.field}>
              <label htmlFor="postalCode" style={styles.label}>
                Postal Code
              </label>
              <input
                id="postalCode"
                type="text"
                name="postalCode"
                placeholder="Enter postal code"
                value={formData.postalCode}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
          </div>

          <div style={styles.checkboxArea}>
            <input
              id="agree"
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            <label htmlFor="agree">
              Agree Terms &amp; Condition?
            </label>
          </div>

          <div style={styles.buttonArea}>
            <button type="submit" style={styles.button}>
              Submit
            </button>
          </div>
        </form>
      </div>

      {submittedData && (
        <div style={styles.result}>
          <h2 style={styles.resultTitle}>
            Submitted Information
          </h2>

          {resultFields.map(([label, value]) => (
            <div key={label} style={styles.resultRow}>
              <span style={styles.resultLabel}>
                {label}:
              </span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
