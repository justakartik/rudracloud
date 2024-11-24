import { LegalLayout } from "@/components/legal-layout"

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <section className="space-y-8">
        <p className="text-gray-400">
          At RudraCloud, accessible from rudracloud.com, one of our main priorities is the privacy of our visitors. This Privacy Policy page contains types of information that is collected and recorded by RudraCloud and how we use it.
        </p>

        <p className="text-gray-400">
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us via our Email: legal@rudracloud.com
        </p>

        <p className="text-gray-400">
          This Privacy Policy applies only to our online activities and is valid for visitors to our website.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-4">Consent</h2>
          <p className="text-gray-400">
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Information we collect</h2>
          <p className="text-gray-400 mb-4">
            The personal information that you are asked to provide.
          </p>
          <p className="text-gray-400">
            When you register for an Account, we may ask for your contact information such as: Full name, Email, Home Address, City, Phone number, Fax, State, Country, Title and Company/Org.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">How we use your information</h2>
          <p className="text-gray-400 mb-4">
            We use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you</li>
            <li>Send you emails, such as Marketing or important things.</li>
          </ul>
        </div>
      </section>
    </LegalLayout>
  )
}

