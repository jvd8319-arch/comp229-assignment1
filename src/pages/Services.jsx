import React from "react";
import "./Services.css"; // keep this only if you already have a Services.css file

function Services() {
  return (
    <div className="services-wrapper">
      <h1 className="services-title">Services</h1>

      <p className="services-intro">
        Based on over 17 years of experience in Healthcare IT, IT Operations, 
        Service Desk Management, and ITIL-based service delivery, I provide 
        professional support and solutions that ensure stable, secure, and 
        efficient IT environments.
      </p>

      <div className="services-list">

        {/* SERVICE 1 */}
        <div className="service-item">
          <h2>IT Service Desk & Daily IT Operations Support</h2>
          <p>
            End-to-end support for day-to-day IT operations, ensuring smooth 
            functioning of enterprise and healthcare environments. This includes 
            managing Service Desk teams, resolving incidents, handling service 
            requests, monitoring system performance, and coordinating with 
            technical teams to maintain uninterrupted IT services.
          </p>
        </div>

        {/* SERVICE 2 */}
        <div className="service-item">
          <h2>ITIL-Based Service Management (SLA Aligned)</h2>
          <p>
            Implementation of ITIL best practices to improve service quality, 
            efficiency, and user satisfaction. Services include Incident, Problem, 
            and Change Management, SLA compliance, workflow optimization, 
            knowledge management, and preparation of operational performance 
            reports.
          </p>
        </div>

        {/* SERVICE 3 */}
        <div className="service-item">
          <h2>IT Infrastructure & Network Support</h2>
          <p>
            Support and maintenance of enterprise IT infrastructure including 
            Windows Servers, Active Directory, Group Policy, LAN/WAN networks, 
            firewalls, access points, and network security. Ensuring stable, 
            secure, and optimized IT environments through proactive monitoring 
            and troubleshooting.
          </p>
        </div>

        {/* SERVICE 4 */}
        <div className="service-item">
          <h2>IT Commissioning for New Projects</h2>
          <p>
            Complete IT commissioning for new hospitals, clinics, and enterprise 
            facilities. This includes planning, supervising installation of 
            desktops, networks, CCTV, access control, communication systems, 
            vendor coordination, go-live support, and transitioning systems into 
            operational use.
          </p>
        </div>

        {/* SERVICE 5 */}
        <div className="service-item">
          <h2>Vendor Coordination & IT Asset Management</h2>
          <p>
            Managing vendor relationships, procurement, installation, and 
            maintenance of IT equipment. Ensuring SLA adherence, maintaining 
            asset records, handling warranties, and supporting procurement 
            planning for hardware and software requirements.
          </p>
        </div>

        {/* SERVICE 6 */}
        <div className="service-item">
          <h2>Healthcare IT (HCIT) Support & Clinical System Integration</h2>
          <p>
            Specialized support for healthcare systems including HIS, RIS, PACS, 
            modality connectivity, DICOM workflows, VLAN assignments, patient 
            monitoring systems, and kiosk/self-service systems. Ensuring smooth 
            clinical operations with minimal downtime.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Services;