import styles from "./page.module.css";



import Button from "@/Components/Button/Button";
import Channels from "./_components/Channels/Channels";

export const metadata = {
  title: "Home Page",
  description: "Home description",
};


export default function Home() {
  return (
    <>

      {/* Custom */}
      <section className={styles.Home}>
        <div className={styles.HomeContent}>
          <div>
            <h6>Welcome To Prime Video</h6>
            <h5>
              Watch the latest movies, TV shows, and award-winning Amazon Originals
            </h5>
            <Button
              LinkTo=""
              LinkText="Join Prime Annual at ₹125/month"
            />
          </div>
        </div>
      </section>


      {/* For Rental */}
      <section className={styles.RentalHome}>
        <div className={styles.RentalHomeContent}>
          <div>
            <h6>Movie Rental on Prime Video</h6>
            <h5>
              Early Access to Movies, before digital subscription
            </h5>
            <Button
              LinkTo=""
              LinkText="Rent Now"
            />
          </div>
        </div>
      </section>

      {/* For Channels */}
      <Channels />

      {/* For Firestick  */}
      <section className={styles.Firestick_Home}>
        <div className={styles.Firestick_HomeContent}>
          <div>
            <h6>Event better With Fire TV Stick</h6>
            <h5>
              The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.
            </h5>
            <Button
              LinkTo=""
              LinkText="Join Prime Annual at ₹125/month"
            />
          </div>
        </div>
      </section>



    </>
  );
}
