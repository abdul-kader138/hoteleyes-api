export class Helper {
  verification_email_body = (link: string, username: string) => {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
      <h2 style="color: #D90479 ;">🎮 Verify Your Email for Ororo Gaming</h2>
      <p>Hi <strong>${username}</strong>,</p>

      <p>Welcome to <strong>Ororo Gaming</strong>! To complete your registration and unlock all the fun, please verify your email address by clicking the button below.</p>

      <div style="text-align: center; margin: 30px 0;">
        <a href="${link}" style="background-color: #D90479; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">Verify Email</a>
      </div>

      <p>If you didn’t sign up for Ororo Gaming, you can safely ignore this email.</p>

      <p style="margin-top: 40px; font-size: 12px; color: #888;">Need help? Reach out to our support team for assistance.</p>
    </div>
  `;
  };

  reset_password_email_body = (link: string, username: string) => {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
      <h2 style="color: #D90479;">🔐 Reset Your Ororo Gaming Password</h2>
      <p>Hi <strong>${username}</strong>,</p>

      <p>We received a request to reset your password for your Ororo Gaming account. If this was you, click the button below to reset your password:</p>

      <div style="text-align: center; margin: 30px 0;">
        <a href="${link}" style="background-color: #D90479; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">Reset Password</a>
      </div>

      <p>If you did not request a password reset, please ignore this email, and your account will remain secure.</p>

      <p style="margin-top: 40px; font-size: 12px; color: #888;">For any further assistance, feel free to contact our support team.</p>
    </div>
  `;
  };

  subscription_email_body = (link: string) => {
    return `
        <p>Thank you for subscribing to Ororo Newsletter!</p>
        <p><a href="${link}">Click here to confirm</a></p>
        <p>If you don't want to reset password, you can ignore this email.</p>`;
  };

  contact_form_submission_email = (
    name: string,
    subject: string,
    message: string,
  ) => {
    return `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 24px; border-radius: 10px;">
    <h2 style="color: #D90479;">📩 Thank You for Contacting Us</h2>

    <p>Hi <strong>${name}</strong>,</p>

    <p>We have received your message regarding:</p>
    <p><strong>Subject:</strong> ${subject}</p>

    <p style="margin-top: 16px;"><strong>Your Message:</strong></p>
    <blockquote style="background-color: #f9f9f9; padding: 12px; border-left: 4px solid #D90479; border-radius: 5px;">
      ${message}
    </blockquote>

    <p style="margin-top: 24px;">A member of our team will review your request and get back to you as soon as possible. If you need urgent assistance, feel free to reply to this email or reach out directly to <a href="mailto:sales@ororo.games" style="color: #D90479;">info@company.com</a>.</p>

    <p style="margin-top: 40px; font-size: 13px; color: #888;">
      You are receiving this email because you submitted a contact request on our website.<br/>
      If this wasn't you, please ignore this message.
    </p>
  </div>
  `;
  };
}
