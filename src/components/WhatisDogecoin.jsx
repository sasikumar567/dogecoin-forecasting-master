import React, { useEffect, useState } from "react";
import styles from "./Dogecoin.module.css";
import above from "../assets/above.png";

const WhatisDogecoin = () => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd');
        const json = await res.json();
        setPrice(json.dogecoin.usd);
      } catch (err) {
        console.error("Error fetching Dogecoin price:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrice();

    // Optional: auto-refresh every minute
    const interval = setInterval(fetchPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`row justify-content-between ${styles.whatDogecoinWrapper}`}>
        <div className="col-12 col-md-6">
          <h2>What is Dogecoin?</h2>
          <p>At its heart, Dogecoin is the accidental crypto movement that
              makes people smile! It is also an opensource peer-to-peer
              cryptocurrency that utilises blockchain technology, a highly
              secure decentralised system of storing information as a public
              ledger that is maintained by a network of computers called nodes.
              More than this, though, is the ethos of Dogecoin, summarised in
              the Dogecoin Manifesto , and its amazing, vibrant community made
              up of friendly folks just like you! Learn more.</p>

          {/* New Price Display */}
          <div style={{
            marginTop: "20px",
            padding: "10px 15px",
            backgroundColor: "#333",
            color: "#FFD700",
            borderRadius: "8px",
            display: "inline-block",
            fontWeight: "bold",
          }}>
            {loading ? "Loading price…" : `Current Price: $${price.toFixed(4)}`}
          </div>
        </div>

        <div className="col-12 col-md-6">
          <img width="100%" src={above} alt="Dogecoin illustration" />
        </div>
      </div>
    </div>
  );
};

export default WhatisDogecoin;
