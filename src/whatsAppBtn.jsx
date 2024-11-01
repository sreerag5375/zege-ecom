const WhatsAppButton = () => {
  const phoneNumber = "8113081034"; // replace with your phone number
  const message = "Hello! I would like to learn more about your services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <button
      onClick={() => window.open(whatsappLink, "_blank")}
      style={{
        backgroundColor: "#25D366",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Chat with us on WhatsApp
    </button>
  );
};

export default WhatsAppButton;
