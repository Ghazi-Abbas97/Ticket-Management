import { DataTable, Modal, Button, LegacyCard } from "@shopify/polaris";
import React, { useState } from "react";

const TicketList = () => {
  const [selectedTicket, setSelectedTicket] = useState<any>(null); // Track selected ticket
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility

  // Dummy data for rows
  const rows = [
    ["1", "Inquiry about product", "Pending", "2025-01-21"],
    ["2", "Issue with order", "Answered", "2025-01-20"],
    ["3", "Shipping delay", "Closed", "2025-01-19"],
    ["4", "delivery", "Closed", "2025-01-18"],
    ["5", "example", "Closed", "2025-01-17"],
  ];

  const handleRowClick = (rowData: any) => {
    setSelectedTicket(rowData); // Set selected ticket data
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedTicket(null); // Reset selected ticket
  };

  return (
    <div style={{ padding: "30px" }}>
      <LegacyCard>
        <DataTable
          columnContentTypes={["text", "text", "text", "text", "text"]} // 5 columns now
          headings={["No.", "Inquiry", "Status", "Date", "Action"]} // Updated headings
          rows={rows.map((row) => [
            ...row,
            <Button onClick={() => handleRowClick(row)}>View Details</Button>, // Add button to view details in the last column
          ])}
        />
      </LegacyCard>

      {/* Modal for displaying ticket details */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        title="Ticket Details"
        primaryAction={{
          content: "Close",
          onAction: handleCloseModal,
        }}
      >
        <Modal.Section>
          <div>
            <h4>Ticket Number: {selectedTicket ? selectedTicket[0] : ""}</h4>
            <p>
              <strong>Inquiry:</strong>{" "}
              {selectedTicket ? selectedTicket[1] : ""}
            </p>
            <p>
              <strong>Status:</strong> {selectedTicket ? selectedTicket[2] : ""}
            </p>
            <p>
              <strong>Date:</strong> {selectedTicket ? selectedTicket[3] : ""}
            </p>
          </div>
        </Modal.Section>
      </Modal>
    </div>
  );
};

export default TicketList;
