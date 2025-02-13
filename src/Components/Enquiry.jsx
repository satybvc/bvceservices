import Button from "./Button";
import CircleIcon from '../assets/images/enquiry_icon.png'

export default function Enquiry() {
  return (
    <section className="enquiry">
      <div className="circle_icon">
        <img src={CircleIcon} alt="Circle Icon" />
      </div>
      <div className="content_box">
        <div className="content">
          <h1> <em>JUST WANT TO ATTEND? </em> </h1>
          <Button label="Enquiry Now" className={"green"} />
        </div>
      </div>
    </section>
  )
}
