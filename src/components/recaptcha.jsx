import ReCAPTCHA from "react-google-recaptcha";

// Recaptcha (Google 로봇 인증)
export default function Recaptcha({ onVerify }) {
  const handleCaptchaChange = (value) => {
    onVerify(value);
  };

  return (
    <div>
      <ReCAPTCHA
        sitekey="6LfVEwkqAAAAACWX4xdffm2kAxCxfyc5dCGtxUA4"
        onChange={handleCaptchaChange}
      />
    </div>
  );
}
