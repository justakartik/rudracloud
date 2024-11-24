import { LegalLayout } from "@/components/legal-layout"

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="1/11/2024">
      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">1. Terms</h2>
          <p className="text-gray-400">
            By accessing this Website, accessible from rudracloud.com or any sub-domain related, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">2. Age requirement</h2>
          <p className="text-gray-400">
            By using our services and visiting our website(s), you must be 13 years old or older. Exceptions may be made for users under the age requirement, they have a guardian&apos;s permission to purchase our services. Users who do not meet the minimum age requirement and do not have a legal guardian&apos;s agreement are strictly prohibited and may get a suspension of their services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">3. Use License</h2>
          <p className="text-gray-400 mb-4">
            Permission is granted to temporarily download one copy of the materials on RudraCloud&apos;s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose or for any public display;</li>
            <li>Attempt to reverse engineer any software contained on RudraCloud&apos;s Website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transferring the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">4. Disclaimer</h2>
          <p className="text-gray-400">
            All the materials on RudraCloud&apos;s Website are provided &quot;as is&quot;. RudraCloud makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, RudraCloud does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">5. Limitations</h2>
          <p className="text-gray-400">
            RudraCloud or its suppliers will not be held accountable for any damages that will arise with the use of our hosting services, even if RudraCloud or an authorized representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.
          </p>
        </div>

        {/* Additional sections following the same pattern... */}
        
        <div>
          <h2 className="text-xl font-semibold mb-4">14. Refusal of service</h2>
          <p className="text-gray-400">
            We reserve the right to refuse service to anyone for any reason at any time, and without prior notice.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">15. Alternative Accounts</h2>
          <p className="text-gray-400">
            Using alt accounts (alternative accounts) is strictly prohibited. Using them will result in a suspension from using our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">16. Links</h2>
          <p className="text-gray-400">
            RudraCloud has not reviewed all the content hosted on our service. If you find any inappropriate content (nudity, scam websites, malware, ddos-for-hire, etc.), please contact us via mail abuse@rudracloud.com
          </p>
        </div>
      </section>
    </LegalLayout>
  )
}
