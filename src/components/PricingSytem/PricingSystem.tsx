import React from 'react';

const PricingSystem = () => {
  return (
    <div className="bg-gray-100 font-sans container mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">Streamlined Pricing System for Your Custom Products</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Customer Provides Product Sample:</h2>
        <p className="text-lg">
          When you entrust us with a sample of your product, you open the door to a world of personalized craftsmanship.
          Our skilled team thoroughly examines the sample, assessing its intricacies, materials, and specific requirements.
          This crucial step allows us to understand your vision and ensures that our pricing is tailored to your unique product.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Services We Cover:</h2>
        <ul className="list-disc ml-8 text-lg">
          <li>Design Consultation: Collaborate with our experienced design team to refine and enhance your product concept.</li>
          <li>Pattern Making: Precision is our priority. Our expert pattern makers translate your design into tangible patterns, ensuring accuracy for the production phase.</li>
          <li>Sample Making: Witness your vision come to life with our dedicated sample-making phase, allowing you to assess and approve the prototype.</li>
          <li>Garment Production: Our skilled team of seamstresses and tailors execute the production, ensuring every detail aligns with your specifications.</li>
          <li>Quality Assurance: Rigorous quality checks are implemented at various stages to guarantee the excellence of the final product.</li>
          <li>Packaging: Your custom products are elegantly packaged, ready to make a lasting impression.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Quotation Process:</h2>
        <p className="text-lg">
          Upon receiving your product sample and understanding the scope of work, we initiate the quotation process.
          Our pricing structure is transparent and reflects the craftsmanship, materials, and services involved.
          The quotation provided covers all aspects of production, ensuring there are no hidden costs.
        </p>
        <p className="text-lg">
          Our pricing is competitive, and we strive to offer value for your investment in custom creations.
          We take into account the intricacy of the design, the choice of materials, the quantity required,
          and the overall complexity of the production process.
        </p>
      </div>

      <p className="text-lg">At BaliJava Spirit, our pricing system is not just about numbers; its about the commitment to delivering exceptional quality and ensuring that your custom products are a true reflection of your vision. Trust us to bring your ideas to life with a pricing system that prioritizes transparency, accuracy, and customer satisfaction.</p>
    </div>
  );
}

export default PricingSystem;
