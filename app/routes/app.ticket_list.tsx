import GenerateTickets from "app/components/generate_ticket";
import GenerateTicketsTable from "app/components/ticket_table";
import { useState } from "react";

function GenerateTicketsView() {
  const [isShowTicketForm, setIsShowTicketForm] = useState(false);

  const handleShowTicketForm = () => {
    setIsShowTicketForm(true);
  };

  const prevScreen = () => {
    setIsShowTicketForm(false);
  };
  return (
    <>
      {/* Grid Layout */}
      <div style={{ padding: "12px" }}>
        <div
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
        >
          {/* Left Side: Heading */}
          <div
            style={{
              flex: "1 1 50%",
              boxSizing: "border-box",
              padding: "10px",
            }}
          >
            {isShowTicketForm ? (
              <p
                style={{
                  display: "inline-block",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 500,
                  width: "auto",
                  marginBottom: "15px",
                }}
                onClick={prevScreen}
              >
                Go Back
              </p>
            ) : (
              ""
            )}
            <h1
              style={{ fontSize: "20px", fontWeight: "400", color: "#8E897E" }}
            >
              <span> Zendesk Ticket Generate </span>
              {isShowTicketForm ? (
                <span style={{ color: "black" }}>/ Create New Tickets</span>
              ) : (
                ""
              )}
            </h1>
          </div>

          {/* Right Side: Button */}
          {isShowTicketForm ? (
            ""
          ) : (
            <div
              style={{
                flex: "1 1 50%",
                boxSizing: "border-box",
                padding: "10px",
                textAlign: "right",
              }}
            >
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  border: "1px solid #c4c4c4",
                  backgroundColor: "#3D8261",
                  color: "white",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
                onClick={handleShowTicketForm}
              >
                Create Tickets
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div
        style={{ height: "2px", backgroundColor: "#d9d9d9", marginTop: "0px" }}
      ></div>
      {/* <GenerateTickets /> */}
      {isShowTicketForm ? (
        <GenerateTickets setIsShowTicketForm={setIsShowTicketForm} />
      ) : (
        <GenerateTicketsTable />
      )}
    </>
  );
}

export default GenerateTicketsView;
