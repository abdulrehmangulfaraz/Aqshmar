// src/components/ModalContainer.tsx
import { useModal } from "../context/ModalContext";
import { PolicyModal } from "./modals/PolicyModal";
import { privacySections } from "./PrivacyPolicy";
import { termsSections } from "./TermsOfService";
import { shippingSections } from "./ShipingPolicy"; // typo?
import { policySections } from "./ReturnPolicy";


export const ModalContainer = () => {
  const { activeModal, closeModal } = useModal();

  return (
    <>
      {activeModal === "privacy" && (
        <PolicyModal
          title="Privacy Policy"
          lastUpdated="Last updated: June 27, 2025"
          introText="At Aqshmar™, your privacy is sacred to us. This policy outlines how we collect, use, and protect your information."
          sections={privacySections}
          onClose={closeModal}
        />
      )}
      {activeModal === "terms" && (
        <PolicyModal
          title="Terms of Service"
          lastUpdated="Last updated: June 27, 2025"
          introText="Welcome to Aqshmar. By visiting or shopping from our platform, you agree to these terms."
          sections={termsSections}
          onClose={closeModal}
        />
      )}
      {activeModal === "shipping" && (
        <PolicyModal
          title="Shipping Policy"
          lastUpdated="Last updated: June 27, 2025"
          introText="Learn about our shipping methods, timelines, and costs."
          sections={shippingSections}
          onClose={closeModal}
        />
      )}
      {activeModal === "return" && (
        <PolicyModal
          title="Return Policy"
          lastUpdated="Last updated: June 27, 2025"
          introText="Read about our return process, eligibility, and timelines."
          sections={policySections}
          onClose={closeModal}
        />
      )}
    </>
  );
};
