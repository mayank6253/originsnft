import React from "react";
import "../Ranking.css";

export default function Ranking() {
  const rankingInfo = [
    {
      collections: "1. Cosmos Characters",
      volume: "6,456",
      hours: "+45.6%",
      days: "-24.07%",
      floorPrice: "0.99",
      category: "Cosmos",
      itmes: "1.2k",
    },
    {
      collections: "2. Cosmos Characters",
      volume: "6,456",
      hours: "+45.6%",
      days: "-24.07%",
      floorPrice: "0.99",
      category: "Cosmos",
      itmes: "1.2k",
    },
    {
      collections: "3. Cosmos Characters",
      volume: "6,456",
      hours: "+45.6%",
      days: "-24.07%",
      floorPrice: "0.99",
      category: "Cosmos",
      itmes: "1.2k",
    },
    {
      collections: "4. Cosmos Characters",
      volume: "6,456",
      hours: "+45.6%",
      days: "-24.07%",
      floorPrice: "0.99",
      category: "Cosmos",
      itmes: "1.2k",
    },
    {
      collections: "5. Cosmos Characters",
      volume: "6,456",
      hours: "+45.6%",
      days: "-24.07%",
      floorPrice: "0.99",
      category: "Cosmos",
      itmes: "1.2k",
    },
    {
      collections: "6. Cosmos Characters",
      volume: "6,456",
      hours: "+45.6%",
      days: "-24.07%",
      floorPrice: "0.99",
      category: "Cosmos",
      itmes: "1.2k",
    },
    {
      collections: "7. Cosmos Characters",
      volume: "6,456",
      hours: "+45.6%",
      days: "-24.07%",
      floorPrice: "0.99",
      category: "Cosmos",
      itmes: "1.2k",
    },
    {
      collections: "8. Cosmos Characters",
      volume: "6,456",
      hours: "+45.6%",
      days: "-24.07%",
      floorPrice: "0.99",
      category: "Cosmos",
      itmes: "1.2k",
    },
    {
      collections: "9. Cosmos Characters",
      volume: "6,456",
      hours: "+45.6%",
      days: "-24.07%",
      floorPrice: "0.99",
      category: "Cosmos",
      itmes: "1.2k",
    },
    {
      collections: "10. Cosmos Characters",
      volume: "6,456",
      hours: "+45.6%",
      days: "-24.07%",
      floorPrice: "0.99",
      category: "Cosmos",
      itmes: "1.2k",
    },
    {
      collections: "11. Cosmos Characters",
      volume: "6,456",
      hours: "+45.6%",
      days: "-24.07%",
      floorPrice: "0.99",
      category: "Cosmos",
      itmes: "1.2k",
    },
    {
      collections: "12. Cosmos Characters",
      volume: "6,456",
      hours: "+45.6%",
      days: "-24.07%",
      floorPrice: "0.99",
      category: "Cosmos",
      itmes: "1.2k",
    },
  ];

  const renderRanks = (rankingInfo, index) => {
    return (
      <tr>
        <th scope="row" style={{ color: "#fff" }} key={index}>
        {rankingInfo.collections}
        </th>
        <td style={{ color: "#B9B0B0" }}>{rankingInfo.volume}</td>
        <td style={{ color: "#00BD0D" }}>{rankingInfo.hours}</td>
        <td style={{ color: "#B32525" }}>{rankingInfo.days}</td>
        <td style={{ color: "#B9B0B0" }}>{rankingInfo.floorPrice}</td>
        <td style={{ color: "#B9B0B0" }}>{rankingInfo.category}</td>
        <td style={{ color: "#B9B0B0" }}>{rankingInfo.itmes}</td>
      </tr>
    );
  };
  return (
    <div>
      <section>
        <div className="container">
          <div className="nfts">
            <div
              className="nft-content text-center"
              style={{ marginTop: "100px" }}
            >
              <h2 className="text-white">Top NFTs</h2>
              <p>
                Lorem ipsum dolor sit amet, arcu lacus. consectetur adipiscing
                elit Mauris sed.
              </p>
            </div>
          </div>
        </div>

        <table className="table" style={{ maxWidth: "912px", margin: "auto" }}>
          <thead>
            <tr>
              <th scope="col" style={{ color: "#B9B0B0" }}>
                Collection
              </th>
              <th scope="col" style={{ color: "#B9B0B0" }}>
                Volume
              </th>
              <th scope="col" style={{ color: "#B9B0B0" }}>
                24h %
              </th>
              <th scope="col" style={{ color: "#B9B0B0" }}>
                7d %
              </th>
              <th scope="col" style={{ color: "#B9B0B0" }}>
                Floor Price
              </th>
              <th scope="col" style={{ color: "#B9B0B0" }}>
                Category
              </th>
              <th scope="col" style={{ color: "#B9B0B0" }}>
                Items
              </th>
            </tr>
          </thead>
          <tbody>{rankingInfo.map(renderRanks)}</tbody>
        </table>
      </section>
    </div>
  );
}
