import Button from "./Button";
import CompassIcon from '../assets/images/compass_icon.png'
export default function Advertise() {
  return (
    <section className="advertise">
      <div className="compass">
        <img src={CompassIcon} alt="Compass" />
      </div>
      <div className="content">
        <h1>Are you an Advertiser? </h1>
        <p> Your peers are networking at <br /> Intersec! </p>
        <Button label={"Request an invite"} className={'green'} />
      </div>
    </section>
  )
}
