// regex for Iranian phone numbers 
// Matches formats like +989123456789, 00989123456789, 09123456789, 9123456789
// Starts with +98, 0098, or 0 (optional), followed by 9 and 9 digits

const IR_PHONE = /^(?:\+98|0098|0)?9\d{9}$/;

export default IR_PHONE;