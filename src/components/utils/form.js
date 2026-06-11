export function canSubmitForm(formData) {
  return Object.values(formData).some((value) => String(value).trim() !== "");
}
