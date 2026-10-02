const PHONE_HINT = 'Enter a 10-digit mobile number with country code, e.g. +91 98765 43210';

const onlyDigits = (value) => String(value ?? '').replace(/\D/g, '');

export const validateName = (value) => {
  const name = String(value ?? '').trim();
  if (!name) return 'Name is required';
  if (/\d/.test(name)) return 'Name cannot contain numbers';
  if (!/[A-Za-z]/.test(name)) return 'Please enter a valid name';
  if (name.length < 2) return 'Name must be at least 2 characters';
  if (name.length > 80) return 'Name must be under 80 characters';
  return '';
};

export const validatePhone = (value) => {
  const phone = String(value ?? '').trim();
  if (!phone) return 'Phone number is required';
  if (!/^\s*\+/.test(phone)) return `Country code is required. ${PHONE_HINT}`;
  if (!/^[\d\s+()-]+$/.test(phone)) return `Only digits, spaces and + ( ) - are allowed. ${PHONE_HINT}`;
  const digits = onlyDigits(phone);
  if (digits.length < 11 || digits.length > 13) return PHONE_HINT;
  if (digits.startsWith('91') && digits.length !== 12) return PHONE_HINT;
  if (!/^[1-9]/.test(digits)) return 'Country code cannot start with 0';
  return '';
};

export const validateEmail = (value) => {
  const email = String(value ?? '').trim();
  if (!email) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return 'Please enter a valid email';
  return '';
};

// Normalises to +<countrycode><nationalnumber> with no spaces or symbols.
export const normalisePhone = (value) => `+${onlyDigits(value)}`;