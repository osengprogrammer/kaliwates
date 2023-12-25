import React from 'react'

function FabricService() {
  return (
    <div>
      <div className="bg-gray-100 font-sans">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-8">
            Welcome to BaliJava Spirit
          </h1>

          <p className="text-lg mb-8">
            At BaliJava Spirit, we merge the artistry of garment
            manufacturing with a deep appreciation for an extensive array of
            high-quality fabrics. With a wealth of experience in the industry,
            we take pride in our specialization in a diverse range of fabrics,
            tailored to suit every style, season, and occasion. From the
            timeless allure of silk to the comfort of cotton, the versatility of
            polyester to the natural charm of linen, we offer a comprehensive
            selection of fabrics that defines our commitment to excellence.
          </p>

          <p className="text-lg mb-8">
            As seasoned experts in garment manufacturing, we recognize the
            pivotal role that the choice of fabric plays in shaping the
            character of each piece. Our dedication to craftsmanship and
            meticulous attention to detail extend to every fiber we work with,
            ensuring that each garment is not only a testament to style but also
            a celebration of the unique qualities inherent in the chosen fabric.
          </p>

          <p className="text-lg mb-8">
            Whether you seek the luxurious sheen of satin, the casual comfort of
            jersey, or the rugged durability of denim, our seasoned team of
            professionals possesses the knowledge and expertise to bring your
            vision to life. From concept to creation, we seamlessly navigate the
            world of fabrics, providing you with a diverse palette to express
            your individuality and creativity.
          </p>

          <p className="text-lg mb-8">
            At BaliJava Spirit, we go beyond the ordinary, offering a
            curated selection of fabrics that complements our commitment to
            delivering garments of exceptional quality. Explore the
            possibilities, embrace the textures, and embark on a journey of
            sartorial excellence with fabrics that reflect our dedication to
            craftsmanship and your unique style.
          </p>
        </div>
        <div className="container mx-auto p-8">

    <h1 className="text-4xl font-bold mb-8">Fabric Types</h1>

    <ul className="list-disc ml-8 mb-8">
      <li className="text-lg mb-4">Cotton:
        <ul className="list-disc ml-8">
          <li className="text-base">Cotton is a natural fiber that is breathable and comfortable.</li>
          <li className="text-base">Types include plain cotton, combed cotton, and organic cotton.</li>
        </ul>
      </li>

      <li className="text-lg mb-4">Linen:
        <ul className="list-disc ml-8">
          <li className="text-base">Linen is a natural fiber made from the flax plant, known for its breathability and natural luster.</li>
          <li className="text-base">It has a crisp texture and is often used for summer clothing.</li>
        </ul>
      </li>

      <li className="text-lg mb-4">Wool:
        <ul className="list-disc ml-8">
          <li className="text-base">Wool comes from the fleece of sheep and is known for its warmth and insulation.</li>
          <li className="text-base">Types include merino wool, cashmere, and tweed.</li>
        </ul>
      </li>

      {/* <!-- Add the rest of the fabric types following the same structure --> */}

    </ul>

    <p className="text-lg">These are just a few examples, and there are many more fabrics with unique qualities and applications in the world of garment manufacturing. The choice of fabric depends on factors such as the desired look, feel, functionality, and seasonality of the garment.</p>

  </div>
      </div>
    </div>
  );
}

export default FabricService