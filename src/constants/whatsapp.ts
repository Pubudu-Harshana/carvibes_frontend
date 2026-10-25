export const CARVIBES_WHATSAPP_NUMBER = "94717188814";
export const GOOGLE_MAPS_KOSGAMA_URL = "https://maps.app.goo.gl/H6CuAddC6TZBQ8jx7?g_st=aw";

export const WHATSAPP_MESSAGES = {
  QUOTATIONS:
    "Hi Carvibes, I would like to request a quotation. Could you please provide me with more details about your services and pricing?",
  RESERVATIONS:
    "Hi Carvibes, I would like to make a reservation. Could you please provide me with the available options and reservation details?",
  LOCATIONS:
    "Hi Carvibes, I would like to know your available locations and their addresses. Could you please share the details?",
  PRICE_INQUIRY:
    "Hi Carvibes, I would like to inquire about your vehicle detailing packages and pricing.",
};

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${CARVIBES_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_LINKS = {
  QUOTATIONS: getWhatsAppUrl(WHATSAPP_MESSAGES.QUOTATIONS),
  RESERVATIONS: getWhatsAppUrl(WHATSAPP_MESSAGES.RESERVATIONS),
  LOCATIONS: getWhatsAppUrl(WHATSAPP_MESSAGES.LOCATIONS),
  PRICE_INQUIRY: getWhatsAppUrl(WHATSAPP_MESSAGES.PRICE_INQUIRY),
};

export const getServiceQuotationUrl = (serviceName: string) =>
  getWhatsAppUrl(
    `Hi Carvibes, I would like to request a quotation for the ${serviceName} service. Could you please provide me with more details about your services and pricing?`
  );

export const getPackageBookingUrl = (packageName: string, price?: string) =>
  getWhatsAppUrl(
    `Hi Carvibes, I would like to book the ${packageName}${price ? ` package (${price})` : ""}. Could you please provide me with available slots and reservation details?`
  );

export const getAddOnBookingUrl = (addOnName: string, price?: string) =>
  getWhatsAppUrl(
    `Hi Carvibes, I would like to inquire about adding "${addOnName}"${price ? ` (${price})` : ""} to my detailing service. Could you please share details?`
  );

export const getBranchLocationUrl = (branchName: string) =>
  getWhatsAppUrl(
    `Hi Carvibes, I would like to know more details and the address for your ${branchName} location. Could you please share the details?`
  );

