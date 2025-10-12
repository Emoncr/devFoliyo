import { useEffect } from "react";

function CalendlyWidget() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/biplobemon-dev/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=af123f"
      style={{height: "500px" }}
    ></div>
  );
}

export default CalendlyWidget;
