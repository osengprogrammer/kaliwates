import React from 'react';

const ServicesSummary = () => {
  return (
    <div className="bg-gray-100 font-sans container mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">Summary of Our Services</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">A. Production Process:</h2>
        <ul className="list-disc ml-8 text-lg">
          <li><strong>Pattern Design:</strong> Collaborate with our design team to create unique and customized patterns for your garments.</li>
          <li><strong>Pattern Making:</strong> Our expert pattern makers translate your design into tangible patterns, ensuring accuracy for the production phase.</li>
          <li><strong>Fabric Consultant and Selection:</strong> Benefit from the expertise of our fabric consultants who guide you in selecting the best materials for your garments.</li>
          <li><strong>Sewing:</strong> Our skilled team of seamstresses and tailors execute the production, ensuring every detail aligns with your specifications.</li>
          <li><strong>Embroidery:</strong> Add intricate details to your garments with our embroidery services, enhancing the overall aesthetic.</li>
          <li><strong>Handlooming:</strong> Experience the artistry of handloomed fabrics, adding a touch of craftsmanship to your creations.</li>
          <li><strong>Washing:</strong> Our washing process ensures that your garments are treated with care, maintaining their quality and appearance.</li>
          <li><strong>Ironing:</strong> The finishing touch to your garments, ensuring they are perfectly pressed and ready for wear.</li>
          <li><strong>Packaging:</strong> Your custom products are elegantly packaged, ready to make a lasting impression.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">B. Logistic:</h2>
        <ul className="list-disc ml-8 text-lg">
          <li><strong>Take Sample:</strong> We collect product samples directly from you, ensuring a seamless and secure process.</li>
          <li><strong>Take Fabrics:</strong> We take charge of sourcing the best materials for your custom garments, ensuring quality and variety.</li>
          <li><strong>Deliver Products:</strong> We handle the entire logistics process, delivering the final products to your doorstep for your convenience.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">C. Fabric and Design Consultant:</h2>
        <p className="text-lg">Our experienced consultants provide guidance on both fabric selection and design, ensuring your garments are not only visually appealing but also crafted with the finest materials.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">D. Support System 24/7:</h2>
        <p className="text-lg">We offer round-the-clock support to address any inquiries or concerns you may have, providing you with peace of mind and ensuring a smooth collaboration.</p>
      </div>

    </div>
  );
}

export default ServicesSummary;
