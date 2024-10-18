// Ensure this runs on the server
"use server";
import { db } from "@/db/db";
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

// Function to submit the contact form data
export async function submitContactForm(formData: ContactFormData) {
  try {
    const { firstName, lastName, email, message } = formData;
    console.log(formData);
    // Return success response
    if (formData) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    // Log the error for debugging
    console.error("Error submitting contact form:", error);

    // Check if the error is a validation error from the database

    // Throw a generic error for failed submissions
    throw new Error("Failed to submit contact form");
  }
}
